import React from 'react';
import styles from './index.module.scss';
import LargeArticleCard from '../../LargeArticleCard';
import SmallArticleCard from '../../SmallArticleCard';
import PropTypes from 'prop-types';
import Lazy from '../../Lazy';
import { FormattedMessage } from 'react-intl';

const EssenceReview = ({ articles, featured, commercialItem }) => {
    const articlesList = [...new Set([...featured, ...articles])].slice(0, 6);
    const bigArticles = articlesList.slice(0, 2);
    const smallArticles = articlesList.slice(1);

    return (
        <div className={styles.root}>
            <div className={styles.titleWrapper}>
                <div className={styles.containerLeft}>
                    <span className={styles.wholeLine}/>
                    <span className={styles.wholeLine}/>
                </div>
                <h6 className={styles.title}>
                    <FormattedMessage id='mainPage.commentarySectionTitle'/>
                </h6>
                <div className={styles.containerRight}>
                    <span className={styles.wholeLine}/>
                    <span className={styles.wholeLine}/>
                </div>
            </div>
            <div className={styles.largeArticles}>
                <div className={styles.largeCardWrapper}>
                    {bigArticles[0] && <LargeArticleCard theme='essenceReview' article={bigArticles[0]} withStats/>}
                </div>
                <div className={styles.largeCardWrapper}>
                    {
                        bigArticles[1] && <LargeArticleCard theme='essenceReview' article={bigArticles[1]}/>
                    }
                </div>
            </div>
            <div className={styles.articleList}>
                {smallArticles.map((article) => (
                    <div key={article._id.toString()} className={styles.smallArticleWrapper}>
                        <SmallArticleCard withStats theme='essenceReview' article={article}/>
                    </div>
                )
                )}
            </div>
            <div className={styles.ad}>
                {
                    commercialItem
                        ? <a className={styles.commercialLink} href={commercialItem.link} target='_blank' rel="noreferrer">
                            <Lazy>
                                <picture>
                                    <source srcSet={commercialItem.photosHorizontal[0].pathWebp} type='image/webp' />
                                    <img src={commercialItem.photosHorizontal[0].path} alt={commercialItem.name || 'commercial'} />
                                </picture>
                            </Lazy>
                        </a>
                        : <div className={styles.placeholder}>{'AD'}</div>
                }
            </div>
        </div>
    );
};

EssenceReview.propTypes = {
    articles: PropTypes.array,
    commercialItem: PropTypes.object,
    featured: PropTypes.array
};

EssenceReview.defaultProps = {
    articles: [],
    featured: []
};

export default EssenceReview;
