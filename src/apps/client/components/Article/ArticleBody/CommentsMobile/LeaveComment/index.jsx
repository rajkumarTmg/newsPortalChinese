import React, { useState } from 'react';

import styles from './index.module.scss';
import { useIntl } from 'react-intl';
import { useDispatch, useSelector } from 'react-redux';
import addCommentArticle from '../../../../../services/client/addCommentArticle';
import PropTypes from 'prop-types';
import setSignInPopup from '../../../../../store/actions/setSignInPopup';
import setDraftCommentArticle from '../../../../../store/actions/setDraftCommentArticle';
import { getTokenUser } from '../../../../../utils/manageToken';
import setSignUpPopup from '../../../../../store/actions/setSignUpPopup';

const LeaveComment = ({ buttonText, handleCommentsUpdate, article }) => {
    const [commentText, setCommentText] = useState('');
    const intl = useIntl();
    const token = useSelector(({ application }) => application.token);
    const user = useSelector(({ application }) => application.user);
    const dispatch = useDispatch();

    const handleComment = (event) => {
        event.preventDefault();

        if (!user?._id) {
            dispatch(setDraftCommentArticle({ articleId: article._id, text: commentText }));
            const token = getTokenUser();
            if (token) {
                dispatch(setSignInPopup(true));
            } else {
                dispatch(setSignUpPopup(true));
            }
            return;
        }

        if (commentText && commentText.length <= 5000) {
            addCommentArticle(token, article._id, user._id, {
                userName: `${user.lastName}${user.firstName}`,
                text: commentText
            }).then(() => {
                setCommentText('');
                if (handleCommentsUpdate) {
                    handleCommentsUpdate();
                }
            });
        }
    };

    const handleInputChange = (event) => {
        setCommentText(event.target.value);
    };

    return (
        <form className={styles.root} onSubmit={handleComment}>
            <div className={styles.wrapper}>
                <textarea
                    className={styles.textarea}
                    placeholder={intl.formatMessage({ id: 'common.typeHere' })}
                    onChange={handleInputChange}
                    maxLength={5000}
                    value={commentText}
                />
            </div>
            <div className={styles.bottom}>
                <p className={styles.stat}>{!!article.comments.count && `${article.comments.count} `}{intl.formatMessage({ id: 'common.commentMessage' })}</p>
                <button className={styles.btn} onClick={handleComment} type='submit'>
                    {buttonText || intl.formatMessage({ id: 'common.submit' })}
                </button>
            </div>
        </form>
    );
};

LeaveComment.propTypes = {
    buttonText: PropTypes.string,
    handleCommentsUpdate: PropTypes.func,
    article: PropTypes.object
};

export default LeaveComment;
