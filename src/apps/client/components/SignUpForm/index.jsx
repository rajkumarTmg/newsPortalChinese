import React, { useEffect, useState } from 'react';
import { useIntl } from 'react-intl';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
// COMPONENTS
import Input from '../Fields/InputField';
import Phone from '../Fields/PhoneField';
import Autocomplete from '../Fields/AutocompleteField';
import * as Yup from 'yup';
import { useFormik } from 'formik';
import Date from '../Fields/DateField';
import Popover from '@material-ui/core/Popover';
import 'overlayscrollbars/css/OverlayScrollbars.css';
import { OverlayScrollbarsComponent } from 'overlayscrollbars-react';
// ACTIONS
import setSignUpPopup from '../../store/actions/setSignUpPopup';
// import setSignInPopup from '../../store/actions/setSignInPopup';
import signUp from '../../services/client/signUp';
// STYLES
import classNames from 'classnames';
import styles from './index.module.scss';
// CONSTANTS
import { COUNTRIES } from '../../constants';
import { useRouter } from 'next/router';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import setSignUpSuccessPopup from '../../store/actions/setSignUpSuccessPopup';

const SignUp = ({ theme, isFooter }) => {
    const dispatch = useDispatch();
    const intl = useIntl();
    const router = useRouter();
    const [emailInUse, setEmailInUse] = useState(false);
    const [usernameInUse, setUsernameInUse] = useState(false);

    const draftLikeArticle = useSelector(({ application }) => application.draftLikeArticle);
    const draftLikePost = useSelector(({ application }) => application.draftLikePost);
    const draftCommentArticle = useSelector(({ application }) => application.draftCommentArticle);
    const draftCommentPost = useSelector(({ application }) => application.draftCommentPost);
    const draftVote = useSelector(({ application }) => application.draftVote);
    const isDraft = (draftLikeArticle || draftLikePost || draftCommentArticle || draftCommentPost || draftVote);

    const validationSchema = Yup.object({
        email: Yup.string().email(`${intl.formatMessage({ id: 'error.invalidEmail' })}`)
            .required(`${intl.formatMessage({ id: 'error.emailRequired' })}`),
        firstName: Yup.string().required(`${intl.formatMessage({ id: 'error.nameErrorValidation' })}`),
        lastName: Yup.string().required(`${intl.formatMessage({ id: 'error.surnameErrorValidation' })}`),
        userName: Yup.string().required(`${intl.formatMessage({ id: 'error.usernameErrorValidation' })}`),
        password: Yup
            .string()
            .required(`${intl.formatMessage({ id: 'error.passwordRequired' })}`)
            .matches(
                // eslint-disable-next-line no-useless-escape
                /^(?=.{8,})/,
                `${intl.formatMessage({ id: 'error.invalidPassword' })}`
            ),
        password2: Yup
            .string()
            .required(`${intl.formatMessage({ id: 'error.password2Required' })}`)
            .oneOf([Yup.ref('password'), null], `${intl.formatMessage({ id: 'error.passwordsMatchError' })}`)
    });

    const formik = useFormik({
        initialValues: {
            email: '',
            phone: '',
            firstName: '',
            lastName: '',
            userName: '',
            password: '',
            password2: '',
            city: '',
            country: { code: '', label: '', phone: '' },
            gender: '',
            birthdate: '',
            birthdateTimestamp: '',
            hobby: ''
        },
        validateOnChange: false,
        validateOnBlur: false,
        validationSchema: validationSchema,
        onSubmit: (formValues, { resetForm }) => {
            signUp({
                email: formValues.email,
                password: formValues.password,
                firstName: formValues.firstName,
                lastName: formValues.lastName,
                userName: formValues.userName,
                city: formValues.city,
                country: formValues.country?.code || '',
                phone: `+${formValues.country.phone} ${formValues.phone}`,
                gender: formValues.gender.id,
                birthdate: formValues.birthdateTimestamp,
                hobby: formValues.hobby,
                ...(isDraft
                    ? {
                        draft: {
                            draftLikeArticle,
                            draftLikePost,
                            draftCommentArticle,
                            draftCommentPost,
                            draftVote,
                            redirectUrl: router.asPath
                        }
                    }
                    : {}),
                locale: router.locale
            }).then(() => {
                resetForm();
                handleClosePopup();
                dispatch(setSignUpSuccessPopup(true));
            }).catch(e => {
                if (e?.error) {
                    if (e?.error === 'This email is already in use') {
                        setEmailInUse(true);
                    }
                    if (e?.error === 'This username is already in use') {
                        setUsernameInUse(true);
                    }
                }
            });
        }
    });

    const handleInputChange = (name, value) => {
        formik.setFieldValue(name, value);

        if (name === 'email' && emailInUse) {
            setEmailInUse(false);
        }

        if (name === 'userName' && usernameInUse) {
            setUsernameInUse(false);
        }

        if (formik.errors[name]) {
            formik.setErrors({ ...formik.errors, [name]: false });
        }
    };

    const handleInputDateChange = (value, valueAsNumber) => {
        formik.setFieldValue('birthdate', value);
        formik.setFieldValue('birthdateTimestamp', valueAsNumber);
    };

    const handleClosePopup = () => {
        dispatch(setSignUpPopup(false));
    };

    /*
        const handleOpenLoginPopup = () => {
        dispatch(setSignUpPopup(false));
        dispatch(setSignInPopup(true));
        };
    */

    useEffect(() => {
        if (!isDraft && !isFooter) {
            window.scrollTo(0, 0);
        }
    }, []);

    const GENDER_OPTIONS = [
        { id: 'male', label: intl.formatMessage({ id: 'common.male' }) },
        { id: 'female', label: intl.formatMessage({ id: 'common.female' }) }
    ];

    return <Popover
        open={true}
        anchorOrigin={{ horizontal: 'center', vertical: 'center' }}
        classes={{ paper: styles.paper, root: (!isDraft && !isFooter) ? styles.popover : undefined }}
        transitionDuration={{ appear: 0, enter: 0, exit: 100 }}
    >
        <div className={classNames(styles.root, {
            [styles[theme]]: theme,
            [styles.withSubtitle]: isDraft,
            [styles.bgShort]: !isDraft && !isFooter
        })}>
            <div className={styles.background} onClick={handleClosePopup}/>
            <ClickAwayListener onClickAway={handleClosePopup}>
                <div className={styles.body}>
                    <div className={styles.title}>
                        {isDraft ? intl.formatMessage({ id: 'form.registerTitle2' }) : intl.formatMessage({ id: 'form.registerTitle' })}
                        <div className={styles.subtitle}>
                            {isDraft ? intl.formatMessage({ id: 'form.registerSubtitle2' }) : intl.formatMessage({ id: 'form.registerSubtitle' })}
                        </div>
                    </div>
                    <div className={styles.formWrapper}>
                        <OverlayScrollbarsComponent>
                            <form onSubmit={formik.handleSubmit} className={styles.form}>
                                <div className={styles.inputsContainer}>
                                    <div className={styles.inputWrapperDouble}>
                                        <Input
                                            placeholder={`${intl.formatMessage({ id: 'form.lastName' })} *`}
                                            value={formik.values.lastName}
                                            type='text'
                                            theme='auth'
                                            handleChange={handleInputChange}
                                            name='lastName'
                                            error={formik.errors.lastName}
                                            isError={formik.errors.lastName}
                                            onBlur={formik.handleBlur}
                                        />
                                        <Input
                                            placeholder={`${intl.formatMessage({ id: 'form.firstName' })} *`}
                                            value={formik.values.firstName}
                                            type='text'
                                            theme='auth'
                                            handleChange={handleInputChange}
                                            name='firstName'
                                            error={formik.errors.firstName}
                                            isError={formik.errors.firstName}
                                            onBlur={formik.handleBlur}
                                        />
                                    </div>
                                    <div className={styles.inputWrapper}>
                                        <Input
                                            placeholder={intl.formatMessage({ id: 'form.userName' })}
                                            value={formik.values.userName}
                                            type='text'
                                            theme='auth'
                                            handleChange={handleInputChange}
                                            name='userName'
                                            error={formik.errors.userName || (usernameInUse && intl.formatMessage({ id: 'error.usernameInUse' }))}
                                            isError={formik.errors.userName || usernameInUse}
                                            onBlur={formik.handleBlur}
                                        />
                                    </div>
                                    <div className={styles.inputWrapper}>
                                        <Input
                                            placeholder={`${intl.formatMessage({ id: 'form.email' })} *`}
                                            value={formik.values.email}
                                            theme='auth'
                                            handleChange={handleInputChange}
                                            name='email'
                                            error={formik.errors.email || (emailInUse && intl.formatMessage({ id: 'error.emailInUse' }))}
                                            isError={formik.errors.email || emailInUse}
                                            onBlur={formik.handleBlur}
                                        />
                                    </div>
                                    <div className={styles.inputWrapper}>
                                        <Autocomplete
                                            placeholder={intl.formatMessage({ id: 'form.country' })}
                                            value={formik.values.country}
                                            theme='auth'
                                            handleChange={handleInputChange}
                                            name='country'
                                            options={COUNTRIES}
                                        />
                                    </div>
                                    <div className={styles.inputWrapper}>
                                        <Input
                                            placeholder={intl.formatMessage({ id: 'form.city' })}
                                            value={formik.values.city}
                                            type='text'
                                            theme='auth'
                                            handleChange={handleInputChange}
                                            name='city'
                                        />
                                    </div>
                                    <div className={styles.inputWrapper}>
                                        <Phone
                                            placeholder={intl.formatMessage({ id: 'form.phone' })}
                                            value={formik.values.phone}
                                            type='tel'
                                            theme='auth'
                                            handleChange={handleInputChange}
                                            name='phone'
                                            code={formik.values.country?.phone || ''}
                                        />
                                    </div>
                                    <div className={styles.inputWrapperDoubleUnequal}>
                                        <Autocomplete
                                            placeholder={intl.formatMessage({ id: 'form.gender' })}
                                            value={formik.values.gender}
                                            theme='auth'
                                            handleChange={handleInputChange}
                                            name='gender'
                                            options={GENDER_OPTIONS}
                                        />
                                        <Date
                                            placeholder={intl.formatMessage({ id: 'form.birthdate' })}
                                            value={formik.values.birthdateTimestamp}
                                            type='date'
                                            theme='auth'
                                            handleChange={handleInputDateChange}
                                            name='birthdate'
                                            nameDate='birthdateTimestamp'
                                        />
                                    </div>
                                    <div className={styles.inputWrapper}>
                                        <Input
                                            placeholder={intl.formatMessage({ id: 'form.hobby' })}
                                            value={formik.values.hobby}
                                            type='text'
                                            theme='auth'
                                            handleChange={handleInputChange}
                                            name='hobby'
                                        />
                                    </div>
                                    <div className={styles.inputWrapperDouble}>
                                        <Input
                                            placeholder={`${intl.formatMessage({ id: 'form.enterPassword' })} *`}
                                            value={formik.values.password}
                                            type='password'
                                            theme='auth'
                                            handleChange={handleInputChange}
                                            name='password'
                                            error={formik.errors.password}
                                            isError={formik.errors.password}
                                            onBlur={formik.handleBlur}
                                        />
                                        <Input
                                            placeholder={`${intl.formatMessage({ id: 'form.enterPassword' })} *`}
                                            value={formik.values.password2}
                                            type='password'
                                            theme='auth'
                                            handleChange={handleInputChange}
                                            name='password2'
                                            error={formik.errors.password2}
                                            isError={formik.errors.password2}
                                            onBlur={formik.handleBlur}
                                        />
                                    </div>
                                </div>
                                <button type='submit' className={styles.submitButton}>
                                    {intl.formatMessage({ id: 'common.submit' })}
                                </button>
                                {/*
                            <div className={styles.authorise} onClick={handleOpenLoginPopup}>
                                {intl.formatMessage({ id: 'form.authorise' })}
                            </div>
                            */}
                            </form>
                        </OverlayScrollbarsComponent>
                    </div>
                    <div className={styles.close} onClick={handleClosePopup}>
                        {intl.formatMessage({ id: 'form.close' })}
                    </div>
                </div>
            </ClickAwayListener>
        </div>
    </Popover>;
};

SignUp.propTypes = {
    theme: PropTypes.string,
    isFooter: PropTypes.bool
};

export default SignUp;
