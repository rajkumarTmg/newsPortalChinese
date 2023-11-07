import React from 'react';
import styles from './index.module.scss';
import { useFormik } from 'formik';
import { useIntl } from 'react-intl';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import subscribe from '../../../services/client/subscribe';
import setSubscriptionSuccessPopup from '../../../store/actions/setSubscriptionSuccessPopup';
import { useDispatch } from 'react-redux';
import * as Yup from 'yup';
import { useRouter } from 'next/router';

const Join = ({ theme, buttonText }) => {
    const intl = useIntl();
    const router = useRouter();
    const dispatch = useDispatch();

    const validationSchema = Yup.object({
        email: Yup.string().email(`${intl.formatMessage({ id: 'error.invalidEmail' })}`)
            .required(`${intl.formatMessage({ id: 'error.emailRequired' })}`),
        name: Yup.string().required(`${intl.formatMessage({ id: 'error.nameErrorValidation' })}`),
        lastName: Yup.string().required(`${intl.formatMessage({ id: 'error.surnameErrorValidation' })}`)
    });

    const formik = useFormik({
        initialValues: {
            name: '',
            lastName: '',
            email: ''
        },
        validateOnChange: false,
        validateOnBlur: false,
        validationSchema,
        onSubmit: (values, { resetForm }) => {
            subscribe({ firstName: values.name, lastName: values.lastName, email: values.email, locale: router.locale }).then(() => {
                dispatch(setSubscriptionSuccessPopup(true));
            })
                .then(() => {
                    resetForm();
                })
                .catch((e) => {
                    if (e.error === 'This email is already in use') {
                        formik.setErrors({ email: intl.formatMessage({ id: 'error.emailRegisteredError' }) });
                    }
                });
        }
    });

    const handleInputChange = (name) => (event) => {
        formik.setFieldValue(name, event.target.value);

        if (formik.errors[name]) {
            formik.setErrors({ ...formik.errors, [name]: false });
        }
    };

    return (
        <div className={classNames(styles.root, {
            [styles[theme]]: theme
        })}>
            <div className={styles.wrapper}>
                <p className={styles.title}>{intl.formatMessage({ id: 'common.joinNewsletter' })}</p>
                <p className={styles.subTitle}>{intl.formatMessage({ id: 'subscribe.headerSubscribe' })}</p>
                <form className={styles.form} onSubmit={formik.handleSubmit}>
                    <div className={styles.inputContainer}>
                        <input
                            className={classNames(styles.input, {
                                [styles.error]: formik.errors.name
                            })}
                            placeholder={intl.formatMessage({ id: 'form.firstName' })}
                            name="name"
                            value={formik.values.name}
                            onChange={handleInputChange('name')}
                            onBlur={formik.handleBlur}
                        />
                        { formik.errors.name && <div className={styles.errorText}>{formik.errors.name}</div> }
                    </div>
                    <div className={styles.inputContainer}>
                        <input
                            className={classNames(styles.input, {
                                [styles.error]: formik.errors.lastName
                            })}
                            placeholder={intl.formatMessage({ id: 'form.lastName' })}
                            name="lastName"
                            value={formik.values.lastName}
                            onChange={handleInputChange('lastName')}
                            onBlur={formik.handleBlur}
                        />
                        { formik.errors.lastName && <div className={styles.errorText}>{formik.errors.lastName}</div> }
                    </div>
                    <div className={styles.inputContainer}>
                        <input
                            className={classNames(styles.input, {
                                [styles.error]: formik.errors.email
                            })}
                            placeholder={intl.formatMessage({ id: 'form.yourEmail' })}
                            name="email"
                            value={formik.values.email}
                            onChange={handleInputChange('email')}
                            onBlur={formik.handleBlur}
                        />
                        { formik.errors.email && <div className={styles.errorText}>{formik.errors.email}</div> }
                    </div>
                    <div className={styles.buttonWrapper}>
                        <button className={styles.btn} type="submit">
                            {buttonText}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

Join.defaultProps = {
    buttonText: '订阅'
};

Join.propTypes = {
    theme: PropTypes.string,
    buttonText: PropTypes.string
};

export default Join;
