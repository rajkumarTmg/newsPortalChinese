import React, { useEffect, useMemo, useState } from 'react';
import styles from './index.module.scss';
import Pagination from '../../Pagination';
import { useWindowSize } from '../../../utils/useWindowSize';
import Link from 'next/link';
import { useIntl } from 'react-intl';
import PropTypes from 'prop-types';
import { useRouter } from 'next/router';
import formatDate from '../../../utils/formatDate';
import searchArticles from '../../../services/server/searchArticles';
import Lazy from '../../Lazy';
import CommentsSVG from '../../../../../../public/images/svg/comments.svg';
import classNames from 'classnames';
import LikeSVG from '../../../../../../public/images/svg/like.svg';
import ShareSVG from '../../../../../../public/images/svg/share.svg';
import { useDispatch, useSelector } from 'react-redux';
import userLike from '../../../services/client/userLikeArticle';
import getUserLikes from '../../../services/client/getUserLikes';
import setUserLikes from '../../../store/actions/setUserLikes';
import setSignInPopup from '../../../store/actions/setSignInPopup';
import setDraftLikeArticle from '../../../store/actions/setDraftLikeArticle';
import { getTokenUser } from '../../../utils/manageToken';
import setSignUpPopup from '../../../store/actions/setSignUpPopup';

const MOBILE_WIDTH = 526;

const Other = ({ authors, categories, query }) => {
    const [articles, setArticles] = useState([]);
    const router = useRouter();
    const intl = useIntl();
    const { width } = useWindowSize();
    const isMobile = useMemo(() => width <= MOBILE_WIDTH, [width]);
    const ITEMS_PER_PAGE = 10;
    const PAGE_NUMBER_LIMIT = useMemo(() => isMobile ? 3 : 10, [isMobile]);
    const [currentPage, setCurrentPage] = useState(1);
    const [maxPageLimit, setMaxPageLimit] = useState(PAGE_NUMBER_LIMIT);
    const [minPageLimit, setMinPageLimit] = useState(0);
    const [totalPages, setTotalPages] = useState(0);
    const token = useSelector(({ application }) => application.token);
    const user = useSelector(({ application }) => application.user);
    const likes = useSelector(({ application }) => application.likes).articles;
    const dispatch = useDispatch();

    const handleLike = (id) => () => {
        if (user) {
            userLike(token, id, user._id).then((result) => {
                handleGetArticles();
                getUserLikes(token, user._id).then(result => {
                    dispatch(setUserLikes(result));
                });
            });
        } else {
            dispatch(setDraftLikeArticle({ articleId: id }));
            const token = getTokenUser();
            if (token) {
                dispatch(setSignInPopup(true));
            } else {
                dispatch(setSignUpPopup(true));
            }
        }
    };

    useEffect(() => {
        setCurrentPage(1);
    }, [query]);

    useEffect(() => {
        if (query) {
            handleGetArticles(currentPage);
        } else {
            setArticles([]);
            setTotalPages(0);
        }
    }, [router.locale, currentPage, query]);

    const handleGetArticles = () => {
        searchArticles({
            locale: router.locale,
            page: currentPage,
            size: ITEMS_PER_PAGE,
            search: query
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
            <div className={styles.root}>
                <div className={styles.titleWrapper}>
                    <h6 className={styles.title}>
                        <span className={styles.query}>“{query}”</span> {intl.formatMessage({ id: 'search.title' })}
                    </h6>
                </div>
                <div className={styles.list}>
                    {articles.map((article, index) => {
                        const author = authors.find((author) => author._id === article.data[router.locale]?.author);
                        const number = (currentPage - 1) * ITEMS_PER_PAGE + (index + 1);
                        const isLiked = !!likes.filter((id) => id === article._id).length;

                        return <div className={styles.article} key={article?._id}>
                            <div className={styles.header}>
                                <div className={styles.index}>{number}.</div>
                                <Link href={`/${article?.data[router.locale]?.alias}`}>
                                    <a className={styles.articleTitle}>
                                        {article.data[router.locale]?.title}
                                    </a>
                                </Link>
                            </div>
                            <div className={styles.content}>
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
                                <div className={styles.textInfo}>
                                    <p className={styles.articleMetaInfo}>
                                        {author && author?.data[router.locale]?.name}
                                        <span>{formatDate(article.data[router.locale]?.date, router.locale)}</span>
                                    </p>
                                    <div dangerouslySetInnerHTML={{ __html: article.data[router.locale]?.shortDescription }}
                                        className={styles.articleDesc}
                                    ></div>
                                    <div className={styles.statistics}>
                                        <div className={styles.statisticsItem}>
                                            <CommentsSVG width={25} height={25}/>
                                            <p className={styles.count}>{article.comments.count}</p>
                                        </div>
                                        <div className={classNames(styles.statisticsItem, {
                                            [styles.liked]: isLiked
                                        })}>
                                            <div className={styles.likeButton} onClick={handleLike(article._id)}>
                                                <LikeSVG width={25} height={25}/>
                                            </div>
                                            <p className={styles.count}>{article.likes.count}</p>
                                        </div><div className={styles.statisticsItem}>
                                            <ShareSVG width={25} height={25}/>
                                            <p className={styles.count}>{article.shares || 0}</p>
                                        </div>
                                    </div>
                                </div>
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
        </>
    );
};

Other.propTypes = {
    authors: PropTypes.array,
    categories: PropTypes.array,
    query: PropTypes.string
};

export default Other;
