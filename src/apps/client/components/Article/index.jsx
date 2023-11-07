import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { useDispatch } from 'react-redux';
import styles from './index.module.scss';
import PropTypes from 'prop-types';
import ArticleContent from './ArticleContent';
import { AD_PAGES_ALIASES } from '../../../admin/constants/constants';
import setArticlePageCommercial from '../../store/actions/setArticlePageCommercial';
import getCommercialForArticle from '../../services/client/commercial/getCommercialForArticle';
import shuffleArray from '../../utils/shuffleArray';
import getArticlesByCategory from '../../services/server/getArticlesByCategory';

const Article = ({ article, handleGetArticle, photoPosts, articles, votesList }) => {
    const router = useRouter();
    const dispatch = useDispatch();
    const [otherArticles, setOtherArticles] = useState([]);

    useEffect(() => {
        let timeout;

        if (article?._id) {
            getArticlesByCategory({
                locale: router.locale,
                page: 1,
                size: 15,
                sort: 'desc',
                categoryId: article.data[router.locale]?.category,
                excludeArticleIds: article._id
            }).then((result) => {
                if (result) {
                    setOtherArticles(result.paginatedResults);
                }
            });

            timeout = setTimeout(() => {
                if (article) {
                    // eslint-disable-next-line max-len
                    getCommercialForArticle({ page: AD_PAGES_ALIASES.articlePage, articleId: article._id, category: article.data[router.locale].category, subcategory: article.data[router.locale].subcategory })
                        .then(response => {
                            const commercials =
                                response.map((item) => {
                                    return {
                                        id: item._id,
                                        name: item.data[router.locale]?.name,
                                        link: item.data[router.locale]?.link,
                                        photos: item.data[router.locale]?.photos,
                                        photosHorizontal: item.data[router.locale]?.photosHorizontal,
                                        photosVertical: item.data[router.locale]?.photosVertical,
                                        priorities: item.data[router.locale]?.priorities
                                            .map((priority) => priority[router.locale])
                                            .filter(priority => priority.page === AD_PAGES_ALIASES.articlePage)

                                    };
                                });
                            dispatch(setArticlePageCommercial(shuffleArray(commercials).filter(item => item)));
                        });
                }
            }, 2000);
        }

        return () => {
            clearTimeout(timeout);
        };
    }, [article]);

    return (
        <div className={styles.root}>
            <ArticleContent
                article={article}
                handleGetArticle={handleGetArticle}
                photoPosts={photoPosts}
                articles={articles}
                otherArticles={otherArticles}
                votesList={votesList}
            />
        </div>
    );
};

Article.propTypes = {
    article: PropTypes.object,
    handleGetArticle: PropTypes.func,
    photoPosts: PropTypes.array,
    articles: PropTypes.array,
    votesList: PropTypes.array
};

export default Article;
