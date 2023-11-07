import React from 'react';
import styles from './index.module.scss';
import PropTypes from 'prop-types';
import Lazy from '../../Lazy';
import classNames from 'classnames';

const CommercialBlock = ({ commercialItem, theme, isGoogleAdDesktop, isGoogleAdSmallDesktop, isGoogleAdMobile }) => {
    const rootClassNames = classNames(styles.root, {
        [styles[theme]]: theme
    });

    return (
        <div className={rootClassNames}>
            {commercialItem &&
                <a className={classNames(styles.link, {
                    [styles.hiddenDesktop]: isGoogleAdDesktop,
                    [styles.hiddenSmallDesktop]: isGoogleAdSmallDesktop,
                    [styles.hiddenMobile]: isGoogleAdMobile
                })} href={commercialItem.link} target='_blank' rel="noreferrer">
                    <Lazy>
                        <picture>
                            <source media="(max-width:526px)" srcSet={commercialItem.photos[0].pathWebp} type='image/webp' />
                            <source srcSet={commercialItem.photosHorizontal[0].pathWebp} type='image/webp' />
                            <img src={commercialItem.photosHorizontal[0].path} alt={commercialItem.name || 'commercial'} />
                        </picture>
                    </Lazy>
                </a>
            }
            {
                !commercialItem &&
                <div className={classNames(styles.placeholder, {
                    [styles.hiddenDesktop]: isGoogleAdDesktop,
                    [styles.hiddenSmallDesktop]: isGoogleAdSmallDesktop,
                    [styles.hiddenMobile]: isGoogleAdMobile
                })}>{'AD'}</div>
            }
            {/* horizontal */}
            {
                isGoogleAdDesktop &&
            <div className={styles.googleAd}>
                <amp-ad width="100vw" height="320"
                    type="adsense"
                    data-ad-client="ca-pub-5094837188797246"
                    data-ad-slot="4141301580"
                    data-auto-format="rspv"
                    data-full-width="">
                    <div overflow=""></div>
                </amp-ad>
            </div>
            }
            {/* horizontal */}
            {
                isGoogleAdSmallDesktop &&
                <div className={styles.googleAdSmallDesktop}>
                    <amp-ad width="100vw" height="320"
                        type="adsense"
                        data-ad-client="ca-pub-5094837188797246"
                        data-ad-slot="4141301580"
                        data-auto-format="rspv"
                        data-full-width="">
                        <div overflow=""></div>
                    </amp-ad>
                </div>
            }
            {/* square */}
            {
                isGoogleAdMobile &&
                <div className={styles.googleAdMobile}>
                    <amp-ad width="100vw" height="320"
                        type="adsense"
                        data-ad-client="ca-pub-5094837188797246"
                        data-ad-slot="5047189141"
                        data-auto-format="rspv"
                        data-full-width="">
                        <div overflow=""></div>
                    </amp-ad>
                </div>
            }
        </div>
    );
};
CommercialBlock.propTypes = {
    commercialItem: PropTypes.object,
    theme: PropTypes.string,
    isGoogleAdDesktop: PropTypes.bool,
    isGoogleAdSmallDesktop: PropTypes.bool,
    isGoogleAdMobile: PropTypes.bool
};

CommercialBlock.defaultProps = {
    isGoogleAdDesktop: false,
    isGoogleAdSmallDesktop: false,
    isGoogleAdMobile: false
};

export default CommercialBlock;
