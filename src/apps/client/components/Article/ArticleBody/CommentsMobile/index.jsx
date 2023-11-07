import React, { useEffect, useState } from 'react';
import styles from './index.module.scss';
import LikeSVG from '../../../../../../../public/images/svg/like.svg';
import LeaveComment from './LeaveComment';
import classNames from 'classnames';
import { useRouter } from 'next/router';
import { useDispatch, useSelector } from 'react-redux';
import userCommentLike from '../../../../services/client/userCommentLikeArticle';
import getUserLikes from '../../../../services/client/getUserLikes';
import setUserLikes from '../../../../store/actions/setUserLikes';
import PropTypes from 'prop-types';
import getArticleById from '../../../../services/server/getArticleById';
import formatDateRelative from '../../../../utils/formatDateRelative';
import setSignInPopup from '../../../../store/actions/setSignInPopup';
import Lazy from '../../../Lazy';
import setDraftLikeArticle from '../../../../store/actions/setDraftLikeArticle';
import { getTokenUser } from '../../../../utils/manageToken';
import setSignUpPopup from '../../../../store/actions/setSignUpPopup';

const Comments = ({ article }) => {
    const [comments, setComments] = useState(article.comments.list);
    const router = useRouter();
    const dispatch = useDispatch();
    const token = useSelector(({ application }) => application.token);
    const user = useSelector(({ application }) => application.user);
    const likes = useSelector(({ application }) => application.likes).articlesComments;
    const [visible, setVisible] = useState(1);

    const handleSetVisible = (number) => () => {
        if (number < 1 || number > comments.length) {
            return;
        }

        setVisible(number);
    };

    useEffect(() => {
        setComments(article.comments.list);
    }, [article]);

    const handleCommentsUpdate = () => {
        getArticleById({ locale: router.locale, id: article._id }).then(result => {
            if (result?.data) {
                setComments(result.comments.list);
            }
        });
    };

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
        <div className={styles.root}>
            <LeaveComment article={article} handleCommentsUpdate={handleCommentsUpdate}/>
            <div className={styles.commentsList}>
                {comments.slice(0, visible).map((comment) => {
                    const isLiked = !!likes.filter((id) => id === comment._id).length;

                    return <div className={styles.comment} key={comment?._id}>
                        <div className={styles.avatar}>
                            <Lazy>
                                <div className={styles.defaultAvatar}>{comment.userName.split(' ').map((item) => item.slice(0, 1)).join('')}</div>
                            </Lazy>
                        </div>
                        <div>
                            <div className={styles.commentInfo}>
                                <p className={styles.author}>{comment.userName}</p>
                                <p className={styles.date}>{formatDateRelative(comment.createdAt, router.locale)}</p>
                            </div>
                            <p className={styles.text}>{comment.text}</p>
                            <div className={styles.stats}>
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
                                    <LikeSVG width={25} height={25}/>
                                    <span className={styles.count}>500</span>
                                </div>
                                <div className={styles.statsItem}>
                                    <span>Reply</span>
                                    <span className={styles.count}>500</span>
                                </div>
                                */}
                            </div>
                        </div>
                    </div>;
                }
                )}
            </div>
            {
                comments.length > 1 &&
                <div className={styles.controls}>
                    <span className={classNames(styles.less, {
                        [styles.active]: visible > 1
                    })} onClick={handleSetVisible(visible - 1)}>
                    Less
                    </span>
                    <span className={classNames(styles.more, {
                        [styles.active]: visible < comments.length
                    })} onClick={handleSetVisible(visible + 1)}>
                    More
                    </span>
                </div>
            }
        </div>
    );
};

Comments.propTypes = {
    comments: PropTypes.array,
    article: PropTypes.object
};

export default Comments;
