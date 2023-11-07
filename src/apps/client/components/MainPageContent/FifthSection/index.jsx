import React from 'react';
import Culture from './Culture';
import Education from './Education';
import styles from './index.module.scss';
import LastSection from './LastSection';
// import MoreContent from './MoreContent';
import PropTypes from 'prop-types';
import Lazy from '../../Lazy';
import ScientificHealth from '../ThirdSection/ScientificHealth';

const FifthSection = ({ categoriesArticles, commercialItem, smallCommercialItem, commercialItemSecond }) => {
    return (
        <div className={styles.root}>
            {
                categoriesArticles[1] &&
                <div className={styles.tabletContent}>
                    <ScientificHealth
                        articles={categoriesArticles[1].articles}
                        featured={categoriesArticles[1].featured}
                        category={categoriesArticles[1].category}
                    />
                </div>
            }
            {
                categoriesArticles[3] &&
                <Education
                    articles={categoriesArticles[3].articles}
                    featured={categoriesArticles[3].featured}
                    category={categoriesArticles[3].category}
                    smallCommercialItem={smallCommercialItem}
                />
            }
            {/* <MoreContent/> */}
            {
                categoriesArticles[4] &&
                <Culture
                    articles={categoriesArticles[4].articles}
                    featured={categoriesArticles[4].featured}
                    category={categoriesArticles[4].category}
                />
            }
            <div className={styles.ad}>
                {
                    commercialItem
                        ? <a className={styles.commercialLink} href={commercialItem.link} target='_blank' rel="noreferrer">
                            <Lazy>
                                <picture>
                                    <source media="(max-width:526px)" srcSet={commercialItem.photos[0].pathWebp} type='image/webp' />
                                    <source media="(max-width:768px)" srcSet={commercialItem.photosHorizontal[0].pathWebp} type='image/webp' />
                                    <source srcSet={commercialItem.photosHorizontal[0].pathWebp} type='image/webp' />
                                    <img src={commercialItem.photosHorizontal[0].path} alt={commercialItem.name || 'commercial'} />
                                </picture>
                            </Lazy>
                        </a>
                        : <div className={styles.placeholder}>{'AD'}</div>
                }
                {/* horizontal */}
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
            </div>
            {
                categoriesArticles.slice(5).map((block, i) => (
                    <LastSection
                        key={i}
                        articles={block.articles}
                        featured={block.featured}
                        category={block.category}
                    />
                ))
            }
            <div className={styles.adSecondary}>
                {
                    commercialItemSecond
                        ? <a className={styles.commercialLink} href={commercialItemSecond.link} target='_blank' rel="noreferrer">
                            <Lazy>
                                <picture>
                                    <source srcSet={commercialItemSecond.photosHorizontal[0].pathWebp} type='image/webp' />
                                    <img src={commercialItemSecond.photosHorizontal[0].path} alt={commercialItemSecond.name || 'commercial'} />
                                </picture>
                            </Lazy>
                        </a>
                        : <div className={styles.placeholder}>{'AD'}</div>
                }
                {/* horizontal */}
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
            </div>
        </div>
    );
};

FifthSection.propTypes = {
    commercialItem: PropTypes.object,
    commercialItemSecond: PropTypes.object,
    smallCommercialItem: PropTypes.object,
    categoriesArticles: PropTypes.array
};

export default FifthSection;
