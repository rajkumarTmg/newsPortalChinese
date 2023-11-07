import React, { useState } from 'react';
import styles from './index.module.scss';
import { useIntl } from 'react-intl';
import Image from 'next/image';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { useDispatch, useSelector } from 'react-redux';
import addCommentArticle from '../../../../services/client/addCommentArticle';
import setSignInPopup from '../../../../store/actions/setSignInPopup';
import setDraftCommentArticle from '../../../../store/actions/setDraftCommentArticle';
import { getTokenUser } from '../../../../utils/manageToken';
import setSignUpPopup from '../../../../store/actions/setSignUpPopup';

const LeaveComment = ({ theme, buttonText, title, handleCommentsUpdate, article, commentsRef }) => {
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
        <form className={classNames(styles.root, {
            [styles[theme]]: theme
        })} onSubmit={handleComment} ref={commentsRef}>
            <div className={styles.wrapper}>
                <p className={styles.title}>
                    {title || intl.formatMessage({ id: 'common.comment' })}
                    <span className={styles.image}>
                        <Image src='/images/leave-message.png' layout='fill'/>
                    </span>
                </p>
                <textarea
                    className={styles.textarea}
                    placeholder={intl.formatMessage({ id: 'common.typeHere' })}
                    onChange={handleInputChange}
                    maxLength={5000}
                    value={commentText}
                />
            </div>
            <button className={styles.addButton} onClick={handleComment} type='submit'>
                {buttonText || intl.formatMessage({ id: 'common.submit' })}
            </button>
        </form>
    );
};

LeaveComment.propTypes = {
    theme: PropTypes.string,
    buttonText: PropTypes.string,
    title: PropTypes.string,
    handleCommentsUpdate: PropTypes.func,
    article: PropTypes.object,
    commentsRef: PropTypes.object
};

export default LeaveComment;
