import React, { useEffect, useMemo, useState } from 'react';
import styles from './index.module.scss';
import Pagination from '../../Pagination';
import { useWindowSize } from '../../../utils/useWindowSize';
import Link from 'next/link';
import { useIntl } from 'react-intl';
import PropTypes from 'prop-types';
import { useRouter } from 'next/router';
import formatDate from '../../../utils/formatDate';
import getArticlesBySubcategory from '../../../services/server/getArticlesBySubcategory';
import Lazy from '../../Lazy';

const MOBILE_WIDTH = 526;
const TABLET_WIDTH = 1280;

const Other = ({ authors, categories, category, subcategory, exclude }) => {
    const [articles, setArticles] = useState([]);
    const router = useRouter();
    const intl = useIntl();
    const { width } = useWindowSize();
    const isMobile = useMemo(() => width <= MOBILE_WIDTH, [width]);
    const isTablet = useMemo(() => width <= TABLET_WIDTH, [width]);
    const ITEMS_PER_PAGE = useMemo(() => isMobile ? 2 : isTablet ? 20 : 24, [isMobile, isTablet]);
    const PAGE_NUMBER_LIMIT = useMemo(() => isMobile ? 3 : 10, [isMobile]);
    const [currentPage, setCurrentPage] = useState(1);
    const [maxPageLimit, setMaxPageLimit] = useState(PAGE_NUMBER_LIMIT);
    const [minPageLimit, setMinPageLimit] = useState(0);
    const [totalPages, setTotalPages] = useState(0);

    useEffect(() => {
        setCurrentPage(1);
    }, [category, subcategory, ITEMS_PER_PAGE, isMobile]);

    useEffect(() => {
        if (category && subcategory) {
            handleGetArticles(exclude);
        }
    }, [router.locale, currentPage, category, subcategory, exclude, ITEMS_PER_PAGE, isMobile]);

    const handleGetArticles = () => {
        getArticlesBySubcategory({
            locale: router.locale,
            page: currentPage,
            size: ITEMS_PER_PAGE,
            sort: 'desc',
            categoryId: category._id,
            subcategoryId: subcategory._id,
            excludeArticleIds: exclude.map(item => item._id).filter(item => !!item).join(',')
        }).then((result) => {
            if (result) {
                setArticles(result.paginatedResults);
                setTotalPages(Math.ceil(result.totalCount / ITEMS_PER_PAGE));
            }
        });
    };

    const handlePageChange = (page) => {
        setCurrentPage(page);
    };

    useEffect(() => {
        if (currentPage < PAGE_NUMBER_LIMIT) {
            setMaxPageLimit(PAGE_NUMBER_LIMIT);
            setMinPageLimit(0);
        }
        if (currentPage >= PAGE_NUMBER_LIMIT && currentPage <= (totalPages - PAGE_NUMBER_LIMIT + 1)) {
            setMaxPageLimit(currentPage + Math.floor((PAGE_NUMBER_LIMIT - 1) / 2));
            setMinPageLimit(currentPage - Math.floor(((PAGE_NUMBER_LIMIT - 1) / 2)) - 1);
        }

        if (currentPage > (totalPages - PAGE_NUMBER_LIMIT + 1)) {
            setMaxPageLimit(totalPages);
            setMinPageLimit(totalPages - PAGE_NUMBER_LIMIT);
        }
    }, [currentPage, totalPages, PAGE_NUMBER_LIMIT]);

    const onPrevClick = () => {
        setCurrentPage(prev => prev - 1);
    };

    const onNextClick = () => {
        setCurrentPage(prev => prev + 1);
    };

    const onFirstClick = () => {
        setMinPageLimit(0);
        setMaxPageLimit(PAGE_NUMBER_LIMIT);
        setCurrentPage(1);
    };

    const onLastClick = () => {
        setMinPageLimit(totalPages - PAGE_NUMBER_LIMIT);
        setMaxPageLimit(totalPages);
        setCurrentPage(totalPages);
    };

    return (
        <>
            {
                !!articles.length && <React.Fragment>
                    <div className={styles.root}>
                        <div className={styles.titleWrapper}>
                            <div className={styles.containerLeft}>
                                <span className={styles.wholeLine}/>
                                <span className={styles.wholeLine}/>
                                <span className={styles.wholeLine}/>
                                <span className={styles.wholeLine}/>
                            </div>
                            <h6 className={styles.title}>
                                {intl.formatMessage({ id: 'common.column' })}
                            </h6>
                            <div className={styles.containerRight}>
                                <span className={styles.wholeLine}/>
                                <span className={styles.wholeLine}/>
                                <span className={styles.wholeLine}/>
                                <span className={styles.wholeLine}/>
                            </div>
                        </div>
                        <div className={styles.list}>
                            {articles.map((article) => {
                                const author = authors.find((author) => author._id === article.data[router.locale]?.author);
                                const category = article && categories.find((category) => category._id === article.data[router.locale]?.category);
                                const subcategory = article &&
                                        article.data[router.locale]?.subcategory &&
                                        category?.subcategories?.find((subcategory) => subcategory._id === article.data[router.locale]?.subcategory);

                                return <div className={styles.article} key={article?._id}>
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
                                        <p className={styles.category}>
                                            {
                                                category &&
                                                    <Link href={`/categories/${category?.data[router.locale]?.alias}`}>
                                                        <a className={styles.link}>{category?.data[router.locale]?.name}</a>
                                                    </Link>
                                            }
                                            {
                                                subcategory && <span className={styles.divider}>｜</span>
                                            }
                                            {subcategory &&
                                                    <span className={styles.source}>
                                                        {/* eslint-disable-next-line max-len */}
                                                        <Link href={`/categories/${category?.data[router.locale]?.alias}/${subcategory?.data[router.locale]?.alias}`}>
                                                            <a className={styles.link}>{subcategory?.data[router.locale]?.name}</a>
                                                        </Link>
                                                    </span>
                                            }
                                        </p>
                                        <Link href={`/${article?.data[router.locale]?.alias}`}>
                                            <a className={styles.articleTitle}>
                                                {article.data[router.locale]?.title}
                                            </a>
                                        </Link>
                                        <p className={styles.articleMetaInfo}>
                                            {author && author?.data[router.locale]?.name}
                                            <span>{formatDate(article.data[router.locale]?.date, router.locale)}</span>
                                        </p>
                                        {/* eslint-disable-next-line max-len */}
                                        <div dangerouslySetInnerHTML={{ __html: article.data[router.locale]?.shortDescription }} className={styles.articleDesc}></div>
                                    </div>
                                </div>;
                            }
                            )}
                        </div>
                    </div>
                    {
                        totalPages > 1 &&
                        <div className={styles.pagination}>
                            <Pagination
                                onFirstClick={onFirstClick}
                                onLastClick={onLastClick}
                                handleChange={handlePageChange}
                                currentPage={currentPage}
                                onNextClick={onNextClick}
                                onPrevClick={onPrevClick}
                                maxPageLimit={maxPageLimit}
                                minPageLimit={minPageLimit}
                                totalPages={totalPages}
                            />
                        </div>
                    }
                </React.Fragment>
            }
        </>
    );
};

Other.propTypes = {
    authors: PropTypes.array,
    categories: PropTypes.array,
    exclude: PropTypes.array,
    category: PropTypes.object,
    subcategory: PropTypes.object
};

export default Other;
