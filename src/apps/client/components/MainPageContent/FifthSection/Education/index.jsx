import React, { useMemo } from 'react';
import styles from './index.module.scss';
import LargeArticleCard from '../../../LargeArticleCard';
import Link from 'next/link';
import SmallArticleCard from '../../../SmallArticleCard';
import { useIntl } from 'react-intl';
import ArrowSVG from '../../../../../../../public/images/svg/commercial-arrow.svg';
import { useWindowSize } from '../../../../utils/useWindowSize';
import PropTypes from 'prop-types';
import { useRouter } from 'next/router';
import Lazy from '../../../Lazy';

const Education = ({ articles, featured, category, smallCommercialItem }) => {
    const { width } = useWindowSize();
    const IS_TABLET = useMemo(() => width <= 1440, [width]);
    const intl = useIntl();
    const router = useRouter();
    const bigArticles = [...featured, ...articles].slice(0, 1);
    const smallArticles = useMemo(() => !IS_TABLET
        ? featured?.length < 1 ? articles.slice(1 - featured?.length, (1 - featured?.length) + 6) : articles.slice(0, 6)
        : [...featured, ...articles].slice(0, 6), [IS_TABLET, featured, articles])
    ;
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
                    <LargeArticleCard theme='education' article={bigArticles[0]}/>
                }
                <div className={styles.adSmall}>{
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
                            <SmallArticleCard theme='education' withStats={width <= 1440} article={article}/>
                        </a>
                    </div>)}
            </div>
            <div className={styles.ad}>AD</div>
            <Link href={`categories/${category?.data[router.locale]?.alias}`}>
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
        </div>
    );
};

Education.propTypes = {
    articles: PropTypes.array,
    featured: PropTypes.array,
    category: PropTypes.object,
    smallCommercialItem: PropTypes.object
};

Education.defaultProps = {
    articles: [],
    featured: []
};

export default Education;
