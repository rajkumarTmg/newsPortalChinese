import React from 'react';
import styles from './index.module.scss';
import PropTypes from 'prop-types';
import classNames from 'classnames';
// IMAGES
import ArrowBasicIconSVG from '../../../../../../../public/images/svg/arrowBasic.svg';

const SliderArrow = ({ onClick, direction, theme, disabled }) => {
    return (
        <div className={classNames(styles.arrow, {
            [styles.left]: direction === 'left',
            [styles.right]: direction === 'right',
            [styles[theme]]: theme,
            [styles.disabled]: disabled
        })} onClick={onClick}>
            {direction === 'left'
                ? <span className={styles.leftArrow}><ArrowBasicIconSVG/></span>
                : <span className={styles.rightArrow}><ArrowBasicIconSVG/></span>
            }
        </div>);
};

SliderArrow.propTypes = {
    onClick: PropTypes.func,
    direction: PropTypes.oneOf(['left', 'right']),
    theme: PropTypes.string,
    disabled: PropTypes.bool
};

export default SliderArrow;
