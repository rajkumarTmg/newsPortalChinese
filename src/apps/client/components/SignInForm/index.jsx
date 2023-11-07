import React, { useEffect, useState } from 'react';
import { useIntl } from 'react-intl';
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import PropTypes from 'prop-types';
// COMPONENTS
import Input from '../Fields/InputField';
import setSignInPopup from '../../store/actions/setSignInPopup';
// import setSignUpPopup from '../../store/actions/setSignUpPopup';
import * as Yup from 'yup';
import { useFormik } from 'formik';
import Popover from '@material-ui/core/Popover';
// ACTIONS
import signIn from '../../services/client/signIn';
import setCurrentUser from '../../store/actions/setCurrentUser';
import setAuthorized from '../../store/actions/setAuthorized';
import setToken from '../../store/actions/setToken';
import { setToken as manageSetToken, setTokenUser } from '../../utils/manageToken';
import setRestorePasswordPopup from '../../store/actions/setRestorePasswordPopup';
import userCommentLikeArticle from '../../services/client/userCommentLikeArticle';
import userLikeArticle from '../../services/client/userLikeArticle';
import userCommentLikePost from '../../services/client/userCommentLikePost';
import userLikePost from '../../services/client/userLikePost';
import vote from '../../services/client/votes/vote';
import addCommentArticle from '../../services/client/addCommentArticle';
import addCommentPost from '../../services/client/addCommentPost';
// STYLES
import styles from './index.module.scss';
import classNames from 'classnames';
import { ClickAwayListener } from '@material-ui/core';
import setDraftVote from '../../store/actions/setDraftVote';
import setDraftLikePost from '../../store/actions/setDraftLikePost';
import setDraftLikeArticle from '../../store/actions/setDraftLikeArticle';
import setDraftCommentPost from '../../store/actions/setDraftCommentPost';
import setDraftCommentArticle from '../../store/actions/setDraftCommentArticle';
import { OverlayScrollbarsComponent } from 'overlayscrollbars-react';

