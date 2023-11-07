import React from 'react';
import styles from './index.module.scss';
import { useIntl } from 'react-intl';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Popover from '@material-ui/core/Popover';

const Loader = ({ theme, open }) => {
    const intl = useIntl();

    const rootClassNames = classNames(styles.root, {
        [styles[theme]]: theme
    });

    const loaderContent = <div className={rootClassNames}>
        <div className={styles.background}/>
        <div className={styles.body}>
            <span>{intl.formatMessage({ id: 'loader.header' })}</span>
        </div>
    </div>;

    return theme === 'fullScreen'
        ? <Popover
            open={open}
            transitionDuration={{ appear: 0, enter: 0, exit: 100 }}
            anchorOrigin={{ horizontal: 'center', vertical: 'center' }}
            classes={{
                paper: styles.paper,
                root: styles.popover
            }}
        >
            {loaderContent}
        </Popover>
        : <div>
            {loaderContent}
        </div>;
};

Loader.propTypes = {
    theme: PropTypes.string,
    open: PropTypes.bool
};

export default Loader;
