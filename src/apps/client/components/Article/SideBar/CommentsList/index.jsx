import React from 'react';
import styles from './index.module.scss';
// import CommentSVG from '../../../../../../../public/images/svg/comments.svg';
import LikeSVG from '../../../../../../../public/images/svg/like.svg';
// import ShareSVG from '../../../../../../../public/images/svg/share.svg';
import PropTypes from 'prop-types';
import { useRouter } from 'next/router';
import { useDispatch, useSelector } from 'react-redux';
import getUserLikes from '../../../../services/client/getUserLikes';
import setUserLikes from '../../../../store/actions/setUserLikes';
import userCommentLike from '../../../../services/client/userCommentLikeArticle';
import classNames from 'classnames';
import formatDateRelative from '../../../../utils/formatDateRelative';
import setSignInPopup from '../../../../store/actions/setSignInPopup';
import setDraftLikeArticle from '../../../../store/actions/setDraftLikeArticle';
import 'overlayscrollbars/css/OverlayScrollbars.css';
import { OverlayScrollbarsComponent } from 'overlayscrollbars-react';
import { getTokenUser } from '../../../../utils/manageToken';
import setSignUpPopup from '../../../../store/actions/setSignUpPopup';

const CommentsList = ({ comments, article, handleCommentsUpdate, commentsListRef, height }) => {
    const router = useRouter();
    const dispatch = useDispatch();
    const token = useSelector(({ application }) => application.token);
    const user = useSelector(({ application }) => application.user);
    const likes = useSelector(({ application }) => application.likes).articlesComments;

    const handleLike = (id) => () => {
        if (user) {
            userCommentLike(token, article._id, id, user._id).then((result) => {
                getUserLikes(token, user._id).then(result => {
                    dispatch(setUserLikes(result));
                });
                handleCommentsUpdate();
            });
        } else {
            dispatch(setDraftLikeArticle({ articleId: article._id, commentId: id }));
            const token = getTokenUser();
            if (token) {
                dispatch(setSignInPopup(true));
            } else {
                dispatch(setSignUpPopup(true));
            }
        }
    };

    return (
        <div className={styles.root} ref={commentsListRef}>
            {
                !!height &&
                <OverlayScrollbarsComponent>
                    <div className={classNames(styles.commentsList, 'commentsList')}>
                        {comments.map((comment) => {
                            const isLiked = !!likes.filter((id) => id === comment._id).length;

                            return <div className={styles.comment} key={comment?._id}>
                                <div className={styles.commentInfo}>
                                    <p className={styles.author}>{comment.userName}</p>
                                    <p className={styles.date}>{formatDateRelative(comment.createdAt, router.locale)}</p>
                                </div>
                                <p className={styles.text}>{comment.text}</p>
                                <div className={styles.stats}>
                                    {/*
                                    <div className={styles.statsItem}>
                                        <CommentSVG width={25} height={25}/>
                                        <span className={styles.count}>500</span>
                                    </div>
                                    */}
                                    <div className={classNames(styles.statsItem, {
                                        [styles.liked]: isLiked
                                    })}>
                                        <div className={styles.likeButton} onClick={handleLike(comment._id)}>
                                            <LikeSVG width={25} height={25}/>
                                        </div>
                                        <span className={styles.count}>{comment.likes?.count}</span>
                                    </div>
                                    {/*
                                    <div className={styles.statsItem}>
                                        <ShareSVG width={25} height={25}/>
                                        <span className={styles.count}>500</span>
                                    </div>
                                    <div className={styles.statsItem}>
                                        <ShareSVG width={25} height={25}/>
                                        <span className={styles.count}>500</span>
                                    </div>
                                    */}
                                </div>
                            </div>;
                        }
                        )}
                    </div>
                </OverlayScrollbarsComponent>
            }
        </div>
    );
};

CommentsList.propTypes = {
    comments: PropTypes.array,
    article: PropTypes.object,
    handleCommentsUpdate: PropTypes.func,
    commentsListRef: PropTypes.object,
    height: PropTypes.bool
};

export default CommentsList;
