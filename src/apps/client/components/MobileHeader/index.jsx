import React, { useEffect, useState } from 'react';
import styles from './index.module.scss';
import SocialHeader from '../Header/SocialHeader';
import Search from './Search';
import Image from 'next/image';
import dynamic from 'next/dynamic';
import { useRouter } from 'next/router';
import formatDate from '../../utils/formatDate';
import { useDispatch, useSelector } from 'react-redux';
import { getLocation, getWeather, removeToken } from '../../utils/manageToken';
import setSignInPopup from '../../store/actions/setSignInPopup';
import classNames from 'classnames';
import Categories from './Categories';
import Link from 'next/link';
import setAuthorized from '../../store/actions/setAuthorized';
import setToken from '../../store/actions/setToken';
import setCurrentUser from '../../store/actions/setCurrentUser';
import setContactPopup from '../../store/actions/setContactPopup';
import setHeaderSubscriptionPopup from '../../store/actions/setHeaderSubscriptionPopup';
import setSubmitArticlePopup from '../../store/actions/setSubmitArticlePopup';
import { FormattedMessage } from 'react-intl';
// IMAGES
// import LogoMobileSVG from '../../../../../public/images/svg/logoMobile.svg';

const AudioPlayer = dynamic(import('../Header/AudioPlayer'), {
    ssr: false
});

