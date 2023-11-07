import React, { useMemo } from 'react';
import styles from './index.module.scss';
import { useIntl } from 'react-intl';
import { useFormik } from 'formik';
import * as Yup from 'yup';
// IMAGES
import ArrowBasicIconSVG from '../../../../../../../public/images/svg/arrowBasic.svg';
import subscribe from '../../../../services/client/subscribe';
import setSubscriptionSuccessPopup from '../../../../store/actions/setSubscriptionSuccessPopup';
import { useDispatch } from 'react-redux';
import classNames from 'classnames';
import { useRouter } from 'next/router';

const Subscribe = () => {
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

        if (formik.errors.email) {
            formik.setErrors({ email: '' });
        }
    };

    return (
        <form className={styles.root} onSubmit={formik.handleSubmit}>
            <p className={styles.text}>
                {intl.formatMessage({ id: 'footer.subscribeTitle' })}
            </p>
            <div className={styles.inputContainer}>
                <input
                    onChange={handleInputChange('email')}
                    className={classNames(styles.input, {
                        [styles.error]: formik.errors.email
                    })}
                    name='email'
                    placeholder={intl.formatMessage({ id: 'form.yourEmail' })}
                    value={formik.values.name}
                    onBlur={formik.handleBlur}
                />
                { formik.errors.email && <div className={styles.errorText}>{formik.errors.email}</div> }
            </div>
            <button className={styles.btn} type='submit'><ArrowBasicIconSVG className={styles.icon}/></button>
        </form>
    );
};

export default Subscribe;
