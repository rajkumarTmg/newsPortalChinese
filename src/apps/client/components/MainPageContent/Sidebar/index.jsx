import React, { useEffect, useMemo, useState } from 'react';
import styles from './index.module.scss';
import Link from 'next/link';
import Image from 'next/image';
import CommunityHotspot from '../CommunityHotspot';
import ArrowSVG from '../../../../../../public/images/svg/commercial-arrow.svg';
import CommentSVG from '../../../../../../public/images/svg/comments.svg';
import LikeSVG from '../../../../../../public/images/svg/like.svg';
import ShareSVG from '../../../../../../public/images/svg/share.svg';
import PropTypes from 'prop-types';
import { useRouter } from 'next/router';
import { useDispatch, useSelector } from 'react-redux';
import formatDate from '../../../utils/formatDate';
import Lazy from '../../Lazy';
// IMAGES
import ArrowSimpleIconSVG from '../../../../../../public/images/svg/arrowSimple.svg';
import userLike from '../../../services/client/userLikeArticle';
import getArticleById from '../../../services/server/getArticleById';
import getUserLikes from '../../../services/client/getUserLikes';
import setUserLikes from '../../../store/actions/setUserLikes';
import setSignInPopup from '../../../store/actions/setSignInPopup';
import classNames from 'classnames';
import setDraftLikeArticle from '../../../store/actions/setDraftLikeArticle';
import { getTokenUser } from '../../../utils/manageToken';
import setSignUpPopup from '../../../store/actions/setSignUpPopup';
import { FormattedMessage } from 'react-intl';

const Sidebar = ({ article, commercialItem, articlesDiscussed, featuredRightList, articles }) => {
    const articleToRender = useMemo(() => article || articles[10], [articles, article]);
    const featuredRightListToRender = useMemo(() => featuredRightList.length
        ? [...featuredRightList, ...(article ? articles.slice(10, 14) : articles.slice(11, 15))].slice(0, 4)
        : (article ? articles.slice(10, 14) : articles.slice(11, 15)), [featuredRightList, articles, article]);

    const [cardArticle, setCardArticle] = useState(articleToRender);
    const router = useRouter();
    const dispatch = useDispatch();
    // const categories = useSelector(({ data }) => data.categories);
    const authors = useSelector(({ data }) => data.authors);
    // const category = cardArticle && categories.find((category) => category._id === cardArticle.data[router.locale]?.category);
    const author = cardArticle && authors.find((author) => author._id === cardArticle.data[router.locale]?.author);
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

    useEffect(() => {
        setCardArticle(articleToRender);
    }, [articleToRender]);

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

    return (<div className={styles.root}>
        <div className={styles.categoryWrapper}>
            <div className={styles.flowerImg}>
                <Image src='/images/flower.png' layout='fill'/>
            </div>
            <div className={styles.linesMobile}>
                <span/>
                <span/>
                <span/>
            </div>
            <p className={styles.category}><FormattedMessage id='mainPage.sidebarTitle'/>
            </p>
            <div className={styles.lines}>
                <span/>
                <span/>
                <span/>
            </div>
        </div>
        <div >
            {
                cardArticle &&
                    <div className={styles.article}>
                        <Link href={`/${cardArticle?.data[router.locale]?.alias}`}>
                            <a className={styles.articleTitle}>{cardArticle?.data[router.locale]?.title}</a>
                        </Link>
                        <div className={styles.articleMetaInfo}>
                            <p className={styles.date}><span className={styles.author}>{author && author?.data[router.locale]?.name}</span>
                                {formatDate(cardArticle?.data[router.locale]?.date, router.locale)}
                            </p>
                            <div className={styles.statistics}>
                                <div className={styles.statisticsItem}>
                                    <Image src='/images/share.png' width={23} height={23} />
                                    <span>{cardArticle.shares?.toLocaleString() || 0}</span>
                                </div>
                                <div className={styles.statisticsItem}>
                                    <Image src='/images/comment.png' width={19} height={19} />
                                    <span>{cardArticle?.comments.count}</span>
                                </div>
                                <div className={styles.statisticsItem}>
                                    <Image src='/images/letter.png' width={23} height={14} />
                                </div>
                            </div>
                        </div>
                        <div className={styles.articleText}>
                            <span dangerouslySetInnerHTML={{ __html: cardArticle?.data[router.locale]?.shortDescription }}
                                className={styles.articleDesc}
                            ></span>
                            <Link href={`/${cardArticle?.data[router.locale]?.alias}`}>
                                <a className={styles.arrow}><ArrowSimpleIconSVG/></a>
                            </Link>
                            <Link href={`/${cardArticle?.data[router.locale]?.alias}`}>
                                <a className={styles.arrowIcon}>
                                    <ArrowSVG/>
                                </a>
                            </Link>
                        </div>
                        <Link href={`/${cardArticle?.data[router.locale]?.alias}`}>
                            <a className={styles.articleImage}>
                                <Lazy>
                                    <picture>
                                        <source srcSet={cardArticle?.data[router.locale]?.avatar[0].pathWebp} type='image/webp' />
                                        <img src={cardArticle?.data[router.locale]?.avatar[0].path} alt={cardArticle?.data[router.locale]?.title} />
                                    </picture>
                                </Lazy>
                            </a>
                        </Link>
                    </div>
            }
        </div>
        {
            cardArticle &&
                <div className={styles.statisticsSecondary}>
                    <div className={styles.secondaryStatItem}>
                        <div><CommentSVG width={25} height={25}/></div>
                        <span>{cardArticle?.comments.count}</span>
                    </div>
                    <div className={styles.secondaryStatItem}>
                        <div className={classNames(styles.likeButton, {
                            [styles.liked]: isLiked
                        })} onClick={handleLike(cardArticle?._id)}>
                            <LikeSVG width={25} height={25}/>
                        </div>
                        <span>{cardArticle?.likes.count}</span>
                    </div><div className={styles.secondaryStatItem}>
                        <div><ShareSVG width={25} height={25}/></div>
                        <span>{cardArticle?.shares?.toLocaleString() || 0}</span>
                    </div>
                </div>
        }
        <div className={styles.list}>
            {featuredRightListToRender.map((article) => (
                <Link href={`/${article.data[router.locale]?.alias}`} key={article?._id}>
                    <div className={styles.listItem}>
                        <p className={styles.listItemText}>{article.data[router.locale]?.title}</p>
                    </div>
                </Link>
            ))}

        </div>
        <div className={styles.commercial}>
            {
                commercialItem
                    ? <a className={styles.commercialLink} href={commercialItem.link} target='_blank' rel="noreferrer">
                        <Lazy>
                            <picture>
                                <source media="(max-width:526px)" srcSet={commercialItem.photos[0].pathWebp} type='image/webp' />
                                <source media="(max-width:1024px)" srcSet={commercialItem.photosHorizontal[0].pathWebp} type='image/webp' />
                                <source srcSet={commercialItem.photos[0].pathWebp} type='image/webp' />
                                <img src={commercialItem.photos[0].path} alt={commercialItem.name || 'commercial'} />
                            </picture>
                        </Lazy>
                    </a>
                    : <div className={styles.placeholder}>{'AD'}</div>
            }
        </div>
        {
            !!articlesDiscussed?.length &&
                <CommunityHotspot article={articlesDiscussed[0]} otherArticles={articlesDiscussed.slice(1)}/>
        }
    </div>
    );
};

Sidebar.propTypes = {
    article: PropTypes.object,
    commercialItem: PropTypes.object,
    articlesDiscussed: PropTypes.array,
    featuredRightList: PropTypes.array,
    articles: PropTypes.array
};

export default Sidebar;
