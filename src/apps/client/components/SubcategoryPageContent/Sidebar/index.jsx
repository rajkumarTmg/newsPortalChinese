import React from 'react';
import styles from './index.module.scss';
import RelatedTopic from '../../Article/ArticleBody/RelatedTopic';
import PropTypes from 'prop-types';
import Lazy from '../../Lazy';

const Sidebar = ({ commercials, relatedRef, adRef, articles }) => {
    return (
        <div className={styles.root}>
            <div className={styles.related}>
                <div className={styles.commercialList}>
                    {
                        commercials[0]
                            ? <a className={styles.commercialLink} href={commercials[0].link} target='_blank' rel="noreferrer">
                                <Lazy>
                                    <picture>
                                        <source srcSet={commercials[0].photos[0].pathWebp} type='image/webp' />
                                        <img src={commercials[0].photos[0].path} alt={commercials[0].name || 'commercial'} />
                                    </picture>
                                </Lazy>
                            </a>
                            : <div className={styles.placeholder}>{'AD'}</div>
                    }
                </div>
                <div ref={relatedRef}>
                    <RelatedTopic articles={articles?.slice(0, 6)} theme='subcategoryPage'/>
                </div>
            </div>
            <div className={styles.adBanner} ref={adRef}>
                {
                    commercials[1]
                        ? <a className={styles.commercialLink} href={commercials[1].link} target='_blank' rel="noreferrer">
                            <Lazy>
                                <picture>
                                    <source srcSet={commercials[1].photos[0].pathWebp} type='image/webp' />
                                    <img src={commercials[1].photos[0].path} alt={commercials[1].name || 'commercial'} />
                                </picture>
                            </Lazy>
                        </a>
                        : <div className={styles.placeholder}>{'AD'}</div>
                }
            </div>
        </div>
    );
};

Sidebar.propTypes = {
    commercials: PropTypes.array,
    relatedRef: PropTypes.object,
    adRef: PropTypes.object,
    articles: PropTypes.array
};

export default Sidebar;
