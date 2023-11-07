import React from 'react';
import styles from './index.module.scss';
import { useIntl } from 'react-intl';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { useDispatch, useSelector } from 'react-redux';
import setSignUpSuccessPopup from '../../store/actions/setSignUpSuccessPopup';
import setDraftVote from '../../store/actions/setDraftVote';
import setDraftLikePost from '../../store/actions/setDraftLikePost';
import setDraftCommentArticle from '../../store/actions/setDraftCommentArticle';
import setDraftLikeArticle from '../../store/actions/setDraftLikeArticle';
import setDraftCommentPost from '../../store/actions/setDraftCommentPost';

import Popover from '@material-ui/core/Popover';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';

const SignUpSuccess = ({ theme }) => {
    const dispatch = useDispatch();
    const intl = useIntl();

    const draftLikeArticle = useSelector(({ application }) => application.draftLikeArticle);
    const draftLikePost = useSelector(({ application }) => application.draftLikePost);
    const draftCommentArticle = useSelector(({ application }) => application.draftCommentArticle);
    const draftCommentPost = useSelector(({ application }) => application.draftCommentPost);
    const draftVote = useSelector(({ application }) => application.draftVote);
    const isDraft = (draftLikeArticle || draftLikePost || draftCommentArticle || draftCommentPost || draftVote);

    const handleClosePopup = () => {
        dispatch(setSignUpSuccessPopup(false));
        dispatch(setDraftVote(null));
        dispatch(setDraftLikePost(null));
        dispatch(setDraftLikeArticle(null));
        dispatch(setDraftCommentPost(null));
        dispatch(setDraftCommentArticle(null));
    };

    const rootClassNames = classNames(styles.root, {
        [styles[theme]]: theme,
        [styles.bgShort]: !isDraft
    });

    return <Popover
        open={true}
        anchorOrigin={{ horizontal: 'center', vertical: 'center' }}
        classes={{ paper: styles.paper, root: !isDraft ? styles.popover : undefined }}
        transitionDuration={{ appear: 0, enter: 0, exit: 100 }}
    >
        <div className={rootClassNames}>
            <div className={styles.background} onClick={handleClosePopup}/>
            <ClickAwayListener onClickAway={handleClosePopup}>
                <div className={styles.body}>
                    <div className={styles.wrapper}>
                        <div className={styles.title}>{intl.formatMessage({ id: 'form.signUpSuccessTitle' })}</div>
                        <div className={styles.close} onClick={handleClosePopup}>
                            {intl.formatMessage({ id: 'form.close' })}
                        </div>
                    </div>
                </div>
            </ClickAwayListener>
        </div>
    </Popover>;
};

SignUpSuccess.propTypes = {
    theme: PropTypes.string
};

export default SignUpSuccess;