const SignIn = ({ theme }) => {
    const dispatch = useDispatch();
    const router = useRouter();
    const [isError, setIsError] = useState(false);
    const [isErrorEmail, setIsErrorEmail] = useState(false);
    const [isErrorPassword, setIsErrorPassword] = useState(false);
    const [notVerified, setNotVerified] = useState(false);
    const [userEmail, setUserEmail] = useState('');
    const intl = useIntl();
    const draftLikeArticleApp = useSelector(({ application }) => application.draftLikeArticle);
    const draftLikePostApp = useSelector(({ application }) => application.draftLikePost);
    const draftCommentArticleApp = useSelector(({ application }) => application.draftCommentArticle);
    const draftCommentPostApp = useSelector(({ application }) => application.draftCommentPost);
    const draftVoteApp = useSelector(({ application }) => application.draftVote);
    const isDraft = (draftLikeArticleApp || draftLikePostApp || draftCommentArticleApp || draftCommentPostApp || draftVoteApp);

    const validationSchema = Yup.object({
        email: Yup.string()
            .required(`${intl.formatMessage({ id: 'error.emailUsernameRequired' })}`),
        password: Yup
            .string()
            .required(`${intl.formatMessage({ id: 'error.password3Required' })}`)
    });

    const formik = useFormik({
        initialValues: {
            email: '',
            password: ''
        },
        validateOnChange: false,
        validateOnBlur: false,
        validationSchema: validationSchema,
        onSubmit: (formValues, { resetForm }) => {
            signIn({ email: formValues.email, password: formValues.password, locale: router.locale }).then(result => {
                if (result?.user) {
                    manageSetToken(result.token);
                    setTokenUser(result.token);
                    dispatch(setCurrentUser(result.user));
                    dispatch(setAuthorized(true));
                    dispatch(setToken(result.token));

                    const draftLikeArticle = draftLikeArticleApp || result.user.draft?.draftLikeArticle;
                    const draftLikePost = draftLikePostApp || result.user.draft?.draftLikePost;
                    const draftCommentArticle = draftCommentArticleApp || result.user.draft?.draftCommentArticle;
                    const draftCommentPost = draftCommentPostApp || result.user.draft?.draftCommentPost;
                    const draftVote = draftVoteApp || result.user.draft?.draftVote;

                    if (draftLikeArticle) {
                        if (draftLikeArticle.commentId) {
                            userCommentLikeArticle(result.token, draftLikeArticle.articleId, draftLikeArticle.commentId, result.user._id, true);
                            return;
                        }
                        userLikeArticle(result.token, draftLikeArticle.articleId, result.user._id, true);
                    }

                    if (draftLikePost) {
                        if (draftLikeArticle.commentId) {
                            userCommentLikePost(result.token, draftLikePost.postId, draftLikePost.commentId, result.user._id, true);
                            return;
                        }
                        userLikePost(result.token, draftLikePost.articleId, result.user._id, true);
                    }

                    if (draftCommentArticle) {
                        addCommentArticle(result.token, draftCommentArticle.articleId, result.user._id, {
                            userName: `${result.user.lastName}${result.user.firstName}`,
                            text: draftCommentArticle.text
                        });
                    }

                    if (draftCommentPost) {
                        addCommentPost(result.token, draftCommentPost.postId, result.user._id, {
                            userName: `${result.user.lastName}${result.user.firstName}`,
                            text: draftCommentPost.text
                        });
                    }

                    if (draftVote) {
                        vote({ variantId: draftVote.variant, voteId: draftVote.voteId, token: result.token, locale: router.locale, path: router.asPath });
                    }

                    const isDraft = (draftLikeArticle || draftLikePost || draftCommentArticle || draftCommentPost || draftVote);
                    resetForm();
                    handleClosePopup();
                    if (isDraft && result.user.draft.redirectUrl) {
                        router.push(result.user.draft.redirectUrl).then(() => {
                            router.reload();
                        });
                    } else {
                        router.reload();
                    }
                } else {
                    setIsError(true);
                }
            }).catch(e => {
                if (e?.error) {
                    if (e?.error === 'User is not verified') {
                        setNotVerified(true);
                        setUserEmail(e?.email);
                    }
                    if (e?.error === 'No user found') {
                        setIsErrorEmail(true);
                    }
                    if (e?.error === 'Invalid password') {
                        setIsErrorPassword(true);
                    }
                } else {
                    setIsError(true);
                }
            });
        }
    });

    const handleInputChange = (name, value) => {
        formik.setFieldValue(name, value);

        if (name === 'email' && isErrorEmail) {
            setIsErrorEmail(false);
        }

        if (name === 'password' && isErrorPassword) {
            setIsErrorPassword(false);
        }

        if (formik.errors[name]) {
            formik.setErrors({ ...formik.errors, [name]: false });
        }
    };

    const handleClosePopup = () => {
        dispatch(setSignInPopup(false));
        dispatch(setDraftVote(null));
        dispatch(setDraftLikePost(null));
        dispatch(setDraftLikeArticle(null));
        dispatch(setDraftCommentPost(null));
        dispatch(setDraftCommentArticle(null));
    };

    /*
    const handleOpenRegisterPopup = () => {
        dispatch(setSignInPopup(false));
        dispatch(setSignUpPopup(true));
    };
    */

    useEffect(() => {
        if (!isDraft) {
            window.scrollTo(0, 0);
        }
    }, []);

    const handleRestorePassword = () => {
        dispatch(setSignInPopup(false));
        dispatch(setRestorePasswordPopup(true));
    };

    const rootClassNames = classNames(styles.root, {
        [styles[theme]]: theme,
        [styles.error]: isError,
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
                    <div className={styles.title}>{intl.formatMessage({ id: isError ? 'form.loginError' : 'form.loginTitle' })}</div>
                    <div className={styles.formWrapper}>
                        <OverlayScrollbarsComponent>
                            <form onSubmit={formik.handleSubmit} className={styles.form}>
                                <div className={styles.inputsContainer}>
                                    <div className={styles.inputWrapper}>
                                        <Input
                                            placeholder={intl.formatMessage({ id: 'form.emailUsername' })}
                                            title={intl.formatMessage({ id: 'form.enterEmail' })}
                                            value={formik.values.email}
                                            type='text'
                                            theme='auth'
                                            handleChange={handleInputChange}
                                            onBlur={formik.handleBlur}
                                            name='email'
                                            error={formik.errors.email ||
                                            (isErrorEmail && intl.formatMessage({ id: 'error.emailWrongError' })) ||
                                            (notVerified && intl.formatMessage({ id: 'error.userNotVerified2' }, { email: userEmail }))
                                            }
                                            isError={formik.errors.email || isErrorEmail || notVerified}
                                        />
                                    </div>
                                    <div className={styles.inputWrapper}>
                                        <Input
                                            placeholder={intl.formatMessage({ id: 'form.password' })}
                                            title={intl.formatMessage({ id: 'form.enterPassword' })}
                                            value={formik.values.password}
                                            type='password'
                                            theme='auth'
                                            handleChange={handleInputChange}
                                            onBlur={formik.handleBlur}
                                            name='password'
                                            error={formik.errors.password || (isErrorPassword && intl.formatMessage({ id: 'error.passwordWrongError' }))}
                                            isError={formik.errors.password || isErrorPassword}
                                        />
                                    </div>
                                </div>
                                <button type='submit' className={styles.submitButton}>
                                    {intl.formatMessage({ id: 'form.authorise' })}
                                </button>
                            </form>
                        </OverlayScrollbarsComponent>
                    </div>
                    <div className={styles.forgotPassword} onClick={handleRestorePassword}>
                        {intl.formatMessage({ id: 'form.forgotPassword' })}
                    </div>
                    {/*
                <div className={styles.register} onClick={handleOpenRegisterPopup}>
                    {intl.formatMessage({ id: 'form.register' })}
                </div>
                */}
                    <div className={styles.close} onClick={handleClosePopup}>
                        {intl.formatMessage({ id: 'form.close' })}
                    </div>
                </div>
            </ClickAwayListener>
        </div>
    </Popover>;
};

SignIn.propTypes = {
    theme: PropTypes.string
};

export default SignIn;
