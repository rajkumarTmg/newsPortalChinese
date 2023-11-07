import React, { useEffect } from 'react';
import { useIntl } from 'react-intl';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
// COMPONENTS
import Input from '../Fields/InputField';
import Textarea from '../Fields/TextareaField';
import Phone from '../Fields/PhoneField';
import * as Yup from 'yup';
import { useFormik } from 'formik';
import Popover from '@material-ui/core/Popover';
import 'overlayscrollbars/css/OverlayScrollbars.css';
import { OverlayScrollbarsComponent } from 'overlayscrollbars-react';
// ACTIONS
import setSignUpPopup from '../../store/actions/setSignUpPopup';
import setHeaderSubscriptionPopup from '../../store/actions/setHeaderSubscriptionPopup';
import setSubscriptionSuccessPopup from '../../store/actions/setSubscriptionSuccessPopup';
// STYLES
import classNames from 'classnames';
import styles from './index.module.scss';
import subscribe from '../../services/client/subscribe';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import { useRouter } from 'next/router';

const SubscribeForm = ({ theme, isFooter }) => {
    const dispatch = useDispatch();
    const router = useRouter();
    const intl = useIntl();

    const validationSchema = Yup.object({
        email: Yup.string().email(`${intl.formatMessage({ id: 'error.invalidEmail' })}`)
            .required(`${intl.formatMessage({ id: 'error.emailRequired' })}`),
        firstName: Yup.string().required(`${intl.formatMessage({ id: 'error.nameErrorValidation' })}`),
        lastName: Yup.string().required(`${intl.formatMessage({ id: 'error.surnameErrorValidation' })}`),
        comment: Yup.string().required(`${intl.formatMessage({ id: 'error.comment2ErrorValidation' })}`)
    });

    const formik = useFormik({
        initialValues: {
            email: '',
            phone: '',
            firstName: '',
            lastName: '',
            comment: ''
        },
        validateOnChange: false,
        validateOnBlur: false,
        validationSchema: validationSchema,
        onSubmit: (formValues, { resetForm }) => {
            subscribe({
                email: formValues.email,
                firstName: formValues.firstName,
                lastName: formValues.lastName,
                phone: formValues.phone,
                locale: router.locale
            }).then(() => {
                resetForm();
                handleClosePopup();
                dispatch(setSubscriptionSuccessPopup(true));
            }).catch((e) => {
                if (e.error === 'This email is already in use') {
                    formik.setErrors({ email: intl.formatMessage({ id: 'error.emailRegisteredError' }) });
                }
            });
        }
    });

    const handleInputChange = (name, value) => {
        formik.setFieldValue(name, value);

        if (formik.errors[name]) {
            formik.setErrors({ ...formik.errors, [name]: false });
        }
    };

    const handleClosePopup = () => {
        dispatch(setHeaderSubscriptionPopup(false));
    };

    const handleOpenSignUpPopup = () => {
        dispatch(setSignUpPopup(true));
        dispatch(setHeaderSubscriptionPopup(false));
    };

    useEffect(() => {
        if (!isFooter) {
            window.scrollTo(0, 0);
        }
    }, []);

    return <Popover
        open={true}
        anchorOrigin={{ horizontal: 'center', vertical: 'center' }}
        classes={{ paper: styles.paper, root: !isFooter ? styles.popover : undefined }}
        transitionDuration={{ appear: 0, enter: 0, exit: 100 }}
    >
        <div className={classNames(styles.root, {
            [styles[theme]]: theme,
            [styles.bgShort]: !isFooter
        })}>
            <div className={styles.background} onClick={handleClosePopup}/>
            <ClickAwayListener onClickAway={handleClosePopup}>
                <div className={styles.body}>
                    <div className={styles.title}>{intl.formatMessage({ id: 'form.subscribeTitle' })}</div>
                    <div className={styles.subtitle}>{intl.formatMessage({ id: 'form.subscribeSubtitle' })}</div>
                    <div className={styles.formWrapper}>
                        <OverlayScrollbarsComponent>
                            <form onSubmit={formik.handleSubmit} className={styles.form}>
                                <div className={styles.inputsContainer}>
                                    <div className={styles.inputWrapperDouble}>
                                        <Input
                                            placeholder={`${intl.formatMessage({ id: 'form.lastName' })}`}
                                            value={formik.values.lastName}
                                            type='text'
                                            theme='auth'
                                            handleChange={handleInputChange}
                                            onBlur={formik.handleBlur}
                                            name='lastName'
                                            error={formik.errors.lastName}
                                            isError={formik.errors.lastName}
                                        />
                                        <Input
                                            placeholder={`${intl.formatMessage({ id: 'form.firstName' })}`}
                                            value={formik.values.firstName}
                                            type='text'
                                            theme='auth'
                                            handleChange={handleInputChange}
                                            onBlur={formik.handleBlur}
                                            name='firstName'
                                            error={formik.errors.firstName}
                                            isError={formik.errors.firstName}
                                        />
                                    </div>
                                    <div className={styles.inputWrapper}>
                                        <Input
                                            placeholder={`${intl.formatMessage({ id: 'form.email' })}`}
                                            value={formik.values.email}
                                            theme='auth'
                                            handleChange={handleInputChange}
                                            onBlur={formik.handleBlur}
                                            name='email'
                                            error={formik.errors.email}
                                            isError={formik.errors.email}
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
                                            code={''}
                                        />
                                    </div>
                                    <div className={styles.inputWrapper}>
                                        <Textarea
                                            placeholder={intl.formatMessage({ id: 'form.comment' })}
                                            value={formik.values.comment}
                                            type='text'
                                            theme='auth'
                                            handleChange={handleInputChange}
                                            onBlur={formik.handleBlur}
                                            name='comment'
                                            error={formik.errors.comment}
                                            isError={formik.errors.comment}
                                        />
                                    </div>
                                </div>
                                <div className={styles.inputWrapperDoubleButtons}>
                                    <div className={styles.authorise} onClick={handleOpenSignUpPopup}>
                                        {intl.formatMessage({ id: 'form.register2' })}
                                    </div>
                                    <button type='submit' className={styles.submitButton}>
                                        {intl.formatMessage({ id: 'form.send' })}
                                    </button>
                                </div>
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

SubscribeForm.propTypes = {
    theme: PropTypes.string,
    isFooter: PropTypes.bool
};

export default SubscribeForm;
