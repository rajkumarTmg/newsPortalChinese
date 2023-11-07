import { useMemo, useRef, useState, useEffect } from 'react';
import Link from 'next/link';
import { useIntl } from 'react-intl';
import { getYear } from 'date-fns';
// CONSTANTS
import { FOOTER_NAVIGATION } from '../../constants/home';
// IMAGES
import ArrowBasicIconSVG from '../../../../../public/images/svg/arrowBasic.svg';
import CloudsSVG from '../../../../../public/images/svg/clouds.svg';
// STYLES
import classNames from 'classnames';
import styles from './index.module.scss';
import * as Yup from 'yup';
import { useFormik } from 'formik';
import subscribe from '../../services/client/subscribe';
import { useRouter } from 'next/router';
import setSubmitArticlePopup from '../../store/actions/setSubmitArticlePopup';
import { useDispatch } from 'react-redux';
import setHeaderSubscriptionPopup from '../../store/actions/setHeaderSubscriptionPopup';
import setSignUpPopup from '../../store/actions/setSignUpPopup';

const Footer = () => {
    const [open, setOpen] = useState(false);
    const ref = useRef(null);
    const router = useRouter();
    const intl = useIntl();
    const dispatch = useDispatch();

    const handleActionClick = (action) => () => {
        if (action === 'submit') {
            dispatch(setSubmitArticlePopup('footer'));
        }
        if (action === 'subscribe') {
            dispatch(setHeaderSubscriptionPopup('footer'));
        }
        if (action === 'signUp') {
            dispatch(setSignUpPopup('footer'));
        }
    };

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
                setOpen(true);
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

    const handleContinue = () => {
        setOpen(false);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const handleInputChange = (name) => (event) => {
        formik.setFieldValue(name, event.target.value);

        if (formik.errors[name]) {
            formik.setErrors({ ...formik.errors, [name]: false });
        }
    };

    useEffect(() => {
        function handleClickOutside (event) {
            if (ref.current && !ref.current.contains(event.target)) {
                setOpen(false);
            }
        }
        // Bind the event listener
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            // Unbind the event listener on clean up
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [ref]);

    const popupClassNames = classNames(styles.popupSubscribe, {
        [styles.open]: open
    });

    const errorClassNames = classNames(styles.error, { [styles.visible]: formik.touched.email && formik.errors.email });

    const inputClassNames = classNames(styles.input, {
        [styles.inputError]: formik.touched.email && formik.errors.email
    });

    const currentYear = useMemo(() => getYear(new Date()), []);

    return <div className={styles.root} id={'footerRoot'}>
        <div className={styles.footerContent}>
            <nav className={styles.footerNav}>
                {FOOTER_NAVIGATION.map(({ link, action, translationKey }) => {
                    return !action
                        ? <Link href={link} key={translationKey}>
                            <a className={styles.footerNavItem} target='_blank'>
                                {intl.formatMessage({ id: translationKey })}
                            </a>
                        </Link>
                        : <div key={translationKey} className={styles.footerNavItem} onClick={handleActionClick(action)}>
                            {intl.formatMessage({ id: translationKey })}
                        </div>;
                }
                )}
            </nav>
            <div className={styles.subscribe}>
                <div className={styles.subscribeContent}>
                    <p className={styles.subscribeTitle}>{intl.formatMessage({ id: 'footer.subscribeTitle' })}</p>
                    <form className={styles.inputWrapper} onSubmit={formik.handleSubmit}>
                        <div className={styles.inputContainer}>
                            <input
                                className={inputClassNames}
                                placeholder={intl.formatMessage({ id: 'footer.emailPlaceholder' })}
                                value={formik.values.email}
                                onChange={handleInputChange('email')}
                                onBlur={formik.handleBlur}
                                name='email'
                            />
                            <div className={errorClassNames}>{formik.errors.email}</div>
                        </div>
                        <button type='submit' className={styles.arrowIcon}><ArrowBasicIconSVG/></button>
                        <p className={styles.subscribeText}>{intl.formatMessage({ id: 'footer.subscribeButton' })}</p>
                    </form>
                    <div className={popupClassNames} ref={ref}>
                        <div className={styles.image}><CloudsSVG/></div>
                        <div className={styles.titleText}>{intl.formatMessage({ id: 'footer.subscribePopupText1' })}</div>
                        <div className={styles.mainText}>{intl.formatMessage({ id: 'footer.subscribePopupText2' })}</div>
                        <button className={styles.continueButton} onClick={handleContinue}>
                            {intl.formatMessage({ id: 'footer.continue' })}
                        </button>
                    </div>
                </div>
            </div>
            <div className={styles.copyright}>
                <span>© {currentYear} {intl.formatMessage({ id: 'footer.copyright1' })}</span>
                <Link href={'/privacy'}>
                    <a>{intl.formatMessage({ id: 'footer.copyright2' })}</a>
                </Link>
                <Link href={'/notice'}>
                    <a>{intl.formatMessage({ id: 'footer.copyright3' })}</a>
                </Link>
            </div>
        </div>
    </div>;
};

export default Footer;
