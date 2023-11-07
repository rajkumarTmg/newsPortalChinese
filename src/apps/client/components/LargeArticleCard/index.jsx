import React, { useEffect, useState } from 'react';
import styles from './index.module.scss';
import Image from 'next/image';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import CommentsSVG from '../../../../../public/images/svg/comments.svg';
import LikeSVG from '../../../../../public/images/svg/like.svg';
import ShareSVG from '../../../../../public/images/svg/share.svg';
import ArrowIconSVG from '../../../../../public/images/svg/circleArrow.svg';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { useDispatch, useSelector } from 'react-redux';
import formatDate from '../../utils/formatDate';
import userLike from '../../services/client/userLikeArticle';
import getUserLikes from '../../services/client/getUserLikes';
import setUserLikes from '../../store/actions/setUserLikes';
import setSignInPopup from '../../store/actions/setSignInPopup';
// import dynamic from 'next/dynamic';
import formatDateRelative from '../../utils/formatDateRelative';
import Lazy from '../Lazy';
// IMAGES
import ArrowSimpleIconSVG from '../../../../../public/images/svg/arrowSimple.svg';
import MoreIconSVG from '../../../../../public/images/svg/more.svg';
import ShareIconSVG from '../../../../../public/images/svg/shareIcon.svg';
import ViewIconSVG from '../../../../../public/images/svg/viewIcon.svg';
import getArticleById from '../../services/server/getArticleById';
import setDraftLikeArticle from '../../store/actions/setDraftLikeArticle';
import { getTokenUser } from '../../utils/manageToken';
import setSignUpPopup from '../../store/actions/setSignUpPopup';

// const ArticleAudio = dynamic(import('../ArticleAudio'), { ssr: false });

