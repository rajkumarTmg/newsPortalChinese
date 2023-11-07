import React from 'react';
import styles from './index.module.scss';
import Link from 'next/link';
import PropTypes from 'prop-types';
import { useRouter } from 'next/router';
import Lazy from '../../Lazy';
// UTILS
import formatDateRelative from '../../../utils/formatDateRelative';
// IMAGES
import ViewIconSVG from '../../../../../../public/images/svg/viewIcon.svg';
import ShareIconSVG from '../../../../../../public/images/svg/shareIcon.svg';
import { useIntl } from 'react-intl';

const ColumnConcern = ({ articles, categories, commercialItem }) => {
    const router = useRouter();
    const intl = useIntl();

    return (
        <div className={styles.root}>
            <div className={styles.titleWrapper}>
                <div className={styles.containerLeft}>
                    <span className={styles.wholeLine}/>
                    <span className={styles.wholeLine}/>
                    <span className={styles.wholeLine}/>
                    <span className={styles.wholeLine}/>
                </div>
                <h6 className={styles.title}>
                    {intl.formatMessage({ id: 'common.column' })}
                </h6>
                <div className={styles.containerRight}>
                    <span className={styles.wholeLine}/>
                    <span className={styles.wholeLine}/>
                    <span className={styles.wholeLine}/>
                    <span className={styles.wholeLine}/>
                </div>
            </div>
            <div className={styles.articles}>
                {articles.map((article) => {
                    const category = article && categories.find((category) => category._id === article.data[router.locale]?.category);
                    const subcategory = article &&
                        article.data[router.locale]?.subcategory &&
                        category?.subcategories?.find((subcategory) => subcategory._id === article.data[router.locale]?.subcategory);

                    return (
                        <div className={styles.article} key={article?._id}>
                            <Link href={`/${article?.data[router.locale]?.alias}`}>
                                <a className={styles.articleImage}>
                                    <Lazy>
                                        <picture>
                                            {/* eslint-disable-next-line max-len */}
                                            <source srcSet={article.data[router.locale]?.avatar[0]?.pathWebp} type='image/webp' />
                                            {/* eslint-disable-next-line max-len */}
                                            <img src={article.data[router.locale]?.avatar[0]?.path} alt={article.data[router.locale]?.title} />
                                        </picture>
                                    </Lazy>
                                </a>
                            </Link>
                            <p className={styles.articleCategory}>
                                <Link href={`/categories/${category?.data[router.locale]?.alias}`}>
                                    <a className={styles.link}>{category?.data[router.locale]?.name}</a>
                                </Link>
                                {
                                    subcategory &&
                                    <span className={styles.divider}>{' | '}</span>
                                }
                                {subcategory &&
                                    <span>
                                        <Link href={`/categories/${category?.data[router.locale]?.alias}/${subcategory?.data[router.locale]?.alias}`}>
                                            <a className={styles.articleSubcategory}>{subcategory?.data[router.locale]?.name}</a>
                                        </Link>
                                    </span>
                                }
                            </p>
                            <Link href={`/${article?.data[router.locale]?.alias}`}>
                                <a className={styles.articleDesc}>
                                    {article.data[router.locale]?.title}
                                </a>
                            </Link>
                            <div className={styles.statistic}>
                                <div className={styles.statisticItem}>
                                    <div className={styles.icon}><ViewIconSVG width={20} height={16}/></div>
                                    <p>{article.views?.toLocaleString() || 0}</p>
                                </div>
                                <div className={styles.statisticItem}>
                                    <div className={styles.icon}><ShareIconSVG width={15} height={16}/></div>
                                    <p>{article.shares?.toLocaleString() || 0}</p>
                                </div>
                                <div className={styles.statisticItem}>
                                    <p>{formatDateRelative(article.data[router.locale]?.date, router.locale)}</p>
                                </div>
                            </div>
                        </div>
                    );
                })}
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

ColumnConcern.propTypes = {
    articles: PropTypes.array,
    categories: PropTypes.array,
    commercialItem: PropTypes.object
};

export default ColumnConcern;
