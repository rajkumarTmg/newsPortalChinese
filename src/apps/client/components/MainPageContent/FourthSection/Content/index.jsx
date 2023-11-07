import React, { useMemo } from 'react';
import LargeArticleCard from '../../../LargeArticleCard';
import SmallArticleCard from '../../../SmallArticleCard';
import styles from './index.module.scss';
import { useWindowSize } from '../../../../utils/useWindowSize';
import PropTypes from 'prop-types';
import { useRouter } from 'next/router';
import Lazy from '../../../Lazy';
import Link from 'next/link';

const Content = ({ articles, featured, category, smallCommercialItem }) => {
    const { width } = useWindowSize();
    const withStats = useMemo(() => width <= 1440, [width]);
    const router = useRouter();
    const bigArticles = [...featured, ...articles].slice(0, 1);
    const smallArticles = featured?.length < 1 ? articles.slice(1 - featured?.length, (1 - featured?.length) + 8) : articles.slice(0, 8);
    return (
        <div className={styles.root}>
            <div className={styles.titleWrapper}>
                <div className={styles.containerLeft}>
                    <span className={styles.wholeLine}/>
                    <span className={styles.wholeLine}/>
                    <span className={styles.wholeLine}/>
                </div>
                <h6 className={styles.title}>
                    <Link href={`categories/${category?.data[router.locale]?.alias}`}>
                        <a className={styles.link}>
                            {category?.data[router.locale]?.name}
                        </a>
                    </Link>
                </h6>
                <div className={styles.containerRight}>
                    <span className={styles.wholeLine}/>
                    <span className={styles.wholeLine}/>
                    <span className={styles.wholeLine}/>
                </div>
            </div>
            <div className={styles.largeCardWrapper}>
                {
                    bigArticles[0] &&
                    <LargeArticleCard theme='world' withStats={withStats} article={bigArticles[0]}/>
                }
                <div className={styles.ad}>{
                    smallCommercialItem
                        ? <a className={styles.commercialLink} href={smallCommercialItem.link} target='_blank' rel="noreferrer">
                            <Lazy>
                                <picture>
                                    <source srcSet={smallCommercialItem.photos[0].pathWebp} type='image/webp' />
                                    <img src={smallCommercialItem.photos[0].path} alt={smallCommercialItem.name || 'commercial'} />
                                </picture>
                            </Lazy>
                        </a>
                        : <div className={styles.placeholder}>{'AD'}</div>
                }</div>
            </div>
            <div className={styles.list}>
                {smallArticles.map((article) =>
                    <div key={article._id.toString()} className={styles.smallArticleCard}>
                        <a>
                            <SmallArticleCard theme='world' article={article}/>
                        </a>
                    </div>)}
            </div>
        </div>
    );
};

Content.propTypes = {
    articles: PropTypes.array,
    smallCommercialItem: PropTypes.object,
    featured: PropTypes.array,
    category: PropTypes.object
};

Content.defaultProps = {
    articles: [],
    featured: []
};

export default Content;
