import React, { useEffect, useMemo, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import { useRouter } from 'next/router';
import styles from './index.module.scss';
import dynamic from 'next/dynamic';
import { FormattedMessage, useIntl } from 'react-intl';
import { useDispatch, useSelector } from 'react-redux';
// COMPONENTS
import ArticleBody from '../ArticleBody';
import Sidebar from '../SideBar';
import Categories from '../Categories';
import Link from 'next/link';
import CommentSVG from '../../../../../../public/images/svg/comments.svg';
import LikeSVG from '../../../../../../public/images/svg/like.svg';
import ShareSVG from '../../../../../../public/images/svg/share.svg';
import SideStatistic from '../SideStatistic';
import Author from './Author';
// UTILS
import formatDate from '../../../utils/formatDate';
import userLike from '../../../services/client/userLikeArticle';
import getUserLikes from '../../../services/client/getUserLikes';
import setUserLikes from '../../../store/actions/setUserLikes';
import classNames from 'classnames';
import setSignInPopup from '../../../store/actions/setSignInPopup';
import Lazy from '../../Lazy';
// IMAGES
import HomeIconSVG from '../../../../../../public/images/svg/home.svg';
// ACTIONS
import userShareArticle from '../../../services/client/userShareArticle';
import Commercial from '../Commercial';
import MoreArticles from '../MoreArticles';
// import Offers from '../Offers';
// import StoreList from '../StoreList';
import setDraftLikeArticle from '../../../store/actions/setDraftLikeArticle';
// import Loader from '../../Loader';
import { getTokenUser } from '../../../utils/manageToken';
import setSignUpPopup from '../../../store/actions/setSignUpPopup';
import Share from './Share';
import AuthorWebp from '../../../../../../public/images/NSC-Author-Book.webp';
import AuthorPNG from '../../../../../../public/images/NSC-Author-Book.png';
const ArticleAudio = dynamic(import('../../ArticleAudio'), {
    ssr: false
});

const ArticleContent = ({ article, handleGetArticle, photoPosts, articles, otherArticles, votesList }) => {
    const router = useRouter();
    const dispatch = useDispatch();
    const intl = useIntl();
    const categories = useSelector(({ data }) => data.categories);
    const category = useMemo(() => article && categories.find((category) => category._id === article.data[router.locale]?.category), [article, categories]);
    const subcategory = useMemo(() => article &&
        // eslint-disable-next-line max-len
        article.data[router.locale]?.subcategory && category?.subcategories?.find((subcategory) => subcategory._id === article.data[router.locale]?.subcategory), [article, category]);
    const authors = useSelector(({ data }) => data.authors);
    const author = useMemo(() => article && authors.find((author) => author._id === article.data[router.locale]?.author), [article, authors]);
    const token = useSelector(({ application }) => application.token);
    const user = useSelector(({ application }) => application.user);
    const likes = useSelector(({ application }) => application.likes).articles;
    const [isLiked, setIsLiked] = useState(article && !!likes.filter((id) => id === article._id).length);
    const photoAuthor = useMemo(() => article && authors.find((author) => author._id === article.data[router.locale]?.photoAuthor), [article, authors]);
    const [fontSize, setFontSize] = useState(0);
    const commentsRef = useRef(null);
    const body = useRef(null);
    const introduction = useRef(null);
    // const [isLoader, setIsLoader] = useState(true);
    const cssLoaded = useSelector(({ application }) => application.loaded);
    // const [loaded, setLoaded] = useState(cssLoaded);

    useEffect(() => {
        // const timeout = setTimeout(() => { setLoaded(cssLoaded); }, 1000);

        return () => {
            // clearTimeout(timeout);
        };
    }, [cssLoaded]);

    useEffect(() => {
        setIsLiked(article && !!likes.filter((id) => id === article._id).length);
    }, [likes]);

    const handleLike = (id) => () => {
        if (user) {
            userLike(token, id, user._id).then((result) => {
                getUserLikes(token, user._id).then(result => {
                    dispatch(setUserLikes(result));
                });
                handleGetArticle();
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

    const handleFontSizeClick = () => {
        if (fontSize !== 2) {
            setFontSize(fontSize + 1);
        } else {
            setFontSize(0);
        }
    };

    const handleShare = () => {
        userShareArticle(article?._id).then(() => {
            handleGetArticle();
        });
    };

    const handleScrollToComments = () => {
        if (commentsRef?.current) {
            commentsRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return <div className={styles.root}>
        {/* <Loader theme={'fullScreen'} open={isLoader || !loaded}/> */}
        {
            article && <React.Fragment>
                <Categories
                    categories={categories}
                    category={category}
                    subcategory={subcategory}
                    article={article}
                    handleShare={handleShare}
                />
                <div className={styles.titleWrapper}>
                    <div className={styles.categoriesMobile}>
                        <Categories
                            categories={categories}
                            category={category}
                            subcategory={subcategory}
                        />
                    </div>
                    <div>
                        <p className={styles.category}>
                            <Link href='/'>
                                <a className={styles.homeIcon}>
                                    <HomeIconSVG/>
                                </a>
                            </Link>
                            <Link href={`/categories/${category?.data[router.locale]?.alias}`}>
                                <a className={styles.link}>{category?.data[router.locale]?.name}</a>
                            </Link>
                            {subcategory &&
                                    <span className={styles.subcategory}>
                                        <span className={styles.divider}></span>
                                        <Link href={`/categories/${category?.data[router.locale]?.alias}/${subcategory?.data[router.locale]?.alias}`}>
                                            <a className={styles.link}>{subcategory?.data[router.locale]?.name}</a>
                                        </Link>
                                    </span>
                            }
                        </p>
                        <div className={styles.title}>
                            <h1>{article.data[router.locale]?.title}</h1>
                        </div>
                        <Author author={author} article={article} handleFontSizeClick={handleFontSizeClick}/>
                        {
                            !article.data[router.locale]?.isOldSiteArticle &&
                            <div dangerouslySetInnerHTML={{ __html: article.data[router.locale]?.shortDescription }} className={styles.subTitle}></div>
                        }
                    </div>
                </div>
                <div className={classNames(styles.introduction, {
                    [styles.noPhotoCaption]: !article.data[router.locale]?.photoDescription
                })} ref={introduction}>
                    <div className={styles.authorWrapper}>
                        <div className={styles.author}>
                            {
                                author &&
                                    <div className={styles.avatar}>
                                        {
                                            author?.data[router.locale]?.avatar[0]
                                                ? <Lazy>
                                                    <picture>
                                                        <source srcSet={author?.data[router.locale]?.avatar[0].pathWebp} type='image/webp' />
                                                        <img src={author?.data[router.locale]?.avatar[0].path} alt={'author'} />
                                                    </picture>
                                                </Lazy>
                                                : <Lazy>
                                                    <picture>
                                                        <source srcSet={AuthorWebp} type='image/webp' />
                                                        <img src={AuthorPNG} alt={'author'} />
                                                    </picture>
                                                </Lazy>
                                                // eslint-disable-next-line max-len
                                                // : <div className={styles.defaultAvatar}>{author?.data[router.locale]?.name.split(' ').map((item) => item.slice(0, 1)).join()}</div>
                                        }
                                    </div>
                            }
                            {
                                author &&
                                    <div className={styles.metaInfo}>
                                        <p className={styles.authorName}>{author?.data[router.locale]?.name}</p>
                                        <p className={styles.date}>{formatDate(article.data[router.locale]?.date, router.locale)}</p>
                                    </div>
                            }
                        </div>
                        <div className={styles.statistics}>
                            <div className={styles.statisticItem}>
                                <div className={styles.commentButton} onClick={handleScrollToComments}><CommentSVG width={25} height={25}/></div>
                                <div className={styles.count}>{article.comments?.count}</div>
                            </div>
                            <div className={classNames(styles.statisticItem, {
                                [styles.liked]: isLiked
                            })}>
                                <div className={styles.likeButton} onClick={handleLike(article._id)}>
                                    <LikeSVG width={25} height={25}/>
                                </div>
                                <div className={styles.count}>{article.likes?.count}</div>
                            </div>
                            <div className={styles.statisticItem}>
                                <div>
                                    <Share url={`/${article?.data[router.locale]?.alias}`} onClose={handleShare}>
                                        <ShareSVG width={25} height={25}/>
                                    </Share>
                                </div>
                                <div className={styles.count}>{article?.shares?.toLocaleString() || 0}</div>
                            </div>
                        </div>
                        <div className={styles.audio}>
                            {
                                article?.data[router.locale]?.audioFile[0]?.path &&
                                    <ArticleAudio
                                        theme='articlePage'
                                        file={article?.data[router.locale]?.audioFile[0]?.path}
                                        title={article?.data[router.locale]?.audioTitle}
                                    />
                            }
                            <div className={styles.letters} onClick={handleFontSizeClick}>
                                <span>A</span>
                                <span>A</span>
                            </div>
                        </div>
                    </div>
                    {
                        !article.data[router.locale]?.isOldSiteArticle &&
                        <div dangerouslySetInnerHTML={{ __html: article.data[router.locale]?.shortDescription }} className={styles.subTitle}></div>
                    }
                    <div className={styles.statisticOnMobile}>
                        <div className={styles.views}>
                            <p>{article?.views?.toLocaleString() || 0} <span>{intl.formatMessage({ id: 'common.views' })}</span></p>
                        </div>
                        <div>
                            <div className={styles.statisticItem}>
                                <div className={styles.commentButton} onClick={handleScrollToComments}><CommentSVG width={15} height={15}/></div>
                                <div className={styles.count}>{article.comments?.count}</div>
                            </div>
                            <div className={classNames(styles.statisticItem, {
                                [styles.liked]: isLiked
                            })}>
                                <div className={styles.likeButton} onClick={handleLike(article._id)}>
                                    <LikeSVG width={15} height={15}/>
                                </div>
                                <div className={styles.count}>{article.likes?.count}</div>
                            </div><div className={styles.statisticItem}>
                                <div>
                                    <Share url={`/${article?.data[router.locale]?.alias}`} onClose={handleShare}>
                                        <ShareSVG width={15} height={15}/>
                                    </Share>
                                </div>
                                <div className={styles.count}>{article?.shares?.toLocaleString() || 0}</div>
                            </div>
                        </div>
                    </div>
                    <div className={styles.imageWrapper}>
                        <SideStatistic
                            article={article}
                            handleLike={handleLike}
                            isLiked={isLiked}
                            handleFontSizeClick={handleFontSizeClick}
                            handleShare={handleShare}
                        />
                        <div className={styles.imageInner}>
                            <div className={styles.articleImage}>
                                <Lazy>
                                    <picture>
                                        <source srcSet={article.data[router.locale]?.avatar[0].pathWebp} type='image/webp' />
                                        <img src={article.data[router.locale]?.avatar[0].path} alt={article.data[router.locale]?.title} />
                                    </picture>
                                </Lazy>
                            </div>
                        </div>
                    </div>
                    {
                        (article.data[router.locale]?.photoDescription || photoAuthor) &&
                        <React.Fragment>
                            <p className={styles.articleImageDesc}>
                                {article.data[router.locale]?.photoDescription}
                            </p>
                            <p className={styles.articleImageRights}>
                                <FormattedMessage id='common.imageCopyright'/>©️
                                <span className={styles.copyrightAuthor}>{photoAuthor && photoAuthor?.data[router.locale]?.name}</span>
                                {
                                    article.data[router.locale]?.photoOrg &&
                                    <span className={styles.copyrightAuthor}>{`| ${article.data[router.locale]?.photoOrg}`}</span>
                                }
                                {
                                    article.data[router.locale]?.photoLink &&
                                    <Link href={article.data[router.locale]?.photoLink}>
                                        <a className={styles.copyrightBuy}>购买此图</a>
                                    </Link>
                                }
                            </p>
                        </React.Fragment>
                    }
                </div>
                <ArticleBody
                    article={article}
                    author={author}
                    fontSize={fontSize}
                    handleFontSizeClick={handleFontSizeClick}
                    handleScrollToComments={handleScrollToComments}
                    bodyRef={body}
                    // setIsLoader={setIsLoader}
                    // isLoader={isLoader}
                    articles={articles}
                    votesList={votesList}
                />
                <Sidebar
                    article={article}
                    posts={photoPosts}
                    handleShare={handleShare}
                    commentsRef={commentsRef}
                    bodyRef={body}
                    introductionRef={introduction}
                    otherArticles={otherArticles}
                    articles={articles}
                />
                <Commercial/>
                <MoreArticles article={article} otherArticles={otherArticles}/>
                {/* <Offers/> */}
                {/* <StoreList/> */}
            </React.Fragment>
        }
    </div>;
};

ArticleContent.propTypes = {
    article: PropTypes.object,
    handleGetArticle: PropTypes.func,
    photoPosts: PropTypes.array,
    articles: PropTypes.array,
    otherArticles: PropTypes.array,
    votesList: PropTypes.array
};

export default ArticleContent;
