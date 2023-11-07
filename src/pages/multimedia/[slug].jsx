import React, { useEffect, useState } from 'react';
import MultimediaPageContent from '../../apps/client/components/MultimediaPageContent';
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import SEO from '../../apps/client/components/SEO';
import getArticlesCategories from '../../apps/client/services/server/getArticlesCategories';
import getAuthors from '../../apps/client/services/server/getAuthors';
import setAudio from '../../apps/client/store/actions/setAudio';
import getPages from '../../apps/client/services/server/getPages';
import getArticles from '../../apps/client/services/server/getArticles';
import PropTypes from 'prop-types';
import getPostsByCategoryAlias from '../../apps/client/services/server/getPostsByCategoryAlias';
import { LOCALES } from '../../apps/client/constants';
import getStaticPropsGenerator from '../../apps/client/utils/getStaticPropsGenerator';

const MultimediaPage = ({ articles, votes, postsByCategory }) => {
    const categories = useSelector(({ data }) => data.categories);
    const [category, setCategory] = useState(null);
    const router = useRouter();
    const dispatch = useDispatch();

    useEffect(() => {
        if (router.query.slug) {
            const categoryCurrent = categories.find((category) => category?.data[router.locale]?.alias === router.query.slug);
            if (categoryCurrent) {
                setCategory(categoryCurrent);
                dispatch(setAudio({
                    file: categoryCurrent.data[router.locale]?.audioFile && categoryCurrent.data[router.locale]?.audioFile[0]?.path || '',
                    // eslint-disable-next-line max-len
                    title: categoryCurrent.data[router.locale]?.audioFile && (categoryCurrent.data[router.locale]?.audioFile[0]?.path && categoryCurrent.data[router.locale]?.audioTitle) || ''
                }));
            } else {
                router.push('/404');
            }
        }
    }, [router.locale, router.query]);

    return (
        <>
            {
                category &&
                <SEO
                    title={category?.data[router.locale]?.seoTitle}
                    description={category?.data[router.locale]?.seoDescription}
                    keywords={category?.data[router.locale]?.seoKeywords}
                />
            }
            <MultimediaPageContent
                categories={categories}
                category={category}
                articles={articles.paginatedResults}
                votesList={votes}
                postsIntro={postsByCategory?.paginatedResults.slice(0, 6) || []}
            />
        </>
    );
};

const services = [
    getArticlesCategories,
    getAuthors,
    getPages,
    getArticles,
    getPostsByCategoryAlias
];

const getStaticPathsFunc = () => {
    return getArticlesCategories({})
        .then(({ actions: [{ payload: categories }] }) => {
            return {
                paths: categories
                    .map(category => LOCALES.map(locale => ({ params: { slug: category?.data[locale].alias }, locale })))
                    .flat(1),
                fallback: 'blocking'
            };
        });
};

export const getStaticPaths = () => getStaticPathsFunc();

export const getStaticProps = async context => getStaticPropsGenerator(context, services);

MultimediaPage.propTypes = {
    articles: PropTypes.object,
    votes: PropTypes.object,
    postsByCategory: PropTypes.object
};

MultimediaPage.defaultProps = {
    articles: { totalCount: 0, paginatedResults: [] },
    votes: [],
    postsByCategory: { totalCount: 0, paginatedResults: [] }
};

export default MultimediaPage;
