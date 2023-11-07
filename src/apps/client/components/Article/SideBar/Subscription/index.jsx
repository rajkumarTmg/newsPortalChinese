import React, { useMemo } from 'react';
import styles from './index.module.scss';
import { useIntl } from 'react-intl';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import subscribe from '../../../../services/client/subscribe';
import setSubscriptionSuccessPopup from '../../../../store/actions/setSubscriptionSuccessPopup';
import { useDispatch } from 'react-redux';
import classNames from 'classnames';
import { useRouter } from 'next/router';

const Subscription = () => {
    const intl = useIntl();
    const router = useRouter();
    const dispatch = useDispatch();
    const validationSchema = useMemo(() =>
        Yup.object().shape({
            email: Yup.string().email(`${intl.formatMessage({ id: 'error.invalidEmail' })}`)
                .required(`${intl.formatMessage({ id: 'error.emailRequired' })}`),
            name: Yup.string().required(`${intl.formatMessage({ id: 'error.nameErrorValidation' })}`),
            surname: Yup.string().required(`${intl.formatMessage({ id: 'error.surnameErrorValidation' })}`)
        })
    , []);

    const formik = useFormik({
        initialValues: {
            name: '',
            surname: '',
            email: ''
        },
        validateOnChange: false,
        validateOnBlur: false,
        validationSchema,
        onSubmit: (values, { resetForm }) => {
            subscribe({ firstName: values.name, lastName: values.surname, email: values.email, locale: router.locale }).then(() => {
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
        <form onSubmit={formik.handleSubmit} className={styles.root}>
            <h6 className={styles.title}>{intl.formatMessage({ id: 'mainPage.subscription' })}</h6>
            <div className={styles.inputs}>
                <div className={styles.inputContainer}>
                    <input
                        onChange={handleInputChange('surname')}
                        className={classNames(styles.input, {
                            [styles.error]: formik.errors.surname
                        })}
                        name='surname'
                        placeholder={intl.formatMessage({ id: 'form.lastName' })}
                        value={formik.values.surname}
                        onBlur={formik.handleBlur}
                    />
                    { formik.errors.surname && <div className={styles.errorText}>{formik.errors.surname}</div> }
                </div>
                <div className={styles.inputContainer}>
                    <input
                        onChange={handleInputChange('name')}
                        className={classNames(styles.input, {
                            [styles.error]: formik.errors.name
                        })}
                        name='name'
                        placeholder={intl.formatMessage({ id: 'form.firstName' })}
                        value={formik.values.name}
                        onBlur={formik.handleBlur}
                    />
                    { formik.errors.name && <div className={styles.errorText}>{formik.errors.name}</div> }
                </div>
                <div className={styles.inputContainer}>
                    <input
                        onChange={handleInputChange('email')}
                        className={classNames(styles.input, {
                            [styles.error]: formik.errors.email
                        })}
                        name='email'
                        placeholder={`${intl.formatMessage({ id: 'form.yourEmail' })}*`}
                        value={formik.values.email}
                        onBlur={formik.handleBlur}
                    />
                    { formik.errors.email && <div className={styles.errorText}>{formik.errors.email}</div> }
                </div>
            </div>
            <button
                type='submit'
                className={styles.confirmBtn}>
                {intl.formatMessage({ id: 'common.submit' })}
            </button>
        </form>
    );
};

export default Subscription;
