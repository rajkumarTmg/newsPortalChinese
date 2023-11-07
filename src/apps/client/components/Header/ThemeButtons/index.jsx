import React from 'react';
import styles from './index.module.scss';
import { FormattedMessage } from 'react-intl';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import DateAndWeather from '../DateAndWeather';
import { useDispatch } from 'react-redux';
import setHeaderSubscriptionPopup from '../../../store/actions/setHeaderSubscriptionPopup';
import setContactPopup from '../../../store/actions/setContactPopup';
import setSubmitArticlePopup from '../../../store/actions/setSubmitArticlePopup';

const ThemeButtons = ({ theme }) => {
    const dispatch = useDispatch();

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
        <div>
            <div className={classNames(styles.root, {
                [styles[theme]]: theme
            })}>
                <button className={styles.themeButton} onClick={handleOpenSubmitArticlePopup}>
                    <FormattedMessage id='header.contribute'/>
                </button>
                <button className={styles.themeButton} onClick={handleOpenContactPopup}>
                    <FormattedMessage id='header.contact'/>
                </button>
                <button className={styles.themeButton} onClick={handleOpenSubscriptionPopup}>
                    <FormattedMessage id='header.subscription'/>
                </button>
            </div>
            <DateAndWeather theme={theme}/>
        </div>
    );
};

ThemeButtons.propTypes = {
    theme: PropTypes.string

};

export default ThemeButtons;
