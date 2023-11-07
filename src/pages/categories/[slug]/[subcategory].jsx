import React, { useEffect, useMemo, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useRouter } from 'next/router';
import SubcategoryPageContent from '../../../apps/client/components/SubcategoryPageContent';
import SEO from '../../../apps/client/components/SEO';
import getArticlesCategories from '../../../apps/client/services/server/getArticlesCategories';
import getAuthors from '../../../apps/client/services/server/getAuthors';
import setAudio from '../../../apps/client/store/actions/setAudio';
import getPages from '../../../apps/client/services/server/getPages';
import getArticles from '../../../apps/client/services/server/getArticles';
import PropTypes from 'prop-types';
import getArticlesBySubcategoryAlias from '../../../apps/client/services/server/getArticlesBySubcategoryAlias';
import sortFeatured from '../../../apps/client/utils/sortFeatured';
import { LOCALES } from '../../../apps/client/constants';
import getStaticPropsGenerator from '../../../apps/client/utils/getStaticPropsGenerator';

const SubcategoryPage = ({ articles, votes, articlesBySubcategory, articlesFeatured }) => {
    const categories = useSelector(({ data }) => data.categories);
    const [category, setCategory] = useState(null);
    const authors = useSelector(({ data }) => data.authors);
    const [subcategory, setSubcategory] = useState(null);
    const router = useRouter();
    const dispatch = useDispatch();
    const featured = useMemo(() => sortFeatured((subcategory?.data[router.locale]?.featured || []), (articlesFeatured || [])), [subcategory, articlesFeatured]);

    useEffect(() => {
        if (router.query.slug && router.query.subcategory) {
            const currentCategory =
                categories.find(category => category?.data[router.locale]?.alias === router.query.slug);
            const currentSubcategory =
                currentCategory?.subcategories?.find(subcategory => subcategory?.data[router.locale]?.alias === router.query.subcategory);
            if (currentCategory && currentSubcategory) {
                setSubcategory(currentSubcategory);
                setCategory(currentCategory);
                dispatch(setAudio({
                    file: currentSubcategory?.data[router.locale]?.audioFile && currentSubcategory?.data[router.locale]?.audioFile[0]?.path || '',
                    // eslint-disable-next-line max-len
                    title: currentSubcategory?.data[router.locale]?.audioFile && (currentSubcategory?.data[router.locale]?.audioFile[0]?.path && currentSubcategory?.data[router.locale]?.audioTitle) || ''
                }));
            } else {
                router.push('/404');
            }
        }
    }, [router.locale, router.query]);

    return (
        <>
            {
                subcategory &&
                <SEO
                    title={subcategory?.data[router.locale]?.seoTitle}
                    description={subcategory?.data[router.locale]?.seoDescription}
                    keywords={subcategory?.data[router.locale]?.seoKeywords}
                />
            }
            <SubcategoryPageContent
                categories={categories}
                authors={authors}
                category={category}
                subcategory={subcategory}
                articles={articles?.paginatedResults || []}
                votesList={votes}
                recent={articlesBySubcategory?.paginatedResults || []}
                featured={featured || []}
            />
        </>
    );
};

const services = [
    getArticlesCategories,
    getAuthors,
    getPages,
    getArticles,
    getArticlesBySubcategoryAlias
];

const getStaticPathsFunc = () => {
    return getArticlesCategories({})
        .then(({ actions: [{ payload: categories }] }) => {
            return {
                paths: categories
                    .reduce((result, category) => {
                        return [...result, ...category.subcategories.map(subcategory =>
                            LOCALES.map(locale => ({
                                params: {
                                    slug: category?.data[locale].alias,
                                    subcategory: subcategory?.data[locale].alias
                                },
                                locale
                            })))];
                    }, [])
                    .flat(1),
                fallback: 'blocking'
            };
        });
};

export const getStaticPaths = () => getStaticPathsFunc();

export const getStaticProps = async context => getStaticPropsGenerator(context, services);

SubcategoryPage.propTypes = {
    articles: PropTypes.object,
    votes: PropTypes.array,
    articlesBySubcategory: PropTypes.object,
    articlesFeatured: PropTypes.array
};

SubcategoryPage.defaultProps = {
    articles: { totalCount: 0, paginatedResults: [] },
    votes: [],
    articlesBySubcategory: { totalCount: 0, paginatedResults: [] },
    articlesFeatured: []
};

export default SubcategoryPage;
