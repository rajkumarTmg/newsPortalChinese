import React, { Fragment, useEffect, useMemo } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/router';

import { IntlProvider } from 'react-intl';

import Head from 'next/head';

import Script from 'next/script';

import favicon from '../../../../../public/images/favicon.ico';

import translations from '../../translations';

import styles from './index.module.css';
import SignInForm from '../SignInForm';
import SignUpForm from '../SignUpForm';
import RestorePasswordForm from '../RestorePasswordForm';
import RestorePasswordSuccessPopup from '../RestorePasswordSuccessPopup';
import SubscriptionSuccessPopup from '../SubscriptionSuccessPopup';
import SubscriptionPopup from '../SubscriptionPopup';
import SubscribeForm from '../SubscribeForm';
import SignUpSuccessPopup from '../SignUpSuccessPopup';
import ResetPasswordForm from '../ResetPasswordForm';
import ContactForm from '../ContactForm';
import SuccessPopup from '../SuccessPopup';
import SubmitArticleForm from '../SubmitArticleForm';
import getUser from '../../services/client/getUser';
import setAuthorized from '../../store/actions/setAuthorized';
import setToken from '../../store/actions/setToken';
import { getLocation, getToken, getWeather, setLocation, setWeather } from '../../utils/manageToken';
import getUserLikes from '../../services/client/getUserLikes';
import setCurrentUser from '../../store/actions/setCurrentUser';
import setUserLikes from '../../store/actions/setUserLikes';
import MobileHeader from '../MobileHeader';
import Header from '../Header';
import getWeatherAndLocation from '../../services/client/getWeatherAndLocation';
import Footer from '../Footer';
import setLoaded from '../../store/actions/setLoaded';
import setLocationData from '../../store/actions/setLocationData';
import setWeatherData from '../../store/actions/setWeatherData';

