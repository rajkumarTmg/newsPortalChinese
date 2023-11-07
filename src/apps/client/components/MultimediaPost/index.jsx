import React, { useEffect, useMemo, useState } from 'react';
import styles from './index.module.scss';
import MainInfo from './MainInfo';
import PostList from './PostList';
import Join from '../MultimediaPageContent/Join';
import LeaveComment from './LeaveComment';
import CommentItem from './CommentItem';
import PropTypes from 'prop-types';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { useDispatch, useSelector } from 'react-redux';
import getPostById from '../../services/server/getPostById';
import userCommentLike from '../../services/client/userCommentLikePost';
import getUserLikes from '../../services/client/getUserLikes';
import setUserLikes from '../../store/actions/setUserLikes';
import userLike from '../../services/client/userLikePost';
import setSignInPopup from '../../store/actions/setSignInPopup';
import Categories from './Categories';
// IMAGES
import HomeIconSVG from '../../../../../public/images/svg/home.svg';
import Socials from '../Socials';
import setDraftLikePost from '../../store/actions/setDraftLikePost';
import 'overlayscrollbars/css/OverlayScrollbars.css';
import { OverlayScrollbarsComponent } from 'overlayscrollbars-react';
// import Loader from '../Loader';
import { getTokenUser } from '../../utils/manageToken';
import setSignUpPopup from '../../store/actions/setSignUpPopup';
import { useIntl } from 'react-intl';
import userSharePost from '../../services/client/userSharePost';

