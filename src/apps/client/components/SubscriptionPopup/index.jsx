import React from 'react';
import styles from './index.module.scss';
import { useIntl } from 'react-intl';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { useDispatch } from 'react-redux';
import setSubscriptionSuccessPopup from '../../store/actions/setSubscriptionSuccessPopup';
import setSubscriptionPopup from '../../store/actions/setSubscriptionPopup';
import Popover from '@material-ui/core/Popover';
import Input from '../Fields/InputField';
import Phone from '../Fields/PhoneField';
import * as Yup from 'yup';
import { useFormik } from 'formik';
import subscribe from '../../services/client/subscribe';
import 'overlayscrollbars/css/OverlayScrollbars.css';
import { OverlayScrollbarsComponent } from 'overlayscrollbars-react';
import CloudsPNG from '../../../../../public/images/Clouds.png';
import Image from 'next/image';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import { useRouter } from 'next/router';

const SubscriptionSuccess = ({ theme }) => {
    const dispatch = useDispatch();
    const router = useRouter();
    const intl = useIntl();

    const validationSchema = Yup.object({
        email: Yup.string().email(`${intl.formatMessage({ id: 'error.invalidEmail' })}`)
            .required(`${intl.formatMessage({ id: 'error.emailRequired' })}`),
        name: Yup.string().required(`${intl.formatMessage({ id: 'error.nameErrorValidation' })}`),
        surname: Yup.string().required(`${intl.formatMessage({ id: 'error.surnameErrorValidation' })}`)
    });

    const formik = useFormik({
        initialValues: {
            email: '',
            name: '',
            surname: '',
            phone: ''
        },
        validateOnChange: false,
        validateOnBlur: false,
        validationSchema: validationSchema,
        onSubmit: (formValues, { resetForm }) => {
            // eslint-disable-next-line max-len
            subscribe({ email: formValues.email, firstName: formValues.name, lastName: formValues.surname, phone: formValues.phone, locale: router.locale }).then(() => {
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
        dispatch(setSubscriptionPopup(false));
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
                    <div className={styles.image}>
                        <Image src={CloudsPNG} fill={'contain'} layout={'fill'}/>
                    </div>
                    <div className={styles.title}>{intl.formatMessage({ id: 'subscribe.headerSubscribe' })}</div>
                    <div className={styles.content}>{intl.formatMessage({ id: 'subscribe.checkEmail' })}</div>
                    <div className={styles.formWrapper}>
                        <OverlayScrollbarsComponent>
                            <form onSubmit={formik.handleSubmit} className={styles.form}>
                                <div className={styles.inputsContainer}>
                                    <div className={styles.inputWrapper}>
                                        <Input
                                            placeholder={intl.formatMessage({ id: 'form.email' })}
                                            value={formik.values.email}
                                            theme='auth'
                                            handleChange={handleInputChange}
                                            onBlur={formik.handleBlur}
                                            name='email'
                                            error={formik.errors.email}
                                            isError={formik.errors.email}
                                        />
                                    </div>
                                </div>
                                <div className={styles.inputsContainer}>
                                    <div className={styles.inputWrapper}>
                                        <Input
                                            placeholder={intl.formatMessage({ id: 'form.firstName' })}
                                            value={formik.values.name}
                                            type='text'
                                            theme='auth'
                                            handleChange={handleInputChange}
                                            onBlur={formik.handleBlur}
                                            name='name'
                                            error={formik.errors.name}
                                            isError={formik.errors.name}
                                        />
                                    </div>
                                </div>
                                <div className={styles.inputsContainer}>
                                    <div className={styles.inputWrapper}>
                                        <Input
                                            placeholder={intl.formatMessage({ id: 'form.lastName' })}
                                            value={formik.values.surname}
                                            type='text'
                                            theme='auth'
                                            handleChange={handleInputChange}
                                            onBlur={formik.handleBlur}
                                            name='surname'
                                            error={formik.errors.surname}
                                            isError={formik.errors.surname}
                                        />
                                    </div>
                                </div>
                                <div className={styles.inputsContainer}>
                                    <div className={styles.inputWrapper}>
                                        <Phone
                                            placeholder={intl.formatMessage({ id: 'form.phone' })}
                                            value={formik.values.phone}
                                            type='tel'
                                            theme='auth'
                                            handleChange={handleInputChange}
                                            name='phone'
                                            code=''
                                        />
                                    </div>
                                </div>
                                <button type='submit' className={styles.submitButton}>
                                    {intl.formatMessage({ id: 'common.submit' })}
                                </button>
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

SubscriptionSuccess.propTypes = {
    theme: PropTypes.string
};

export default SubscriptionSuccess;
