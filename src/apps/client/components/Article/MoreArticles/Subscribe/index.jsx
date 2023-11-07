import React, { useMemo } from 'react';
import styles from './index.module.scss';
import { useIntl } from 'react-intl';
import classNames from 'classnames';
import ArrowBasicIconSVG from '../../../../../../../public/images/svg/arrowBasic.svg';
import { useDispatch } from 'react-redux';
import * as Yup from 'yup';
import { useFormik } from 'formik';
import subscribe from '../../../../services/client/subscribe';
import setSubscriptionSuccessPopup from '../../../../store/actions/setSubscriptionSuccessPopup';
import { useRouter } from 'next/router';

const Subscribe = () => {
    const intl = useIntl();
    const router = useRouter;
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
        <form className={styles.root} onSubmit={formik.handleSubmit}>
            <div className={styles.inputContainer}>
                <input
                    placeholder={intl.formatMessage({ id: 'common.emailPlaceholder' })}
                    onChange={handleInputChange('email')}
                    className={classNames(styles.input, {
                        [styles.error]: formik.errors.email
                    })}
                    name='email'
                    value={formik.values.email}
                    onBlur={formik.handleBlur}
                />
                { formik.errors.email && <div className={styles.errorText}>{formik.errors.email}</div> }
            </div>
            <div className={styles.arrowIcon} onClick={formik.handleSubmit}><ArrowBasicIconSVG className={styles.icon}/></div>
            <button className={styles.button} type='submit'>{intl.formatMessage({ id: 'common.subscribe' })}</button>
        </form>
    );
};

export default Subscribe;
