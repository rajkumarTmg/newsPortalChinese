import React, { useEffect, useMemo, useState } from 'react';
import styles from './index.module.scss';
import { useIntl } from 'react-intl';
import PropTypes from 'prop-types';
import { useRouter } from 'next/router';
import getArticlesByCategory from '../../../services/server/getArticlesByCategory';
import classNames from 'classnames';
import { useSelector } from 'react-redux';
import OtherArticleCard from '../OtherArticleCard';
import Pagination from '../../Pagination';
import Subscribe from './Subscribe';
import Lazy from '../../Lazy';
import { useWindowSize } from '../../../utils/useWindowSize';

const MOBILE_WIDTH = 526;
const TABLET_WIDTH = 1440;

const MoreArticles = ({ article, otherArticles }) => {
    const router = useRouter();
    const authors = useSelector(({ data }) => data.authors);
    const categories = useSelector(({ data }) => data.categories);
    const commercials = useSelector(({ commercial }) => commercial.articlePageCommercial.slice(5, 9));
    const [articles, setArticles] = useState([]);
    const { width } = useWindowSize();
    const isMobile = useMemo(() => width <= MOBILE_WIDTH, [width]);
    const isTablet = useMemo(() => width <= TABLET_WIDTH, [width]);
    const ITEMS_PER_PAGE = useMemo(() => isMobile ? 2 : isTablet ? 19 : 11, [isMobile, isTablet]);
    const PAGE_NUMBER_LIMIT = useMemo(() => isMobile ? 3 : 10, [isMobile]);
    const [currentPage, setCurrentPage] = useState(1);
    const [maxPageLimit, setMaxPageLimit] = useState(PAGE_NUMBER_LIMIT);
    const [minPageLimit, setMinPageLimit] = useState(0);
    const [totalPages, setTotalPages] = useState(0);

    useEffect(() => {
        setCurrentPage(1);
    }, [article, isMobile, ITEMS_PER_PAGE]);

    useEffect(() => {
        if (article) {
            handleGetArticles(currentPage);
        }
    }, [article, router.locale, currentPage, isMobile, ITEMS_PER_PAGE, otherArticles]);

    const handleGetArticles = () => {
        getArticlesByCategory({
            locale: router.locale,
            page: currentPage,
            size: ITEMS_PER_PAGE,
            sort: 'desc',
            categoryId: article.data[router.locale]?.category,
            subcategoryId: article.data[router.locale]?.subcategory,
            excludeArticleIds: [article._id, ...otherArticles.map(item => item._id)].join(',')
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

    const intl = useIntl();
    return (articles.length
        ? <div className={styles.root}>
            <div className={classNames(styles.titleWrapper, {
                [styles.onTop]: articles.length < 5
            })}>
                <div className={styles.containerLeft}>
                    <span className={styles.wholeLine}/>
                    <span className={styles.wholeLine}/>
                    <span className={styles.wholeLine}/>
                    <span className={styles.wholeLine}/>
                </div>
                <h6 className={styles.title}>
                    {intl.formatMessage({ id: 'common.moreArticles' })}
                </h6>
                <div className={styles.containerRight}>
                    <span className={styles.wholeLine}/>
                    <span className={styles.wholeLine}/>
                    <span className={styles.wholeLine}/>
                    <span className={styles.wholeLine}/>
                </div>
            </div>
            {
                articles.length < 5 &&
                <div className={styles.thirdSection}>
                    {articles.map((item) =>
                        <div key={item?._id}>
                            <OtherArticleCard article={item} authors={authors} categories={categories}/>
                        </div>
                    )}
                    <div className={styles.adSmall}>
                        {
                            commercials[0]
                                ? <a className={styles.commercialLink} href={commercials[0].link} target='_blank' rel="noreferrer">
                                    <picture>
                                        <source srcSet={commercials[0].photos[0].pathWebp} type='image/webp' />
                                        <img src={commercials[0].photos[0].path} alt={commercials[0].name || 'commercial'} />
                                    </picture>
                                </a>
                                : <div className={styles.placeholder}>{'AD'}</div>
                        }
                    </div>
                </div>
            }
            {
                articles.length >= 5 &&
                <div className={styles.firstSection}>
                    {articles.slice(0, 5).map((item) =>
                        <div key={item?._id}>
                            <OtherArticleCard article={item} authors={authors} categories={categories}/>
                        </div>
                    )}
                    <div className={styles.adSmall}>
                        {
                            commercials[0]
                                ? <a className={styles.commercialLink} href={commercials[0].link} target='_blank' rel="noreferrer">
                                    <Lazy>
                                        <picture>
                                            <source media="(max-width:1024px)" srcSet={commercials[0].photos[0].pathWebp} type='image/webp' />
                                            <source srcSet={commercials[0].photosHorizontal[0].pathWebp} type='image/webp' />
                                            <img src={commercials[0].photosHorizontal[0].path} alt={commercials[0].name || 'commercial'} />
                                        </picture>
                                    </Lazy>
                                </a>
                                : <div className={styles.placeholder}>{'AD'}</div>
                        }
                    </div>
                </div>
            }
            {
                <div className={classNames(styles.firstSection, styles.firstSectionMobile)}>
                    {
                        articles[0] &&
                        <div>
                            <OtherArticleCard article={articles[0]} authors={authors} categories={categories}/>
                        </div>
                    }
                </div>
            }
            {
                <div className={classNames(styles.firstSection, styles.firstSectionMobile, styles.articleSectionMobileSecond)}>
                    {
                        articles[1] &&
                            <div>
                                <OtherArticleCard article={articles[1]} authors={authors} categories={categories}/>
                            </div>
                    }
                </div>
            }
            <div className={classNames(styles.adSpace, {
                [styles.shorterAdSpace]: articles.length < 5
            })}>
                {
                    commercials[1]
                        ? <a className={styles.commercialLinkMobile} href={commercials[1].link} target='_blank' rel="noreferrer">
                            <Lazy>
                                <picture>
                                    <source media="(max-width:526px)" srcSet={commercials[1].photos[0].pathWebp} type='image/webp' />
                                    <source srcSet={commercials[1].photosHorizontal[0].pathWebp} type='image/webp' />
                                    <img src={commercials[1].photosHorizontal[0].path} alt={commercials[1].name || 'commercial'} />
                                </picture>
                            </Lazy>
                        </a>
                        : <div className={styles.placeholderMobile}>{'AD'}</div>
                }
                {/* horizontal */}
                <div className={styles.googleAdMobile}>
                    <amp-ad width="100vw" height="320"
                        type="adsense"
                        data-ad-client="ca-pub-5094837188797246"
                        data-ad-slot="4141301580"
                        data-auto-format="rspv"
                        data-full-width="">
                        <div overflow=""></div>
                    </amp-ad>
                </div>
            </div>
            <div className={styles.subscribeMobile}>
                <Subscribe />
            </div>
            {
                articles.length > 5 &&
                <div className={styles.secondSection}>
                    {articles.slice(5).map((item) =>
                        <div key={item?._id}>
                            <OtherArticleCard article={item} authors={authors} categories={categories}/>
                        </div>
                    )}
                </div>
            }
            <div className={styles.sideAd}>
                {
                    !!articles.length &&
                    <div className={styles.adBanner}>
                        {
                            commercials[2]
                                ? <a className={styles.commercialLinkSide} href={commercials[2].link} target='_blank' rel="noreferrer">
                                    <Lazy>
                                        <picture>
                                            <source srcSet={commercials[2].photosVertical[0].pathWebp} type='image/webp' />
                                            <img src={commercials[2].photosVertical[0].path} alt={commercials[2].name || 'commercial'} />
                                        </picture>
                                    </Lazy>
                                </a>
                                : <div className={styles.placeholderSide}>{'AD'}</div>
                        }
                        {/* vertical */}
                        <div className={styles.googleAd}>
                            <amp-ad width="100vw" height="320"
                                type="adsense"
                                data-ad-client="ca-pub-5094837188797246"
                                data-ad-slot="3921809737"
                                data-auto-format="rspv"
                                data-full-width="">
                                <div overflow=""></div>
                            </amp-ad>
                        </div>
                    </div>
                }
                {
                    articles.length > 9 &&
                    <div className={styles.adBanner}>
                        {
                            commercials[3]
                                ? <a className={styles.commercialLinkSide} href={commercials[3].link} target='_blank' rel="noreferrer">
                                    <Lazy>
                                        <picture>
                                            <source srcSet={commercials[3].photosVertical[0].pathWebp} type='image/webp' />
                                            <img src={commercials[3].photosVertical[0].path} alt={commercials[3].name || 'commercial'} />
                                        </picture>
                                    </Lazy>
                                </a>
                                : <div className={styles.placeholderSide}>{'AD'}</div>
                        }
                        {/* vertical */}
                        <div className={styles.googleAd}>
                            <amp-ad width="100vw" height="320"
                                type="adsense"
                                data-ad-client="ca-pub-5094837188797246"
                                data-ad-slot="3921809737"
                                data-auto-format="rspv"
                                data-full-width="">
                                <div overflow=""></div>
                            </amp-ad>
                        </div>
                    </div>
                }
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
        </div>
        : <div></div>
    );
};

MoreArticles.propTypes = {
    article: PropTypes.object,
    otherArticles: PropTypes.array
};

export default MoreArticles;
