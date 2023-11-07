import React, { useMemo } from 'react';
import styles from './index.module.scss';
import SmallArticleCard from '../../../SmallArticleCard';
import LargeArticleCard from '../../../LargeArticleCard';
import Link from 'next/link';
import { useIntl } from 'react-intl';
import ArrowSVG from '../../../../../../../public/images/svg/commercial-arrow.svg';
import { useWindowSize } from '../../../../utils/useWindowSize';
import PropTypes from 'prop-types';
import { useRouter } from 'next/router';

const CurrentAffair = ({ articles, featured, category }) => {
    const { width } = useWindowSize();
    const withStats = useMemo(() => width <= 1440, [width]);
    const intl = useIntl();
    const router = useRouter();
    const smallArticles = [...featured, ...articles].slice(0, 6);
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
                    smallArticles[0] &&
                    <LargeArticleCard theme='currentAffair' article={smallArticles[0]}/>
                }
            </div>
            <div className={styles.list}>
                {smallArticles.map((article) => (
                    <div className={styles.listItem} key={article._id.toString()}>
                        <SmallArticleCard theme='currentAffair' withStats={withStats} article={article}/>
                    </div>
                ))}
            </div>
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
            <div className={styles.create}>
                <Link href='#'>
                    <a className={styles.createLink}>
                        Create your blog
                        <ArrowSVG/>
                    </a>
                </Link>
            </div>
        </div>
    );
};

CurrentAffair.propTypes = {
    articles: PropTypes.array,
    featured: PropTypes.array,
    category: PropTypes.object
};

CurrentAffair.defaultProps = {
    articles: [],
    featured: []
};

export default CurrentAffair;
