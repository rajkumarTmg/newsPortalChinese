import React, { useMemo } from 'react';
import Link from 'next/link';
import { useIntl } from 'react-intl';
import styles from './index.module.scss';
import ArrowSVG from '../../../../../../../public/images/svg/commercial-arrow.svg';
import { useWindowSize } from '../../../../utils/useWindowSize';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import formatDate from '../../../../utils/formatDate';
import Lazy from '../../../Lazy';

const Culture = ({ articles, featured, category }) => {
    const { width } = useWindowSize();
    const intl = useIntl();
    const isMobile = useMemo(() => width <= 768, [width]);

    const categories = useSelector(({ data }) => data.categories);
    const authors = useSelector(({ data }) => data.authors);
    const router = useRouter();

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
            {isMobile
                ? articles.slice(0, 1).map((article) => {
                    const category = article && categories.find((category) => category._id === article.data[router.locale]?.category);

                    return <div key={article._id.toString()}>
                        <div className={styles.listItem} >
                            <Link href={`/categories/${category?.data[router.locale]?.alias}`}>
                                <a className={styles.category}>{'> '} {category?.data[router.locale]?.name}</a>
                            </Link>
                            <Link href={`/${article?.data[router.locale]?.alias}`}>
                                <a className={styles.itemImage}>
                                    <Lazy>
                                        <picture>
                                            <source srcSet={article.data[router.locale]?.avatar[0].pathWebp} type='image/webp' />
                                            <img src={article.data[router.locale]?.avatar[0].path} alt={article.data[router.locale]?.title} />
                                        </picture>
                                    </Lazy>
                                </a>
                            </Link>
                            <p className={styles.itemDesc}>{article.data[router.locale]?.title}</p>
                        </div>
                    </div>;
                })
                : <div className={styles.list}>
                    {articles.slice(0, 6).map((article) => {
                        const category = article && categories.find((category) => category._id === article.data[router.locale]?.category);
                        const author = authors.find((author) => author._id === article.data[router.locale]?.author);

                        return <div key={article._id.toString()}>
                            <div className={styles.listItem}>
                                <Link href={`/categories/${category?.data[router.locale]?.alias}`}>
                                    <a className={styles.category}>{'> '} {category?.data[router.locale]?.name}</a>
                                </Link>
                                <Link href={`/${article?.data[router.locale]?.alias}`}>
                                    <a className={styles.itemImage}>
                                        <Lazy>
                                            <picture>
                                                <source srcSet={article.data[router.locale]?.avatar[0].pathWebp} type='image/webp' />
                                                <img src={article.data[router.locale]?.avatar[0].path} alt={article.data[router.locale]?.title} />
                                            </picture>
                                        </Lazy>
                                    </a>
                                </Link>
                                <div className={styles.info}>
                                    <p className={styles.itemDesc}>{article.data[router.locale]?.title}</p>
                                    <p className={styles.metaInfo}>{author && author?.data[router.locale]?.name}
                                        {formatDate(article.data[router.locale]?.date, router.locale)}
                                    </p>
                                </div>
                            </div>
                        </div>;
                    }
                    )}
                </div>}
            <Link href={`categories/${category?.data[router.locale]?.alias}`}>
                <a className={styles.btn}>
                    <span>
                        {intl.formatMessage({ id: 'common.more' })}
                    </span>
                    <div className={styles.btnIcon}>
                        <ArrowSVG/>
                    </div>
                </a>
            </Link>
        </div>
    );
};

Culture.propTypes = {
    articles: PropTypes.array,
    featured: PropTypes.array,
    category: PropTypes.object
};

Culture.defaultProps = {
    articles: [],
    featured: []
};

export default Culture;
