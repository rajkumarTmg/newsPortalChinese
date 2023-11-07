import React, { useMemo } from 'react';
import styles from './index.module.scss';
import LargeArticleCard from '../../../LargeArticleCard';
import Link from 'next/link';
import SmallArticleCard from '../../../SmallArticleCard';
import { useIntl } from 'react-intl';
import ArrowSVG from '../../../../../../../public/images/svg/commercial-arrow.svg';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { useWindowSize } from '../../../../utils/useWindowSize';
import { useRouter } from 'next/router';

const ScientificHealth = ({ isSmallDesktop, articles, featured, category }) => {
    const { width } = useWindowSize();
    const IS_TABLET = useMemo(() => width <= 1440, [width]);
    const intl = useIntl();
    const router = useRouter();
    const bigArticles = [...featured, ...articles].slice(0, 1);
    const smallArticles = useMemo(() => !IS_TABLET
        ? (featured?.length < 1
            ? articles.slice(1 - featured?.length, (1 - featured?.length) + 3)
            : articles.slice(0, 3))
        : [...featured, ...articles].slice(0, 6), [IS_TABLET, featured, articles]);

    return (
        <div className={classNames(styles.root, {
            [styles.smallDesktop]: isSmallDesktop
        })}>
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
                    <LargeArticleCard theme='health' withStats article={bigArticles[0]}/>
                }
            </div>
            <div className={styles.list}>
                {smallArticles.map((article) =>
                    <div className={styles.smallCardWrapper} key={article._id.toString()}>
                        <SmallArticleCard theme='health' withStats={IS_TABLET} article={article}/>
                    </div>
                )}
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
        </div>
    );
};

ScientificHealth.propTypes = {
    isSmallDesktop: PropTypes.bool,
    articles: PropTypes.array,
    featured: PropTypes.array,
    category: PropTypes.object
};

ScientificHealth.defaultProps = {
    articles: [],
    featured: []
};

export default ScientificHealth;
