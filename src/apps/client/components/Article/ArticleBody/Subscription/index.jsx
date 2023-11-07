import React, { memo, useMemo } from 'react';
import styles from './index.module.scss';
import { useIntl } from 'react-intl';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import classNames from 'classnames';
import subscribe from '../../../../services/client/subscribe';
import setSubscriptionSuccessPopup from '../../../../store/actions/setSubscriptionSuccessPopup';
import { useDispatch } from 'react-redux';
import { useRouter } from 'next/router';

const Subscription = () => {
    const intl = useIntl();
    const router = useRouter();
    const dispatch = useDispatch();

    const validationSchema = useMemo(() =>
        Yup.object().shape({
            email: Yup.string().email(`${intl.formatMessage({ id: 'error.invalidEmail' })}`)
                .required(`${intl.formatMessage({ id: 'error.emailRequired' })}`)
        })
    , []);

    const formik = useFormik({
        initialValues: {
            email: ''
        },
        validateOnChange: false,
        validateOnBlur: false,
        validationSchema,
        onSubmit: (values, { resetForm }) => {
            subscribe({ email: values.email, locale: router.locale }).then(() => {
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
        <form onSubmit={formik.handleSubmit} className={classNames(styles.root, 'subscriptionRoot')}>
            <p className={styles.subscriptionText}>
                <span className={styles.longText}>{intl.formatMessage({ id: 'common.subscription' })}</span>
                <span className={styles.shortText}>{intl.formatMessage({ id: 'common.subscribeFree' })}</span>
            </p>
            <div className={styles.inputContainer}>
                <input
                    className={classNames(styles.input, {
                        [styles.error]: formik.errors.email
                    })}
                    onChange={handleInputChange('email')}
                    value={formik.values.email}
                    placeholder={intl.formatMessage({ id: 'common.emailPlaceholder' })}
                    name='email'
                    onBlur={formik.handleBlur}
                />
                { formik.errors.email && <div className={styles.errorText}>{formik.errors.email}</div> }
            </div>
            <button className={styles.submit} type='submit'>
                {intl.formatMessage({ id: 'common.submit' })}
            </button>
        </form>
    );
};

export default memo(Subscription);
