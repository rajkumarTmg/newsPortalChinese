import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Article from '../../apps/client/components/Article';
import getServerSidePropsGenerator from '../../apps/client/utils/getServerSidePropsGenerator';
import getArticlesCategories from '../../apps/client/services/server/getArticlesCategories';
import getAuthors from '../../apps/client/services/server/getAuthors';
import SEO from '../../apps/client/components/SEO';
import { useDispatch, useSelector } from 'react-redux';
import setAudio from '../../apps/client/store/actions/setAudio';
import setCurrentArticle from '../../apps/client/store/actions/setArticle';
import getPages from '../../apps/client/services/server/getPages';
import userViewArticle from '../../apps/client/services/client/userViewArticle';
import setViewedArticles from '../../apps/client/store/actions/setViewedArticles';
import getPhotoPosts from '../../apps/client/services/server/getPhotoPosts';
import PropTypes from 'prop-types';
import getArticles from '../../apps/client/services/server/getArticles';
import getArticlePreview from '../../apps/admin/services/article/getArticlePreview';

const PreviewPage = ({ photoPosts, articles, articleItem, votes }) => {
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
                file: article.data[router.locale]?.audioFileHeader && article.data[router.locale]?.audioFileHeader[0]?.path || '',
                // eslint-disable-next-line max-len
                title: article.data[router.locale]?.audioFileHeader && (article.data[router.locale]?.audioFileHeader[0]?.path && article.data[router.locale]?.audioTitleHeader) || ''
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
        getArticlePreview({ locale: router.locale, query: { slug: router.query.slug } }).then(result => {
            if (result?.articleItem?._id) {
                setArticle(result.articleItem);
            } else {
                router.push('/404');
            }
        });
    };

    return (
        article
            ? <>
                <SEO
                    title={article.data[router.locale]?.seoTitle}
                    description={article.data[router.locale]?.seoDescription}
                    keywords={article.data[router.locale]?.seoKeywords}
                    preview={article.data[router.locale]?.avatar[0]?.path}
                />
                <Article
                    article={article}
                    handleGetArticle={handleGetArticle}
                    photoPosts={photoPosts?.paginatedResults.slice(0, 5) || []}
                    articles={articles?.paginatedResults || []}
                    votesList={votes}
                />
            </>
            : null);
};

const services = [
    getArticlesCategories,
    getAuthors,
    getPages,
    getPhotoPosts,
    getArticles
];

export const getServerSideProps = async context => getServerSidePropsGenerator(context, services)
    .catch(() => {
        return {
            redirect: {
                destination: '/404',
                permanent: false
            }
        };
    });

PreviewPage.propTypes = {
    photoPosts: PropTypes.object,
    articles: PropTypes.object,
    articleItem: PropTypes.object,
    votes: PropTypes.array
};

export default PreviewPage;
