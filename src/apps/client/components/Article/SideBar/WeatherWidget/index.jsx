import React, { useEffect, useState } from 'react';
import styles from './index.module.scss';
import { useRouter } from 'next/router';
import { useSelector } from 'react-redux';
import formatDate from '../../../../utils/formatDate';
import { getLocation, getWeather } from '../../../../utils/manageToken';
import Lazy from '../../../Lazy';
import { useIntl } from 'react-intl';

const WeatherWidget = () => {
    const router = useRouter();
    const pages = useSelector(({ data }) => data.pages);
    const page = pages.find(page => page.pageId === 'general');
    const weatherData = useSelector(({ application }) => application.weather);
    const locationData = useSelector(({ application }) => application.location);
    const [location, setLocation] = useState(locationData);
    const [weather, setWeather] = useState(weatherData);
    const [isCelsius, setIsCelsius] = useState(false);
    const intl = useIntl();

    const switchWeatherMode = () => {
        setIsCelsius(!isCelsius);
    };

    useEffect(() => {
        const weather = JSON.parse(getWeather());
        setWeather(weather);
        const location = JSON.parse(getLocation());
        setLocation(location);
    }, [weatherData, locationData]);

    return (
        <div className={styles.root}>
            <p className={styles.holiday}>{page?.data[router.locale]?.holiday}</p>
            <p className={styles.date}>
                {formatDate(new Date(), router.locale)}
            </p>
            <div className={styles.image}>
                <Lazy>
                    <picture>
                        <source srcSet={page?.data[router.locale]?.holidayBanner[0]?.pathWebp} type='image/webp' className={styles.banner}/>
                        {/* eslint-disable-next-line max-len */}
                        <img src={page?.data[router.locale]?.holidayBanner[0]?.path} alt={page?.data[router.locale]?.holiday || 'banner'} className={styles.banner} />
                    </picture>
                </Lazy>
            </div>
            <div className={styles.bottomInfo}>
                {
                    weather &&
                    <p className={styles.weather}>{`${weather.condition}`}</p>
                }
                {
                    weather &&
                    <p className={styles.weatherTemp} onClick={switchWeatherMode}>
                        {
                            isCelsius
                                ? intl.formatMessage({ id: 'common.tempCelsius' }, { temp: Math.round(weather.tempC) })
                                : intl.formatMessage({ id: 'common.tempFahrenheit' }, { temp: Math.round(weather.tempF) })
                        }
                    </p>
                }
                {
                    location &&
                    <p className={styles.city}>{`${location.city}, ${location.region}`}</p>
                }
            </div>
        </div>
    );
};

export default WeatherWidget;
