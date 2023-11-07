import React from 'react';
import PropTypes from 'prop-types';
import { useIntl } from 'react-intl';
import { useDispatch } from 'react-redux';
import { useRouter } from 'next/router';
// COMPONENTS
import Input from '../Fields/InputField';
import Popover from '@material-ui/core/Popover';
import * as Yup from 'yup';
import { useFormik } from 'formik';
// ACTIONS
import setSignInPopup from '../../store/actions/setSignInPopup';
import setSignUpPopup from '../../store/actions/setSignUpPopup';
import resetPassword from '../../services/client/resetPassword';
// STYLES
import classNames from 'classnames';
import styles from './index.module.scss';
import setResetPasswordPopup from '../../store/actions/setResetPasswordPopup';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';

const ResetPassword = ({ theme }) => {
    const dispatch = useDispatch();
    const intl = useIntl();
    const router = useRouter();

    const token = router.query?.['restore-token'];

    const validationSchema = Yup.object({
        password: Yup
            .string()
            .required(`${intl.formatMessage({ id: 'form.resetPasswordNewPassword' })}`)
            .matches(
                // eslint-disable-next-line no-useless-escape
                /^(?=.{8,})/,
                `${intl.formatMessage({ id: 'error.invalidPassword' })}`
            ),
        password2: Yup
            .string()
            .required(`${intl.formatMessage({ id: 'form.resetPasswordNewPasswordRepeat' })}`)
            .oneOf([Yup.ref('password'), null], `${intl.formatMessage({ id: 'error.passwordsMatchError' })}`)
    });

    const formik = useFormik({
        initialValues: {
            password: '',
            password2: ''
        },
        validateOnChange: false,
        validateOnBlur: false,
        validationSchema: validationSchema,
        onSubmit: (formValues, { resetForm }) => {
            resetPassword({ token: token, password: formValues.password }).then(() => {
                router.replace('/', undefined, { shallow: true }).then(() => {
                    resetForm();
                    handleClosePopup();
                    dispatch(setSignInPopup(true));
                });
            });
        }
    });

    const handleInputChange = (name, value) => {
        formik.setFieldValue(name, value);
    };

    const handleClosePopup = () => {
        dispatch(setResetPasswordPopup(false));
    };

    const handleOpenRegisterPopup = () => {
        router.push('/').then(() => {
            dispatch(setSignUpPopup(true));
        });
    };

    const rootClassNames = classNames(styles.root, {
        [styles[theme]]: theme
    });

    return <Popover
        open={true}
        anchorOrigin={{ horizontal: 'center', vertical: 'center' }}
        classes={{ paper: styles.paper, root: styles.popover }}
        transitionDuration={{ appear: 0, enter: 0, exit: 100 }}
    >
        <div className={rootClassNames}>
            <div className={styles.background} onClick={handleClosePopup}/>
            <ClickAwayListener onClickAway={handleClosePopup}>
                <div className={styles.body}>
                    <div className={styles.title}>{intl.formatMessage({ id: 'form.resetPasswordTitle' })}</div>
                    <div className={styles.formWrapper}>
                        <form onSubmit={formik.handleSubmit} className={styles.form}>
                            <div className={styles.inputsContainer}>
                                <div className={styles.inputWrapper}>
                                    <Input
                                        placeholder={intl.formatMessage({ id: 'form.password' })}
                                        title={intl.formatMessage({ id: 'form.resetPasswordNewPassword' })}
                                        value={formik.values.password}
                                        type='password'
                                        theme='auth'
                                        handleChange={handleInputChange}
                                        onBlur={formik.handleBlur}
                                        name='password'
                                        error={formik.errors.password}
                                        isError={formik.errors.password}
                                    />
                                </div>
                                <div className={styles.inputWrapper}>
                                    <Input
                                        placeholder={intl.formatMessage({ id: 'form.password' })}
                                        title={intl.formatMessage({ id: 'form.resetPasswordNewPasswordRepeat' })}
                                        value={formik.values.password2}
                                        type='password'
                                        theme='auth'
                                        handleChange={handleInputChange}
                                        onBlur={formik.handleBlur}
                                        name='password2'
                                        error={formik.errors.password2}
                                        isError={formik.errors.password2}
                                    />
                                </div>
                            </div>
                            <button type='submit' className={styles.submitButton}>
                                {intl.formatMessage({ id: 'form.send' })}
                            </button>
                        </form>
                    </div>
                    <div className={styles.register} onClick={handleOpenRegisterPopup}>
                        {intl.formatMessage({ id: 'form.register2' })}
                    </div>
                    <div className={styles.close} onClick={handleClosePopup}>
                        {intl.formatMessage({ id: 'form.close' })}
                    </div>
                </div>
            </ClickAwayListener>
        </div>
    </Popover>;
};

ResetPassword.propTypes = {
    theme: PropTypes.string
};

export default ResetPassword;
