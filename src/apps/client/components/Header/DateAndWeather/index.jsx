import React from 'react';
import styles from './index.module.scss';
import PropTypes from 'prop-types';
import { useRouter } from 'next/router';
import classNames from 'classnames';
import formatDate from '../../../utils/formatDate';

const DateAndWeather = ({ theme }) => {
    const router = useRouter();
    return (
        <div className={classNames(styles.root, {
            [styles[theme]]: theme
        })}>
            {
                router.locale === 'en'
                    ? <p className={styles.date}>{formatDate(new Date(), router.locale, true)}</p>
                    : <p className={styles.date}>{formatDate(new Date(), router.locale)} <span>{formatDate(new Date(), router.locale, false, true)}</span></p>
            }
        </div>
    );
};

DateAndWeather.propTypes = {
    theme: PropTypes.string
};

export default DateAndWeather;