const LargeArticleCard = ({ theme, withStats, article }) => {
    const [cardArticle, setCardArticle] = useState(article);
    const categories = useSelector(({ data }) => data.categories);
    const router = useRouter();
    const dispatch = useDispatch();
    const category = cardArticle && categories.find((category) => category._id === cardArticle.data[router.locale]?.category);
    const subcategory = cardArticle &&
        cardArticle.data[router.locale]?.subcategory &&
        category?.subcategories?.find((subcategory) => subcategory._id === cardArticle.data[router.locale]?.subcategory);
    const authors = useSelector(({ data }) => data.authors);
    const author = authors.find((author) => author._id === cardArticle.data[router.locale]?.author);
    const token = useSelector(({ application }) => application.token);
    const user = useSelector(({ application }) => application.user);
    const likes = useSelector(({ application }) => application.likes).articles;
    const [isLiked, setIsLiked] = useState(cardArticle && !!likes.filter((id) => id === cardArticle._id).length);

    useEffect(() => {
        setIsLiked(cardArticle && !!likes.filter((id) => id === cardArticle._id).length);
    }, [likes]);

    useEffect(() => {
        setCardArticle(article);
    }, [article]);

    const rootClassNames = classNames(styles.root, {
        [styles[theme]]: theme
    });

    const handleLike = (id) => () => {
        if (user) {
            userLike(token, id, user._id).then((result) => {
                getArticleById({ locale: router.locale, id: article._id }).then((result) => {
                    if (result) {
                        setCardArticle(result);
                    }
                });
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

    return (
        <div className={rootClassNames}>
            {
                (theme !== 'subCategoryPage' && theme !== 'categoryPage') &&
                <span className={styles.category}>
                    <Link href={`/categories/${category?.data[router.locale]?.alias}`}>
                        <a className={styles.category}>{'> '} {category?.data[router.locale]?.name}</a>
                    </Link>
                </span>
            }
            <div className={styles.card}>
                {/*
                    cardArticle.data[router.locale]?.audioFile && cardArticle.data[router.locale]?.audioFile[0]?.path &&
                    <div className={styles.audio}>
                        <ArticleAudio
                            title={cardArticle.data[router.locale]?.audioTitle}
                            file={cardArticle.data[router.locale]?.audioFile[0]?.path}
                            theme={theme}
                        />
                    </div>
                */}
                <Link href={`/${cardArticle?.data[router.locale]?.alias}`}>
                    <a className={styles.largeArticleImage}>
                        <Lazy>
                            <picture>
                                <source srcSet={cardArticle.data[router.locale]?.avatar[0].pathWebp} type='image/webp' />
                                <img src={cardArticle.data[router.locale]?.avatar[0].path} alt={cardArticle.data[router.locale]?.title} />
                            </picture>
                        </Lazy>
                    </a>
                </Link>
                <p className={styles.categorySecondary}>
                    <Link href={`/categories/${category?.data[router.locale]?.alias}`}>
                        <a className={styles.category}>{category?.data[router.locale]?.name}</a>
                    </Link>
                    {subcategory &&
                        <span className={styles.flexContainer}>
                            <span className={styles.divider}>{' | '}</span>
                            <Link href={`/categories/${category?.data[router.locale]?.alias}/${subcategory?.data[router.locale]?.alias}`}>
                                <a className={styles.source}>{subcategory?.data[router.locale]?.name}</a>
                            </Link>
                        </span>
                    }
                </p>
                <div className={styles.info}>
                    <Link href={`/${cardArticle?.data[router.locale]?.alias}`}>
                        <a className={styles.title}>
                            {cardArticle.data[router.locale]?.title}
                        </a>
                    </Link>
                    <div className={styles.metaInfoWrapper}>
                        <p className={styles.date}>
                            <span className={styles.author}>
                                {author && author?.data[router.locale]?.name}</span>
                            {formatDate(cardArticle.data[router.locale]?.date, router.locale)}
                        </p>
                        <div className={styles.commentsStat}>
                            <div>
                                <Image src='/images/share.png' width={26} height={26}/>
                                <p>{cardArticle?.shares?.toLocaleString() || 0}</p>
                            </div>
                            <div>
                                <Image src='/images/comment.png' width={22} height={22}/>
                                <p>{cardArticle?.comments.count}</p>
                            </div>
                        </div>
                    </div>
                    <p className={styles.desc}>
                        <span dangerouslySetInnerHTML={{ __html: cardArticle.data[router.locale]?.shortDescription }}></span>
                        <Link href={`/${cardArticle?.data[router.locale]?.alias}`}>
                            <a className={styles.arrow}>
                                {
                                    theme !== 'subCategoryPage'
                                        ? <ArrowSimpleIconSVG/>
                                        : <MoreIconSVG/>
                                }
                            </a>
                        </Link>
                        <Link href={`/${cardArticle?.data[router.locale]?.alias}`}>
                            <a className={styles.arrowIcon}>
                                <ArrowIconSVG/>
                            </a>
                        </Link>
                    </p>
                    {withStats && <div className={styles.statistics}>
                        <div className={styles.statisticsItem}>
                            <CommentsSVG width={25} height={25}/>
                            <p className={styles.count}>{cardArticle.comments.count}</p>
                        </div>
                        <div className={classNames(styles.statisticsItem, {
                            [styles.liked]: isLiked
                        })}>
                            <div className={styles.likeButton} onClick={handleLike(cardArticle._id)}>
                                <LikeSVG width={25} height={25}/>
                            </div>
                            <p className={styles.count}>{cardArticle.likes.count}</p>
                        </div><div className={styles.statisticsItem}>
                            <ShareSVG width={25} height={25}/>
                            <p className={styles.count}>{cardArticle?.shares?.toLocaleString() || 0}</p>
                        </div>
                    </div>
                    }
                    {withStats && <div className={styles.statisticsModeTwo}>
                        <span><ViewIconSVG width={20} height={16}/> {cardArticle.views?.toLocaleString() || 0}</span>
                        <span><ShareIconSVG width={15} height={16}/> {cardArticle.shares?.toLocaleString() || 0}</span>
                        <span>{formatDateRelative(cardArticle.data[router.locale]?.date, router.locale)}</span>
                    </div>
                    }
                </div>
            </div>
        </div>
    );
};

LargeArticleCard.propTypes = {
    theme: PropTypes.string,
    withStats: PropTypes.bool,
    article: PropTypes.object
};

export default LargeArticleCard;
