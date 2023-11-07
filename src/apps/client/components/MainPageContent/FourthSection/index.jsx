import React, { useMemo } from 'react';
import styles from './index.module.scss';
import Content from './Content';
import Link from 'next/link';
import ArrowSVG from '../../../../../../public/images/svg/commercial-arrow.svg';
import { useWindowSize } from '../../../utils/useWindowSize';
import { useIntl } from 'react-intl';
import PropTypes from 'prop-types';
import Lazy from '../../Lazy';
import setSubscriptionPopup from '../../../store/actions/setSubscriptionPopup';
import { useDispatch } from 'react-redux';
import { useRouter } from 'next/router';

const FourthSection = ({ categoriesArticles, smallCommercialItem, largeCommercialItem }) => {
    const intl = useIntl();
    const { width } = useWindowSize();
    const isMobile = useMemo(() => width <= 550, [width]);
    const dispatch = useDispatch();
    const router = useRouter();

    const handleOpenSubscriptionPopup = () => {
        dispatch(setSubscriptionPopup(true));
    };

    return (
        <div className={styles.root}>
            {
                categoriesArticles[2] &&
                <Content
                    articles={categoriesArticles[2].articles}
                    featured={categoriesArticles[2].featured}
                    category={categoriesArticles[2].category}
                    smallCommercialItem={smallCommercialItem}
                />
            }
            {
                categoriesArticles[2] &&
                <div className={styles.sideCommercial}>
                    {
                        largeCommercialItem
                            ? <a className={styles.commercialLink} href={largeCommercialItem.link} target="_blank" rel="noreferrer">
                                <Lazy>
                                    <picture>
                                        <source media="(max-width:526px)" srcSet={largeCommercialItem.photos[0].pathWebp} type='image/webp' />
                                        <source media="(max-width:1024px)" srcSet={largeCommercialItem.photosHorizontal[0].pathWebp} type='image/webp' />
                                        <source srcSet={largeCommercialItem.photosVertical[0].pathWebp} type='image/webp' />
                                        <img src={largeCommercialItem.photosVertical[0].path} alt={largeCommercialItem.name || 'commercial'} />
                                    </picture>
                                </Lazy>
                            </a>
                            : <p className={styles.commercialAltText}>AD</p>
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
                    {/* square */}
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
                </div>
            }
            <Link href={`/categories/${categoriesArticles[2]?.category?.data[router.locale]?.alias}`}>
                <a className={styles.btn}>
                    <span>
                        {intl.formatMessage({ id: 'common.more' })}
                    </span>
                    <div className={styles.btnIcon}>
                        <ArrowSVG/>
                    </div>
                    <div className={styles.lines}>
                        <span/>
                        <span/>
                        <span/>
                        <span/>
                    </div>
                </a>
            </Link>
            <div className={styles.subLink} onClick={handleOpenSubscriptionPopup}>
                {isMobile ? intl.formatMessage({ id: 'common.subscribe' }) : intl.formatMessage({ id: 'mainPage.subscribeExclusive' })}
                <div className={styles.subSvg}>
                    <ArrowSVG/>
                </div>
            </div>
        </div>
    );
};

FourthSection.propTypes = {
    articles: PropTypes.array,
    smallCommercialItem: PropTypes.object,
    largeCommercialItem: PropTypes.object,
    categoriesArticles: PropTypes.array
};

export default FourthSection;
