import React from 'react';
import { useSelector } from 'react-redux';
import styles from './index.module.scss';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Lazy from '../../../Lazy';

const AsideCommercial = ({ theme }) => {
    const asideCommercial = useSelector(({ commercial }) => commercial.articlePageCommercial[1]);

    return (
        <div className={classNames(styles.root, {
            [styles[`${theme}`]]: theme
        })}>
            {
                asideCommercial
                    ? <a className={styles.commercialLink} href={asideCommercial.link} target='_blank' rel="noreferrer">
                        <Lazy>
                            <picture>
                                <source srcSet={asideCommercial.photosVertical[0].pathWebp} type='image/webp' />
                                <img src={asideCommercial.photosVertical[0].path} alt={asideCommercial.name || 'commercial'} />
                            </picture>
                        </Lazy>
                    </a>
                    : <div className={styles.placeholder}>{'AD'}</div>
            }
        </div>
    );
};

AsideCommercial.propTypes = {
    theme: PropTypes.string
};

export default AsideCommercial;