const AppClient = ({ Component, pageProps }) => {
    const router = useRouter();
    const locale = router.locale === 'ua' ? 'uk' : router.locale;
    const messages = useMemo(() => translations[locale], [locale]);
    const isSignInPopup = useSelector(({ application }) => application.signInPopup);
    const isSignUpPopup = useSelector(({ application }) => application.signUpPopup);
    const isRestorePasswordPopup = useSelector(({ application }) => application.restorePasswordPopup);
    const isRestorePasswordSuccessPopup = useSelector(({ application }) => application.restorePasswordSuccessPopup);
    const isSignUpSuccessPopup = useSelector(({ application }) => application.signUpSuccessPopup);
    const isResetPasswordPopup = useSelector(({ application }) => application.resetPasswordPopup);
    const isContactPopup = useSelector(({ application }) => application.contactPopup);
    const isSuccessPopup = useSelector(({ application }) => application.successPopup);
    const isSubscriptionSuccessPopup = useSelector(({ application }) => application.subscriptionSuccessPopup);
    const isSubscriptionSuccessVerifiedPopup = useSelector(({ application }) => application.subscriptionSuccessVerifiedPopup);
    const isSubscriptionPopup = useSelector(({ application }) => application.subscriptionPopup);
    const isHeaderSubscriptionPopup = useSelector(({ application }) => application.headerSubscriptionPopup);
    const isSubmitArticlePopup = useSelector(({ application }) => application.submitArticlePopup);
    const dispatch = useDispatch();
    const dateWeekAgo = new Date().getTime() - 3600 * 24 * 7;
    const dateHourAgo = new Date().getTime() - 3600;

    useEffect(() => {
        const token = getToken();
        getUser(token)
            .then(user => {
                getUserLikes(token, user._id).then(result => {
                    dispatch(setUserLikes(result));
                });
                dispatch(setCurrentUser(user));
                dispatch(setAuthorized(true));
                dispatch(setToken(token));
            })
            .catch(() => {
                dispatch(setAuthorized(false));
            });

        window.scrollTo(0, 0);
    }, []);

    useEffect(() => {
        const timeout = setTimeout(() => {
            const location = getLocation();
            if (location) {
                const parsedLocation = JSON.parse(location);
                if (parsedLocation.lastUpdated < dateWeekAgo) {
                    getLocationData();
                } else {
                    const weather = getWeather();
                    if (weather) {
                        const parsedWeather = JSON.parse(weather);
                        if (parsedWeather.lastUpdated < dateHourAgo) {
                            getWeatherData(parsedLocation.loc);
                        }
                    } else {
                        getWeatherData(parsedLocation.loc);
                    }
                }
            } else {
                getLocationData();
            }
        }, 2000);

        return () => {
            clearTimeout(timeout);
        };
    }, [router.locale]);

    useEffect(() => {
        if (window.performance.timing.loadEventEnd) {
            dispatch(setLoaded(true));
            return;
        }
        const listener = () => {
            dispatch(setLoaded(true));
        };

        window.addEventListener('load', listener);

        return () => {
            window.removeEventListener('load', listener);
        };
    }, []);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [router.asPath]);

    const getLocationData = () => {
        getWeatherAndLocation({ locale: router.locale }).then(result => {
            const location = result?.location;
            const weather = result?.weather;
            const newLocation = JSON.stringify({
                ...location,
                lastUpdated: new Date().getTime()
            });
            setLocation(newLocation);
            dispatch(setLocationData(newLocation));

            const newWeather = JSON.stringify({
                ...weather,
                lastUpdated: new Date().getTime()
            });
            setWeather(newWeather);
            dispatch(setWeatherData(newWeather));
        });
    };

    const getWeatherData = (location) => {
        getWeatherAndLocation({ location, locale: router.locale }).then(result => {
            const weather = result?.weather;
            const newWeather = JSON.stringify({
                ...weather,
                lastUpdated: new Date().getTime()
            });
            setWeather(newWeather);
            dispatch(setWeatherData(newWeather));
        });
    };

    return <IntlProvider locale={locale} messages={messages} textComponent={Fragment}>
        <Head>
            <link rel='shortcut icon' href={favicon} type='image/x-icon' />
            <link rel="preconnect" href="https://fonts.googleapis.com"/>
            <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin/>
            {/* eslint-disable-next-line max-len */}
            <link href="https://fonts.googleapis.com/css2?family=Noto+Serif+SC:wght@400;500;600;700&family=Noto+Serif+TC:wght@400;500;600;700&display=swap" rel="stylesheet"/>
            <Script
                crossOrigin="anonymous"
                src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-${process.env.GOOGLE_ADS_KEY}`}
            ></Script>
            <script
                dangerouslySetInnerHTML={{
                    __html: 'history.scrollRestoration = "manual"'
                }}
            />
            <script async custom-element="amp-ad" src="https://cdn.ampproject.org/v0/amp-ad-0.1.js"></script>
        </Head>
        <div>
            <div className={styles.page}>
                <MobileHeader/>
                <Header/>
                <div className={styles.pageContent}>
                    <Component {...pageProps} />
                </div>
                <Footer/>
                {
                    isSignInPopup && <SignInForm />
                }
                {
                    isSignUpPopup && <SignUpForm isFooter={isSignUpPopup === 'footer'}/>
                }
                {
                    isRestorePasswordPopup && <RestorePasswordForm />
                }
                {
                    isRestorePasswordSuccessPopup && <RestorePasswordSuccessPopup/>
                }
                {
                    isSubscriptionSuccessPopup && <SubscriptionSuccessPopup theme='verify'/>
                }
                {
                    isSubscriptionSuccessVerifiedPopup && <SubscriptionSuccessPopup theme='final'/>
                }
                {
                    isSubscriptionPopup && <SubscriptionPopup/>
                }
                {
                    isHeaderSubscriptionPopup && <SubscribeForm isFooter={isHeaderSubscriptionPopup === 'footer'}/>
                }
                {
                    isResetPasswordPopup && <ResetPasswordForm />
                }
                {
                    isContactPopup && <ContactForm />
                }
                {
                    isSuccessPopup && <SuccessPopup />
                }
                {
                    isSubmitArticlePopup && <SubmitArticleForm isFooter={isSubmitArticlePopup === 'footer'}/>
                }
                {
                    isSignUpSuccessPopup && <SignUpSuccessPopup />
                }
            </div>
        </div>
    </IntlProvider>;
};

AppClient.propTypes = {
    Component: PropTypes.func,
    pageProps: PropTypes.object
};

export default AppClient;