const MultimediaPost = ({ post, handleGetPost }) => {
    const intl = useIntl();
    const [comments, setComments] = useState(post?.comments.list || []);
    const router = useRouter();
    const dispatch = useDispatch();
    const categories = useSelector(({ data }) => data.categories);
    const category = useMemo(() => post && categories.find((category) => category._id === post?.data[router.locale]?.category), [post, categories]);
    const subcategory = useMemo(() => post &&
        // eslint-disable-next-line max-len
        post?.data[router.locale]?.subcategory && category?.subcategories?.find((subcategory) => subcategory._id === post.data[router.locale]?.subcategory), [post, category]);
    const authors = useSelector(({ data }) => data.authors);
    const author = useMemo(() => post && authors.find((author) => author._id === post?.data[router.locale]?.author), [post, authors]);
    const token = useSelector(({ application }) => application.token);
    const user = useSelector(({ application }) => application.user);
    const likes = useSelector(({ application }) => application.likes);
    const [isLiked, setIsLiked] = useState(post && !!likes.posts.filter((id) => id === post._id).length);
    // const [isLoader, setIsLoader] = useState(true);
    const cssLoaded = useSelector(({ application }) => application.loaded);
    // const [loaded, setLoaded] = useState(cssLoaded);
    let timeout;

    useEffect(() => {
        // const timeout = setTimeout(() => { setLoaded(cssLoaded); }, 1000);

        return () => {
            // clearTimeout(timeout);
        };
    }, [cssLoaded]);

    useEffect(() => {
        setIsLiked(post && !!likes.posts.filter((id) => id === post._id).length);
    }, [likes]);

    useEffect(() => {
        if (post) {
            setComments(post.comments.list);

            // timeout = setTimeout(() => { setIsLoader(false); }, 500);
        }

        return () => {
            clearTimeout(timeout);
        };
    }, [post]);

    const handleCommentsUpdate = () => {
        getPostById({ locale: router.locale, id: post?._id }).then(result => {
            if (result?.data) {
                setComments(result.comments.list);
            }
        });
    };

    const handleCommentLike = (id) => () => {
        if (user) {
            userCommentLike(token, post._id, id, user._id).then(() => {
                getUserLikes(token, user._id).then(result => {
                    dispatch(setUserLikes(result));
                });
                handleCommentsUpdate();
            });
        } else {
            dispatch(setDraftLikePost({ postId: post._id, commentId: id }));
            const token = getTokenUser();
            if (token) {
                dispatch(setSignInPopup(true));
            } else {
                dispatch(setSignUpPopup(true));
            }
        }
    };

    const handleLike = (id) => () => {
        if (user) {
            userLike(token, id, user._id).then(() => {
                getUserLikes(token, user._id).then(result => {
                    dispatch(setUserLikes(result));
                });
                handleGetPost();
            });
        } else {
            dispatch(setDraftLikePost({ postId: id }));
            const token = getTokenUser();
            if (token) {
                dispatch(setSignInPopup(true));
            } else {
                dispatch(setSignUpPopup(true));
            }
        }
    };

    const handleShare = () => {
        userSharePost(post?._id).then(() => {
            handleGetPost();
        });
    };

    return (
        <div className={styles.root}>
            {/* <Loader theme={'fullScreen'} open={isLoader || !loaded}/> */}
            <div className={styles.titleWrapper}>
                <p className={styles.category}>
                    <Link href='/'>
                        <a className={styles.homeIcon}>
                            <HomeIconSVG />
                        </a>
                    </Link>
                    <Link href={`/multimedia/${category?.data[router.locale]?.alias}`}>
                        <a className={styles.link}>{category?.data[router.locale]?.name}</a>
                    </Link>
                    {
                        /*
                        {subcategory &&
                        <span>
                            <span className={styles.divider}>{'|'}</span>
                            <Link href={`/multimedia/${category?.data[router.locale]?.alias}/${subcategory?.data[router.locale]?.alias}`}>
                                <a className={styles.link}>{subcategory?.data[router.locale]?.name}</a>
                            </Link>
                        </span>
                    }
                        */
                    }
                </p>
                <h1 className={styles.title}>
                    {post?.data[router.locale]?.title}
                </h1>
                <div className={styles.menuWrapper}>
                    <Categories categories={categories} category={category} subcategory={subcategory}/>
                </div>
            </div>

            <div className={styles.mainContent}>
                <div className={styles.socials}>
                    <div className={styles.stickyHelper}></div>
                    <div className={styles.socialsWrapper}>
                        <Socials url={`/posts/${post?.data[router.locale]?.alias}`} onClose={handleShare}/>
                    </div>
                </div>
                {
                    post &&
                    <MainInfo
                        post={post}
                        isLiked={isLiked}
                        author={author} comments={comments}
                        handleLike={handleLike}
                    />
                }
                <div className={styles.sidebar}>
                    <div className={styles.join}>
                        <Join
                            theme='postPage'
                            buttonText={intl.formatMessage({ id: 'common.subscribeNewsletter' })}
                        />
                    </div>
                    <div className={styles.leaveComment}>
                        <LeaveComment
                            theme='postPage'
                            buttonText={intl.formatMessage({ id: 'common.comment' })}
                            post={post}
                            handleCommentsUpdate={handleCommentsUpdate}
                        />
                    </div>
                    {
                        !!comments.length &&
                        <div className={styles.commentsList}>
                            <OverlayScrollbarsComponent>
                                {comments.map((comment) =>
                                    <CommentItem key={comment?._id} comment={comment} likes={likes.postsComments} handleLike={handleCommentLike}/>
                                )}
                            </OverlayScrollbarsComponent>
                        </div>
                    }
                    {
                        !!comments.length &&
                        <div className={styles.commentsListMobile}>
                            <OverlayScrollbarsComponent>
                                {comments.map((comment) =>
                                    <CommentItem key={comment?._id} comment={comment} likes={likes.postsComments} handleLike={handleCommentLike}/>
                                )}
                            </OverlayScrollbarsComponent>
                        </div>
                    }
                </div>
                {
                    post &&
                    <PostList post={post}/>
                }
            </div>
            <div className={styles.sidebar}>
                <div className={styles.join}>
                    <Join
                        theme='postPage'
                        buttonText={intl.formatMessage({ id: 'common.subscribeNewsletter' })}
                    />
                </div>
                <div className={styles.leaveComment}>
                    <LeaveComment
                        theme='postPage'
                        buttonText={intl.formatMessage({ id: 'common.comment' })}
                        post={post}
                        handleCommentsUpdate={handleCommentsUpdate}
                    />
                </div>
                {
                    !!comments.length &&
                    <div className={styles.commentsList}>
                        <OverlayScrollbarsComponent>
                            {comments.map((comment) =>
                                <CommentItem key={comment?._id} comment={comment} likes={likes.postsComments} handleLike={handleCommentLike}/>
                            )}
                        </OverlayScrollbarsComponent>
                    </div>
                }
                {
                    !!comments.length &&
                    <div className={styles.commentsListMobile}>
                        <OverlayScrollbarsComponent>
                            {comments.map((comment) =>
                                <CommentItem key={comment?._id} comment={comment} likes={likes.postsComments} handleLike={handleCommentLike}/>
                            )}
                        </OverlayScrollbarsComponent>
                    </div>
                }
            </div>
        </div>
    );
};

MultimediaPost.propTypes = {
    post: PropTypes.object,
    handleGetPost: PropTypes.func
};

export default MultimediaPost;
