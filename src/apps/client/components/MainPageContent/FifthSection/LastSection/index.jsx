import React, { useMemo } from 'react';
import LargeArticleCard from '../../../LargeArticleCard';
import SmallArticleCard from '../../../SmallArticleCard';
import styles from './index.module.scss';
import Link from 'next/link';
import { useIntl } from 'react-intl';
import ArrowSVG from '../../../../../../../public/images/svg/commercial-arrow.svg';
import { useWindowSize } from '../../../../utils/useWindowSize';
import PropTypes from 'prop-types';
import { useRouter } from 'next/router';

const SixthSection = ({ articles, featured, category }) => {
    const { width } = useWindowSize();
    const IS_TABLET = useMemo(() => width <= 1440, [width]);
    const intl = useIntl();
    const router = useRouter();
    const bigArticles = [...featured, ...articles].slice(0, 2);
    const smallArticles = useMemo(() => !IS_TABLET
        ? featured?.length < 1 ? articles.slice(2 - featured?.length, (2 - featured?.length) + 6) : articles.slice(0, 6)
        : [...featured, ...articles].slice(0, 6), [IS_TABLET, featured, articles]);

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
            <div className={styles.top}>
                <div className={styles.largeCardWrapper}>
                    {
                        bigArticles[0] &&
                        <LargeArticleCard theme='last' article={bigArticles[0]}/>
                    }
                </div>
                <div className={styles.largeCardWrapper}>
                    {
                        bigArticles[1] &&
                        <LargeArticleCard theme='last' article={bigArticles[1]}/>
                    }
                </div>
            </div>
            <div className={styles.bottom}>
                {smallArticles.map((article) =>
                    <div className={styles.bottomItem} key={article._id.toString()}>
                        <SmallArticleCard theme='last' withStats={width <= 1440} article={article}/>
                    </div>)}

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
            <div className={styles.commercial}>
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
        </div>
    );
};

SixthSection.propTypes = {
    articles: PropTypes.array,
    featured: PropTypes.array,
    category: PropTypes.object
};

SixthSection.defaultProps = {
    articles: [],
    featured: []
};

export default SixthSection;
