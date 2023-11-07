import React, { useMemo } from 'react';
import styles from './index.module.scss';
import CurrentAffair from './CurrentAffair';
import ScientificHealth from './ScientificHealth';
import Subscribe from './Subscribe';
import PropTypes from 'prop-types';
import Lazy from '../../Lazy';
import { useIntl } from 'react-intl';
import { useWindowSize } from '../../../utils/useWindowSize';
import { useDispatch } from 'react-redux';
import setSubscriptionPopup from '../../../store/actions/setSubscriptionPopup';

function AdSVG () {
    return null;
}

const ThirdSection = ({ categoriesArticles, commercialItem }) => {
    const intl = useIntl();
    const { width } = useWindowSize();
    const isMobile = useMemo(() => width <= 550, [width]);
    const dispatch = useDispatch();

    const handleOpenSubscriptionPopup = () => {
        dispatch(setSubscriptionPopup(true));
    };
    return (
        <div className={styles.root}>
            {
                categoriesArticles[0] &&
                <CurrentAffair
                    articles={categoriesArticles[0].articles}
                    featured={categoriesArticles[0].featured}
                    category={categoriesArticles[0].category}
                />
            }
            <div className={styles.commercial}>
                {
                    commercialItem
                        ? <a className={styles.commercialLink} href={commercialItem.link} target='_blank' rel="noreferrer">
                            <Lazy>
                                <picture>
                                    <source media="(max-width:1024px)" srcSet={commercialItem.photosHorizontal[0].pathWebp} type='image/webp' />
                                    <source media="(max-width:1440px)" srcSet={commercialItem.photosVertical[0].pathWebp} type='image/webp' />
                                    <source srcSet={commercialItem.photosHorizontal[0].pathWebp} type='image/webp' />
                                    <img src={commercialItem.photosHorizontal[0].path} alt={commercialItem.name || 'commercial'} />
                                </picture>
                            </Lazy>
                        </a>
                        : <div className={styles.placeholder}>{'AD'}</div>
                }
                {/* vertical */}
                <div className={styles.googleAd}>
                    <amp-ad width="100vw" height="320"
                        type="adsense"
                        data-ad-client="ca-pub-5094837188797246"
                        data-ad-slot="3921809737"
                        data-auto-format="rspv"
                        data-full-width="">
                        <div overflow=""></div>
                    </amp-ad>
                </div>
            </div>
            <div className={styles.subLink} onClick={handleOpenSubscriptionPopup}>
                {isMobile ? intl.formatMessage({ id: 'common.subscribe' }) : intl.formatMessage({ id: 'mainPage.subscribeExclusive' })}
                <div className={styles.subSvg}>
                    <AdSVG/>
                </div>
            </div>
            {
                categoriesArticles[1] &&
                <div className={styles.desktopContent}>
                    <ScientificHealth
                        articles={categoriesArticles[1].articles}
                        featured={categoriesArticles[1].featured}
                        category={categoriesArticles[1].category}
                    />
                </div>
            }
            <Subscribe/>
        </div>
    );
};

ThirdSection.propTypes = {
    articles: PropTypes.array,
    commercialItem: PropTypes.object,
    categoriesArticles: PropTypes.array
};

export default ThirdSection;
