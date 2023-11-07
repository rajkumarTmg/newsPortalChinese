import React from 'react';
import styles from './index.module.scss';
import MultimediaPageItem from '../../MultimediaPageItem';
import { FormattedMessage } from 'react-intl';
import PropTypes from 'prop-types';
import Lazy from '../../Lazy';

const HotspotMultimedia = ({ posts, sideAd, bottomAd }) => {
    return (
        <div className={styles.root}>
            <div className={styles.posts}>
                <div className={styles.titleWrapper}>
                    <div className={styles.containerLeft}>
                        <span className={styles.wholeLine}/>
                        <span className={styles.wholeLine}/>
                        <span className={styles.wholeLine}/>
                        <span className={styles.wholeLine}/>
                    </div>
                    <h6 className={styles.title}>
                        <FormattedMessage id='multimedia.hotVideo'/>
                    </h6>
                    <div className={styles.containerRight}>
                        <span className={styles.wholeLine}/>
                        <span className={styles.wholeLine}/>
                        <span className={styles.wholeLine}/>
                        <span className={styles.wholeLine}/>
                    </div>
                </div>
                <div className={styles.list}>
                    {posts.map((post) =>
                        <div className={styles.itemWrapper} key={post?._id}>
                            <MultimediaPageItem post={post} theme='hotspot' type={post.type} />
                        </div>
                    )}
                </div>
                <div className={styles.bottomAd}>
                    {
                        bottomAd
                            ? <a className={styles.commercialLink} href={bottomAd.link} target='_blank' rel="noreferrer">
                                <Lazy>
                                    <picture>
                                        <source srcSet={bottomAd.photosHorizontal[0].pathWebp} type='image/webp' />
                                        <img src={bottomAd.photosHorizontal[0].path} alt={bottomAd.name || 'commercial'} />
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
            <div className={styles.sideAd}>
                {
                    sideAd
                        ? <a className={styles.commercialLinkSide} href={sideAd.link} target='_blank' rel="noreferrer">
                            <Lazy>
                                <picture>
                                    <source srcSet={sideAd.photosVertical[0].pathWebp} type='image/webp' />
                                    <img src={sideAd.photosVertical[0].path} alt={sideAd.name || 'commercial'} />
                                </picture>
                            </Lazy>
                        </a>
                        : <div className={styles.placeholderSide}>{'AD'}</div>
                }
                {/* vertical */}
                <div className={styles.googleAdSide}>
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
        </div>
    );
};

HotspotMultimedia.propTypes = {
    posts: PropTypes.array,
    sideAd: PropTypes.object,
    bottomAd: PropTypes.object
};

export default HotspotMultimedia;
