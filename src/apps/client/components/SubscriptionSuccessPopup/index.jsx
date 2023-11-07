import React from 'react';
import styles from './index.module.scss';
import { useIntl } from 'react-intl';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { useDispatch } from 'react-redux';
import setSubscriptionSuccessPopup from '../../store/actions/setSubscriptionSuccessPopup';
import Popover from '@material-ui/core/Popover';
import CloudsSVG from '../../../../../public/images/svg/clouds.svg';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import setSubscriptionSuccessVerifiedPopup from '../../store/actions/setSubscriptionSuccessVerifiedPopup';

const SubscriptionSuccess = ({ theme }) => {
    const dispatch = useDispatch();
    const intl = useIntl();

    const handleClosePopup = () => {
        dispatch(setSubscriptionSuccessPopup(false));
        dispatch(setSubscriptionSuccessVerifiedPopup(false));
    };

    const rootClassNames = classNames(styles.root, {
        [styles[theme]]: theme
    });

    const handleContinue = () => {
        handleClosePopup();
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return <Popover
        open={true}
        anchorOrigin={{ horizontal: 'center', vertical: 'center' }}
        classes={{ paper: styles.paper, root: styles.popover }}
        transitionDuration={{ appear: 0, enter: 0, exit: 100 }}
    >
        <div className={rootClassNames}>
            <div className={styles.background} onClick={handleClosePopup}/>
            <ClickAwayListener onClickAway={handleClosePopup}>
                <div className={styles.body}>
                    <div className={styles.wrapper}>
                        {
                            theme === 'final' &&
                            <div className={styles.image}><CloudsSVG/></div>
                        }
                        {
                            theme === 'verify' && <React.Fragment>
                                <div className={styles.titleSimple}>{intl.formatMessage({ id: 'subscribe.checkEmail2' })}</div>
                            </React.Fragment>
                        }
                        {
                            theme === 'final' && <React.Fragment>
                                <div className={styles.title}>{intl.formatMessage({ id: 'subscribe.thanks' })}</div>
                                <div className={styles.content}>{intl.formatMessage({ id: 'subscribe.content' })}</div>
                            </React.Fragment>
                        }
                        {
                            theme === 'final' &&
                            <button className={styles.continueButton} onClick={handleContinue}>
                                {intl.formatMessage({ id: 'footer.continue' })}
                            </button>
                        }
                        {
                            theme === 'verify' &&
                            <div className={styles.close} onClick={handleClosePopup}>
                                {intl.formatMessage({ id: 'form.close' })}
                            </div>
                        }
                    </div>
                </div>
            </ClickAwayListener>
        </div>
    </Popover>;
};

SubscriptionSuccess.propTypes = {
    theme: PropTypes.string
};

export default SubscriptionSuccess;
