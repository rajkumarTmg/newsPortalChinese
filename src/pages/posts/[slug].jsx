import React, { useEffect, useState } from 'react';
import MultimediaPost from '../../apps/client/components/MultimediaPost';
import getPostByAlias from '../../apps/client/services/server/getPostByAlias';
import { useRouter } from 'next/router';
import SEO from '../../apps/client/components/SEO';
import getArticlesCategories from '../../apps/client/services/server/getArticlesCategories';
import getAuthors from '../../apps/client/services/server/getAuthors';
import setAudio from '../../apps/client/store/actions/setAudio';
import { useDispatch, useSelector } from 'react-redux';
import getPages from '../../apps/client/services/server/getPages';
import userViewPost from '../../apps/client/services/client/userViewPost';
import setViewedPosts from '../../apps/client/store/actions/setViewedPosts';
import setCurrentPost from '../../apps/client/store/actions/setPost';
import PropTypes from 'prop-types';
import getPosts from '../../apps/client/services/server/getPosts';
import { LOCALES } from '../../apps/client/constants';
import getStaticPropsGenerator from '../../apps/client/utils/getStaticPropsGenerator';

const MultimediaPage = ({ postItem }) => {
    const router = useRouter();
    const [post, setPost] = useState(null);
    const dispatch = useDispatch();
    const views = useSelector(({ application }) => application.viewedPosts);

    useEffect(() => {
        if (postItem?._id) {
            setPost(postItem);
        }
    }, [postItem]);

    useEffect(() => {
        if (router.query.slug !== post?.data[router.locale]?.alias || !post?.data[router.locale]?.alias) {
            handleGetPost();
        }
    }, [router.locale, router.query]);

    useEffect(() => {
        if (post?._id) {
            setPost(post);
            dispatch(setAudio({
                file: post.data[router.locale]?.audioFile && post.data[router.locale]?.audioFile[0]?.path || '',
                // eslint-disable-next-line max-len
                title: post.data[router.locale]?.audioFile && (post.data[router.locale]?.audioFile[0]?.path && post.data[router.locale]?.audioTitle) || ''
            }));
            dispatch(setCurrentPost(post));
            if (!views.filter((postId) => postId === post?._id).length) {
                userViewPost(post?._id).then(() => {
                    dispatch(setViewedPosts([...views, post?._id]));
                });
            }
        }

        return () => {
            dispatch(setCurrentPost(null));
        };
    }, [post]);

    const handleGetPost = () => {
        getPostByAlias({ locale: router.locale, query: { slug: router.query.slug } }).then(result => {
            if (result?.props?.postItem?._id) {
                setPost(result?.props.postItem);
            } else {
                router.push('/404');
            }
        });
    };

    return (
        <>
            {
                post?.data &&
                <SEO
                    title={post?.data[router.locale]?.seoTitle}
                    description={post?.data[router.locale]?.seoDescription}
                    keywords={post?.data[router.locale]?.seoKeywords}
                />
            }
            <MultimediaPost post={post?.data && post} handleGetPost={handleGetPost}/>
        </>
    );
};

const services = [
    getArticlesCategories,
    getAuthors,
    getPages,
    getPostByAlias
];

const getStaticPathsFunc = () => {
    return getPosts({})
        .then(({ props: { posts } }) => {
            return {
                paths: posts.paginatedResults
                    .map(post => LOCALES.map(locale => ({ params: { slug: post?.data[locale].alias }, locale })))
                    .flat(1),
                fallback: 'blocking'
            };
        });
};

export const getStaticPaths = () => getStaticPathsFunc();

export const getStaticProps = async context => getStaticPropsGenerator(context, services)
    .catch(() => {
        return {
            redirect: {
                destination: '/404',
                permanent: false
            }
        };
    });

MultimediaPage.propTypes = {
    postItem: PropTypes.object
};

MultimediaPage.defaultProps = {
    postItem: null
};

export default MultimediaPage;
