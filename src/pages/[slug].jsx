import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Article from '../apps/client/components/Article';
import getArticleByAlias from '../apps/client/services/server/getArticleByAlias';
import getArticlesCategories from '../apps/client/services/server/getArticlesCategories';
import getAuthors from '../apps/client/services/server/getAuthors';
import SEO from '../apps/client/components/SEO';
import { useDispatch, useSelector } from 'react-redux';
import setAudio from '../apps/client/store/actions/setAudio';
import setCurrentArticle from '../apps/client/store/actions/setArticle';
import getPages from '../apps/client/services/server/getPages';
import userViewArticle from '../apps/client/services/client/userViewArticle';
import setViewedArticles from '../apps/client/store/actions/setViewedArticles';
import PropTypes from 'prop-types';
import getArticles from '../apps/client/services/server/getArticles';
import getPhotoPostsByArticle from '../apps/client/services/server/getPhotoPostsByArticle';
import { LOCALES } from '../apps/client/constants';
import getStaticPropsGenerator from '../apps/client/utils/getStaticPropsGenerator';

const ArticlePage = ({ photoPosts, articles, articleItem, votes }) => {
    const router = useRouter();
    const [article, setArticle] = useState(articleItem);
    const dispatch = useDispatch();
    const views = useSelector(({ application }) => application.viewedArticles);

    useEffect(() => {
        if (articleItem?._id) {
            setArticle(articleItem);
        }
    }, [articleItem]);

    useEffect(() => {
        if (router.query.slug !== article?.data[router.locale]?.alias || !article?.data[router.locale]?.alias) {
            handleGetArticle();
        }
    }, [router.locale, router.query]);

    useEffect(() => {
        if (article?._id) {
            setArticle(article);
            dispatch(setAudio({
                file: article.data[router.locale]?.audioFileHeader && article?.data[router.locale]?.audioFileHeader[0]?.path || '',
                // eslint-disable-next-line max-len
                title: article.data[router.locale]?.audioFileHeader && (article?.data[router.locale]?.audioFileHeader[0]?.path && article.data[router.locale]?.audioTitleHeader) || ''
            }));
            dispatch(setCurrentArticle(article));
            if (!views.filter((articleId) => articleId === article?._id).length) {
                userViewArticle(article?._id).then(() => {
                    dispatch(setViewedArticles([...views, article?._id]));
                });
            }
        }

        return () => {
            dispatch(setCurrentArticle(null));
        };
    }, [article]);

    const handleGetArticle = () => {
        getArticleByAlias({ locale: router.locale, query: { slug: router.query.slug } }).then(result => {
            if (result?.props?.articleItem?._id) {
                setArticle(result?.props.articleItem);
            } else {
                router.push('/404');
            }
        });
    };

    return (
        <>
            {
                article?.data &&
                <SEO
                    title={article?.data[router.locale]?.seoTitle}
                    description={article?.data[router.locale]?.seoDescription}
                    keywords={article?.data[router.locale]?.seoKeywords}
                    preview={article?.data[router.locale]?.avatar[0]?.path}
                />
            }
            <Article
                article={article?.data && article}
                handleGetArticle={handleGetArticle}
                photoPosts={photoPosts?.paginatedResults.slice(0, 5) || []}
                articles={articles?.paginatedResults || []}
                votesList={votes}
            />
        </>
    );
};

const services = [
    getArticlesCategories,
    getAuthors,
    getPages,
    getPhotoPostsByArticle,
    getArticles,
    getArticleByAlias
];

// export async function getStaticPaths () {
//     return {
//         paths: [],
//         fallback: 'blocking'
//     };
// }

const getStaticPathsFunc = () => {
    return getArticles({})
        .then(({ props: { articles } }) => {
            return {
                paths: articles.paginatedResults
                    .map(article => LOCALES.map(locale => ({ params: { slug: article?.data[locale].alias }, locale })))
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

ArticlePage.defaultProps = {
    photoPosts: { totalCount: 0, paginatedResults: [] },
    articles: { totalCount: 0, paginatedResults: [] },
    articleItem: null,
    votes: []
};

ArticlePage.propTypes = {
    photoPosts: PropTypes.object,
    articles: PropTypes.object,
    articleItem: PropTypes.object,
    votes: PropTypes.array
};

export default ArticlePage;
