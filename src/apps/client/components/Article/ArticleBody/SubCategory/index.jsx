import React, { useEffect, useState } from 'react';
import styles from './index.module.scss';
import Link from 'next/link';
import PropTypes from 'prop-types';
import { useRouter } from 'next/router';
import { useSelector } from 'react-redux';
import getArticlesRelated from '../../../../services/server/getArticlesRelated';
import Lazy from '../../../Lazy';
// IMAGES
import ShortArrowLeftSVG from '../../../../../../../public/images/svg/shortArrowLeft.svg';
import ShortArrowRightSVG from '../../../../../../../public/images/svg/shortArrowRight.svg';
import classNames from 'classnames';

const SubCategory = ({ article }) => {
    const router = useRouter();
    const categories = useSelector(({ data }) => data.categories);
    const [articles, setArticles] = useState([]);
    const [totalCount, setTotalCount] = useState(0);
    const [page, setPage] = useState(1);
    const itemsPerPage = 2;

    useEffect(() => {
        setPage(1);
    }, [article]);

    useEffect(() => {
        if (article) {
            handleGetArticlesRelated();
        }
    }, [article, router.locale, page]);

    const handleGetArticlesRelated = () => {
        const keywords = article.data[router.locale]?.tags?.split(',').length
            ? article.data[router.locale]?.tags
            : article.data[router.locale]?.tags?.replace(' ', ',');
        getArticlesRelated({
            locale: router.locale,
            page: page,
            size: itemsPerPage,
            sort: 'desc',
            tags: keywords,
            categoryId: article.data[router.locale]?.category,
            subcategoryId: article.data[router.locale]?.subcategory,
            excludeArticleIds: article._id
        }).then((result) => {
            if (result) {
                setArticles(result.paginatedResults);
                setTotalCount(Math.ceil(result.totalCount / itemsPerPage));
            }
        });
    };

    const handleArrowClick = (page) => () => {
        if (page < 1 || page > totalCount) {
            return;
        }

        setPage(page);
    };

    return (
        !!totalCount && <div className={styles.root}>
            <div className={classNames(styles.content, 'subcategoryRoot')}>
                {
                    page > 1 &&
                <div className={styles.arrowLeft} onClick={handleArrowClick(page - 1)}><ShortArrowLeftSVG/></div>
                }
                <div className={styles.articleList}>
                    {articles.map((article) => {
                        const category = categories.find((category) => category._id === article.data[router.locale]?.category);

                        return <div className={styles.articleItem} key={article?._id}>
                            <div className={styles.articleContent}>
                                <Link href={`/${article?.data[router.locale]?.alias}`}>
                                    <a className={styles.articleImage}>
                                        <Lazy>
                                            <picture>
                                                <source srcSet={article.data[router.locale]?.avatar[0].pathWebp} type='image/webp' />
                                                <img src={article.data[router.locale]?.avatar[0].path} alt={article.data[router.locale]?.title} />
                                            </picture>
                                        </Lazy>
                                    </a>
                                </Link>
                                <div>
                                    <Link href={`/categories/${category?.data[router.locale]?.alias}`}>
                                        <a className={styles.articleCategory}>{'> '} {category?.data[router.locale]?.name}</a>
                                    </Link>
                                    <Link href={`/${article?.data[router.locale]?.alias}`}>
                                        <a className={styles.articleText}>
                                            {article.data[router.locale]?.title}
                                        </a>
                                    </Link>
                                </div>
                            </div>
                        </div>;
                    })}
                </div>
                {
                    page !== totalCount &&
                <div className={styles.arrowRight} onClick={handleArrowClick(page + 1)}><ShortArrowRightSVG/></div>
                }
            </div>
        </div>
    );
};

SubCategory.propTypes = {
    article: PropTypes.object
};

export default SubCategory;
