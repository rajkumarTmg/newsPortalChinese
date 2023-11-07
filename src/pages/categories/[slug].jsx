import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// COMPONENTS
import CategoryPageContent from '../../apps/client/components/CategoryPageContent';
// SERVICES
import getAuthors from '../../apps/client/services/server/getAuthors';
import getArticlesCategories from '../../apps/client/services/server/getArticlesCategories';
import SEO from '../../apps/client/components/SEO';
import { useRouter } from 'next/router';
import setAudio from '../../apps/client/store/actions/setAudio';
import getPages from '../../apps/client/services/server/getPages';
import getArticles from '../../apps/client/services/server/getArticles';
import PropTypes from 'prop-types';
import getPopularArticlesByCategory from '../../apps/client/services/server/getPopularArticlesByCategory';
import getArticlesByCategoryAlias from '../../apps/client/services/server/getArticlesByCategoryAlias';
import { LOCALES } from '../../apps/client/constants';
import getStaticPropsGenerator from '../../apps/client/utils/getStaticPropsGenerator';

const CategoryPage = ({ articles, votes, popularArticlesInCategory, articlesByCategory }) => {
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
                    file: categoryCurrent.data[router.locale]?.audioFile[0]?.path || '',
                    title: (categoryCurrent.data[router.locale]?.audioFile[0]?.path && categoryCurrent.data[router.locale]?.audioTitle) || ''
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
            <CategoryPageContent
                categories={categories}
                category={category}
                articles={articles?.paginatedResults || []}
                votesList={votes}
                popularArticles={popularArticlesInCategory?.paginatedResults || []}
                intro={articlesByCategory?.paginatedResults || []}
            />
        </>
    );
};

const services = [
    getArticlesCategories,
    getAuthors,
    getPages,
    getArticles,
    getPopularArticlesByCategory,
    getArticlesByCategoryAlias
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

CategoryPage.propTypes = {
    articles: PropTypes.object,
    votes: PropTypes.array,
    popularArticlesInCategory: PropTypes.object,
    articlesByCategory: PropTypes.object
};

CategoryPage.defaultProps = {
    articles: { totalCount: 0, paginatedResults: [] },
    votes: [],
    popularArticlesInCategory: { totalCount: 0, paginatedResults: [] },
    articlesByCategory: { totalCount: 0, paginatedResults: [] }
};

export default CategoryPage;
