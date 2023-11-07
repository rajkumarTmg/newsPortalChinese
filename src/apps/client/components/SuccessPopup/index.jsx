import React from 'react';
import styles from './index.module.scss';
import { useIntl } from 'react-intl';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { useDispatch } from 'react-redux';
import setSuccessPopup from '../../store/actions/setSuccessPopup';
import Popover from '@material-ui/core/Popover';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';

const SuccessPopup = ({ theme }) => {
    const dispatch = useDispatch();
    const intl = useIntl();

    const handleClosePopup = () => {
        dispatch(setSuccessPopup(false));
    };

    const rootClassNames = classNames(styles.root, {
        [styles[theme]]: theme
    });

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
                        <div className={styles.title}>{intl.formatMessage({ id: 'form.successTitle' })}</div>
                        <div className={styles.close} onClick={handleClosePopup}>
                            {intl.formatMessage({ id: 'form.close' })}
                        </div>
                    </div>
                </div>
            </ClickAwayListener>
        </div>
    </Popover>;
};

SuccessPopup.propTypes = {
    theme: PropTypes.string
};

export default SuccessPopup;