const MobileHeader = () => {
    const router = useRouter();
    const pages = useSelector(({ data }) => data.pages);
    const page = pages.find(page => page.pageId === 'general');
    const dispatch = useDispatch();
    const audioInfo = useSelector(({ application }) => application.audio);
    const categories = useSelector(({ data }) => data.categories);
    const mainPage = pages.find(page => page.pageId === 'main');
    const [audio, setAudio] = useState({ file: mainPage?.data[router.locale]?.audioFile[0]?.path, title: mainPage?.data[router.locale]?.audioTitle });
    const weatherData = useSelector(({ application }) => application.weather);
    const locationData = useSelector(({ application }) => application.location);
    const [weather, setWeather] = useState(weatherData);
    const [location, setLocation] = useState(locationData);
    const [isCelsius, setIsCelsius] = useState(false);
    const [category, setCategory] = useState(null);
    const [subcategory, setSubcategory] = useState(null);
    const user = useSelector(({ application }) => application.user);
    const article = useSelector(({ application }) => application.article);
    const post = useSelector(({ application }) => application.post);

    useEffect(() => {
        const weather = JSON.parse(getWeather());
        setWeather(weather);
        const location = JSON.parse(getLocation());
        setLocation(location);
    }, [weatherData, locationData]);

    useEffect(() => {
        setAudio({
            file: audioInfo.file || mainPage?.data[router.locale]?.audioFile[0]?.path,
            title: (audioInfo.file && audioInfo.title) || mainPage?.data[router.locale]?.audioTitle
        });
    }, [audioInfo]);

    const handleOpenSignInPopup = () => {
        if (user) {
            handleSignOut();
            return;
        }

        dispatch(setSignInPopup(true));
    };

    const switchWeatherMode = () => {
        setIsCelsius(!isCelsius);
    };

    const userLoginButton = classNames(styles.user, {
        [styles.isUser]: !!user
    });

    useEffect(() => {
        if (router.pathname === '/categories/[slug]' || router.pathname === '/multimedia/[slug]') {
            if (router.query.slug) {
                const categoryCurrent = categories.find((category) => category?.data[router.locale]?.alias === router.query.slug);
                if (categoryCurrent) {
                    setCategory(categoryCurrent);
                }
            }
        }
        if (router.pathname === '/categories/[slug]/[subcategory]' || router.pathname === '/multimedia/[slug]/[subcategory]') {
            if (router.query.slug && router.query.subcategory) {
                const currentCategory =
                    categories.find(category => category?.data[router.locale]?.alias === router.query.slug);
                const currentSubcategory =
                    currentCategory?.subcategories?.find(subcategory => subcategory?.data[router.locale]?.alias === router.query.subcategory);
                setSubcategory(currentSubcategory);
                setCategory(currentCategory);
            }
        }
        if (router.pathname === '/[slug]') {
            if (article) {
                const categoryCurrent = categories.find((category) => category._id === article.data[router.locale]?.category);
                if (categoryCurrent) {
                    const currentSubcategory =
                        categoryCurrent?.subcategories?.find(subcategory => subcategory._id === article.data[router.locale]?.subcategory);
                    currentSubcategory && setSubcategory(currentSubcategory);
                    setCategory(categoryCurrent);
                }
            }
        }
        if (router.pathname === '/posts/[slug]') {
            if (post) {
                const categoryCurrent = categories.find((category) => category._id === post.data[router.locale]?.category);
                if (categoryCurrent) {
                    const currentSubcategory =
                        categoryCurrent?.subcategories?.find(subcategory => subcategory._id === post.data[router.locale]?.subcategory);
                    currentSubcategory && setSubcategory(currentSubcategory);
                    setCategory(categoryCurrent);
                }
            }
        }
    }, [router.pathname, router.query, router.locale, article, post]);

    const handleSignOut = () => {
        dispatch(setAuthorized(false));
        dispatch(setToken(null));
        dispatch(setCurrentUser(null));
        removeToken();
        router.push('/');
    };

    const handleOpenContactPopup = () => {
        dispatch(setContactPopup(true));
    };

    const handleOpenSubscriptionPopup = () => {
        dispatch(setHeaderSubscriptionPopup(true));
    };

    const handleOpenSubmitArticlePopup = () => {
        dispatch(setSubmitArticlePopup(true));
    };

    return (
        <div className={styles.root}>
            <div className={styles.wrapper}>
                <div className={styles.bg}>
                    <picture>
                        {/* eslint-disable-next-line max-len */}
                        <source srcSet={page?.data[router.locale]?.headerBanner[0]?.pathWebp || '/images/header-bg.png'} type='image/webp' className={styles.bgImage}/>
                        {/* eslint-disable-next-line max-len */}
                        <img src={page?.data[router.locale]?.headerBanner[0]?.path || '/images/header-bg.png'} alt={'background'} className={styles.bgImage} />
                    </picture>
                </div>
                <div className={styles.top}>
                    <div className={styles.socials}>
                        <SocialHeader theme='mobileHeader'/>
                    </div>
                    <div className={styles.logo}>
                        <Link href='/'>
                            <span className={styles.logoImage}>
                                <Image src='/images/svg/logoMobileOld.svg' layout='fill'/>
                                {/*
                                <LogoMobileSVG/>
                                */}
                            </span>
                        </Link>
                        {
                            weather &&
                            <div className={styles.weather}>
                                <div className={styles.weatherIcon}>
                                    <img src={weather.icon} alt={weather.condition}/>
                                </div>
                                <div className={styles.weatherTemp}>{isCelsius ? Math.round(weather.tempC) : Math.round(weather.tempF)}</div>
                                <div className={classNames(styles.weatherSwitcher, {
                                    [styles.isCelsius]: isCelsius
                                })} onClick={switchWeatherMode}>
                                    <button className={styles.weatherButton}>F</button>
                                    <span>|</span>
                                    <button className={styles.weatherButton}>C</button>
                                </div>
                            </div>
                        }
                    </div>
                    <div className={userLoginButton} onClick={handleOpenSignInPopup}>
                        {
                            user
                                ? <span className={styles.signOut}><FormattedMessage id='header.signOut'/></span>
                                : <div>
                                    <Image src='/images/login.png' width={23} height={20}/>
                                </div>
                        }
                    </div>
                </div>
                <div className={styles.middle}>
                    <div className={styles.buttons}>
                        <button className={styles.button} onClick={handleOpenSubmitArticlePopup}>
                            <FormattedMessage id='header.contribute'/>
                        </button>
                        <button className={styles.button} onClick={handleOpenContactPopup}>
                            <FormattedMessage id='header.contact'/>
                        </button>
                        <button className={styles.button} onClick={handleOpenSubscriptionPopup}>
                            <FormattedMessage id='header.subscription'/>
                        </button>
                    </div>
                    <div className={styles.audio}>
                        <AudioPlayer
                            theme='mobileHeader'
                            file={audio.file}
                            title={audio.title}
                        />
                    </div>
                    <Categories categories={categories} category={category} subcategory={subcategory}/>
                </div>
            </div>
            <div className={styles.bottom}>
                <div className={styles.bottomWrapper}>
                    {
                        router.locale === 'en'
                            ? <p className={styles.date}>{formatDate(new Date(), router.locale, true)}</p>
                            // eslint-disable-next-line max-len
                            : <p className={styles.date}>{formatDate(new Date(), router.locale)} <span>{formatDate(new Date(), router.locale, false, true)}</span></p>
                    }
                    {
                        location &&
                        <p className={styles.city}>{location.city}</p>
                    }
                    <div className={styles.empty}/>
                </div>
                <Search/>
            </div>
        </div>
    );
};

export default MobileHeader;
