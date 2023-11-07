import React, { useState } from 'react';
import styles from './index.module.scss';
import { useIntl } from 'react-intl';
import Image from 'next/image';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { useDispatch, useSelector } from 'react-redux';
import addCommentPost from '../../../services/client/addCommentPost';
import setSignInPopup from '../../../store/actions/setSignInPopup';
import setDraftCommentPost from '../../../store/actions/setDraftCommentPost';
import { getTokenUser } from '../../../utils/manageToken';
import setSignUpPopup from '../../../store/actions/setSignUpPopup';

const LeaveComment = ({ theme, buttonText, title, handleCommentsUpdate, post }) => {
    const [commentText, setCommentText] = useState('');
    const intl = useIntl();
    const token = useSelector(({ application }) => application.token);
    const user = useSelector(({ application }) => application.user);
    const dispatch = useDispatch();

    const handleComment = (event) => {
        event.preventDefault();

        if (!user?._id) {
            dispatch(setDraftCommentPost({ postId: post._id, text: commentText }));
            const token = getTokenUser();
            if (token) {
                dispatch(setSignInPopup(true));
            } else {
                dispatch(setSignUpPopup(true));
            }
            return;
        }

        if (commentText && commentText.length <= 5000) {
            addCommentPost(token, post._id, user._id, {
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
        })} onSubmit={handleComment}>
            <div className={styles.wrapper}>
                <p className={styles.title}>
                    {title || intl.formatMessage({ id: 'common.comment' })}
                    <div className={styles.image}>
                        <Image src='/images/leave-message.png' layout='fill'/>
                    </div>
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
    post: PropTypes.object
};

export default LeaveComment;
