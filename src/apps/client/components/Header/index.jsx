import React, { useEffect, useState } from 'react';
import styles from './index.module.scss';
import dynamic from 'next/dynamic';
import ThemeButtons from './ThemeButtons';
import SocialHeader from './SocialHeader';
import Link from 'next/link';
import Image from 'next/image';
import { FormattedMessage, useIntl } from 'react-intl';
import SearchInput from './SearchInput';
import LangSelect from '../LangSelect';
import setSignInPopup from '../../store/actions/setSignInPopup';
import { useDispatch, useSelector } from 'react-redux';
import setCurrentUser from '../../store/actions/setCurrentUser';
import setAuthorized from '../../store/actions/setAuthorized';
import setToken from '../../store/actions/setToken';
import { useRouter } from 'next/router';
import { getLocation, getWeather, removeToken } from '../../utils/manageToken';
import classNames from 'classnames';
import setSignUpPopup from '../../store/actions/setSignUpPopup';
// IMAGES
// import LogoSVG from '../../../../../public/images/svg/logo.svg';

const AudioPlayer = dynamic(import('./AudioPlayer'), {
    ssr: false
});

const Header = () => {
    const router = useRouter();
    const pages = useSelector(({ data }) => data.pages);
    const page = pages.find(page => page.pageId === 'general');
    const intl = useIntl();
    const dispatch = useDispatch();
    const audioInfo = useSelector(({ application }) => application.audio);
    const categories = useSelector(({ data }) => data.categories);
    const mainPage = pages.find(page => page.pageId === 'main');
    const [audio, setAudio] = useState({ file: mainPage?.data[router.locale]?.audioFile[0]?.path, title: mainPage?.data[router.locale]?.audioTitle });
    const weatherData = useSelector(({ application }) => application.weather);
    const locationData = useSelector(({ application }) => application.location);
    const [weather, setWeather] = useState(weatherData);
    const [location, setLocation] = useState(locationData);
    const [category, setCategory] = useState(null);
    const user = useSelector(({ application }) => application.user);
    const article = useSelector(({ application }) => application.article);
    const post = useSelector(({ application }) => application.post);
    const [isCelsius, setIsCelsius] = useState(false);

    const switchWeatherMode = () => {
        setIsCelsius(!isCelsius);
    };

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

    useEffect(() => {
        if (router.pathname === '/categories/[slug]' || router.pathname === '/multimedia/[slug]') {
            if (router.query.slug) {
                const categoryCurrent = categories.find((category) => category.data[router.locale]?.alias === router.query.slug);
                if (categoryCurrent) {
                    setCategory(categoryCurrent);
                }
            }
        }
        if (router.pathname === '/categories/[slug]/[subcategory]' || router.pathname === '/multimedia/[slug]/[subcategory]') {
            if (router.query.slug && router.query.subcategory) {
                const currentCategory =
                    categories.find(category => category.data[router.locale]?.alias === router.query.slug);
                setCategory(currentCategory);
            }
        }
        if (router.pathname === '/[slug]') {
            if (article) {
                const categoryCurrent = categories.find((category) => category._id === article.data[router.locale]?.category);
                if (categoryCurrent) {
                    setCategory(categoryCurrent);
                }
            }
        }
        if (router.pathname === '/posts/[slug]') {
            if (post) {
                const categoryCurrent = categories.find((category) => category._id === post.data[router.locale]?.category);
                if (categoryCurrent) {
                    setCategory(categoryCurrent);
                }
            }
        }
    }, [router.pathname, router.query, router.locale, article, post]);

    const handleOpenSignInPopup = () => {
        if (user) {
            handleSignOut();
            return;
        }

        dispatch(setSignInPopup(true));
    };

    const handleOpenSignUpPopup = () => {
        if (user) {
            handleSignOut();
            return;
        }

        dispatch(setSignUpPopup(true));
    };

    const handleSignOut = () => {
        dispatch(setAuthorized(false));
        dispatch(setToken(null));
        dispatch(setCurrentUser(null));
        removeToken();
        router.push('/');
    };

    const userLoginButton = classNames(styles.login, {
        [styles.isUser]: !!user
    });

    return (
        <div className={styles.root}>
            <div className={styles.bg}>
                <picture>
                    {/* eslint-disable-next-line max-len */}
                    <source srcSet={page?.data[router.locale]?.headerBanner[0]?.pathWebp || '/images/header-bg.png'} type='image/webp' className={styles.bgImage}/>
                    {/* eslint-disable-next-line max-len */}
                    <img src={page?.data[router.locale]?.headerBanner[0]?.path || '/images/header-bg.png'} alt={'background'} className={styles.bgImage} />
                </picture>
            </div>
            <div className={styles.topWrapper}>
                <div className={styles.top}>
                    <div className={styles.leftButtons}>
                        <div className={styles.themeButtons}>
                            <ThemeButtons theme="multimediaPage" />
                        </div>
                        <div className={styles.socials}>
                            <SocialHeader theme="categoryPage" />
                        </div>
                    </div>
                    <div className={styles.mainLogo}>
                        <Link href='/'>
                            <span className={styles.logoImage}>
                                <Image src="/images/header-main-logo.png" layout="fill"/>
                                {/*
                                <LogoSVG/>
                                */}
                            </span>
                        </Link>
                        {
                            weather &&
                            <div className={styles.weather}>
                                <div className={styles.weatherTemp} onClick={switchWeatherMode}>
                                    {isCelsius ? Math.round(weather.tempC) : Math.round(weather.tempF)}
                                    <span className={styles.weatherSwitcher}>
                                        <span className={styles.weatherButton}>{isCelsius ? 'C' : 'F'}</span>
                                    </span>
                                </div>
                                <div className={styles.weatherIcon}>
                                    <img src={weather.icon} alt={weather.condition}/>
                                </div>
                                {
                                    location &&
                                    <div className={styles.city}>{location.city}</div>
                                }
                            </div>
                        }
                    </div>
                    <div className={styles.categories}>
                        {
                            categories.map((item, i) => <Link href={`/categories/${item.data[router.locale]?.alias}`} key={i} >
                                <a className={classNames(styles.category, {
                                    [styles.active]: category
                                })}>{item.data[router.locale]?.name}</a>
                            </Link>
                            )
                        }
                    </div>
                    <div className={styles.userLinks}>
                        <div className={styles.userLinksContainer}>
                            <div className={styles.userLinksWrapper}>
                                {/* <Link href="#">
                                    <a className={styles.boutique}>{intl.formatMessage({ id: 'header.boutique' })}</a>
                                </Link> */}
                                {
                                    !user &&
                                    <button className={styles.join} onClick={handleOpenSignUpPopup}>
                                        {intl.formatMessage({ id: 'header.join' })}
                                    </button>
                                }
                                <div onClick={handleOpenSignInPopup}>
                                    <div className={userLoginButton}>
                                        {
                                            user
                                                ? <span className={styles.signOut}><FormattedMessage id='header.signOut'/></span>
                                                : <Image src="/images/login.png" layout="fill" />
                                        }
                                    </div>
                                </div>
                                <LangSelect />
                            </div>
                            {page?.data[router.locale].headerLink1Href &&
                                <a href={page?.data[router.locale].headerLink1Href} target={'_blank'} rel={'nofollow noreferrer'} className={styles.promoLink}>
                                    {page?.data[router.locale].headerLink1Text}
                                </a>}
                        </div>
                    </div>
                </div>
                <div className={styles.audio}>
                    <AudioPlayer
                        theme="multimediaPage"
                        file={audio.file}
                        title={audio.title}
                    />
                </div>
            </div>
            <div className={styles.bottom}>
                <SearchInput />
            </div>
        </div>
    );
};

export default Header;
