import React, { useState } from 'react';
import { useIntl } from 'react-intl';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
// COMPONENTS
import Input from '../Fields/InputField';
import * as Yup from 'yup';
import { useFormik } from 'formik';
import Popover from '@material-ui/core/Popover';
// ACTIONS
import setRestorePasswordPopup from '../../store/actions/setRestorePasswordPopup';
import setRestorePasswordSuccessPopup from '../../store/actions/setRestorePasswordSuccessPopup';
import setSignUpPopup from '../../store/actions/setSignUpPopup';
import restorePassword from '../../services/client/restorePassword';
// STYLES
import styles from './index.module.scss';
import classNames from 'classnames';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import { useRouter } from 'next/router';

const RestorePassword = ({ theme }) => {
    const dispatch = useDispatch();
    const router = useRouter();
    const intl = useIntl();
    const [noUser, setNoUser] = useState(false);

    const validationSchema = Yup.object({
        email: Yup.string().email(`${intl.formatMessage({ id: 'error.invalidEmail' })}`)
            .required(`${intl.formatMessage({ id: 'error.emailRequired' })}`)
    });

    const formik = useFormik({
        initialValues: {
            email: ''
        },
        validateOnChange: false,
        validateOnBlur: false,
        validationSchema: validationSchema,
        onSubmit: (formValues, { resetForm }) => {
            restorePassword({ email: formValues.email, locale: router.locale }).then(() => {
                resetForm();
                handleClosePopup();
                dispatch(setRestorePasswordSuccessPopup(true));
            })
                .catch(e => {
                    if (e?.error) {
                        if (e?.error === 'User is not found') {
                            setNoUser(true);
                        }
                    }
                });
        }
    });

    const handleInputChange = (name, value) => {
        formik.setFieldValue(name, value);
    };

    const handleClosePopup = () => {
        dispatch(setRestorePasswordPopup(false));
    };

    const handleOpenRegisterPopup = () => {
        dispatch(setRestorePasswordPopup(false));
        dispatch(setSignUpPopup(true));
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
                                        placeholder={intl.formatMessage({ id: 'form.email' })}
                                        title={intl.formatMessage({ id: 'form.enterEmail' })}
                                        value={formik.values.email}
                                        type='text'
                                        theme='auth'
                                        handleChange={handleInputChange}
                                        onBlur={formik.handleBlur}
                                        name='email'
                                        error={formik.errors.email || (noUser && intl.formatMessage({ id: 'error.noUser' }))}
                                        isError={formik.errors.email || noUser}
                                    />
                                </div>
                            </div>
                            <button type='submit' className={styles.submitButton}>
                                {intl.formatMessage({ id: 'form.authorise' })}
                            </button>
                        </form>
                    </div>
                    <div className={styles.register} onClick={handleOpenRegisterPopup}>
                        {intl.formatMessage({ id: 'form.register' })}
                    </div>
                    <div className={styles.close} onClick={handleClosePopup}>
                        {intl.formatMessage({ id: 'form.close' })}
                    </div>
                </div>
            </ClickAwayListener>
        </div>
    </Popover>;
};

RestorePassword.propTypes = {
    theme: PropTypes.string
};

export default RestorePassword;
