import React from 'react';
import styles from './index.module.scss';
import { useIntl } from 'react-intl';
import Link from 'next/link';
import PropTypes from 'prop-types';
import classNames from 'classnames';
// import { useWindowSize } from '../../../utils/useWindowSize';
import { useRouter } from 'next/router';
import formatDate from '../../../utils/formatDate';
import Lazy from '../../Lazy';

const MoreArticles = ({
    withLargeCommercial, theme, categories, articles, authors, title, moreLink, commercialItem, lastChild, horizontalOnMobile, mobileGoogleAd
}) => {
    // const { width } = useWindowSize();
    // const isMobile = width <= 525;
    const intl = useIntl();
    const router = useRouter();

    return (
        <div className={classNames(styles.root, {
            [styles[theme]]: theme,
            [styles.last]: lastChild
        })}>
            <div className={styles.titleWrapper}>
                <div className={styles.containerLeft}>
                    <span className={styles.wholeLine}/>
                    <span className={styles.wholeLine}/>
                    <span className={styles.wholeLine}/>
                    <span className={styles.wholeLine}/>
                </div>
                <h6 className={styles.title}>
                    <Link href={moreLink}>
                        <a className={styles.link}>
                            {title || intl.formatMessage({ id: 'common.moreArticles' })}
                        </a>
                    </Link>
                </h6>
                <div className={styles.containerRight}>
                    <span className={styles.wholeLine}/>
                    <span className={styles.wholeLine}/>
                    <span className={styles.wholeLine}/>
                    <span className={styles.wholeLine}/>
                </div>
            </div>
            <div className={styles.firstSection}>
                {articles.map((article) => {
                    const category = article && categories.find((category) => category._id === article.data[router.locale]?.category);
                    const subcategory = article &&
                            article.data[router.locale]?.subcategory &&
                            category?.subcategories?.find((subcategory) => subcategory._id === article.data[router.locale]?.subcategory);
                    const author = article && authors.find((author) => author._id === article.data[router.locale]?.author);
                    return <div className={styles.article} key={article?._id}>
                        <Link href={`/${article?.data[router.locale]?.alias}`}>
                            <a className={styles.articleImage}>
                                <Lazy>
                                    <picture>
                                        <source srcSet={article.data[router.locale]?.avatar[0].pathWebp} type='image/webp' />
                                        <img src={article.data[router.locale]?.avatar[0].path} alt={article.data[router.locale]?.title} />
                                    </picture>
                                </Lazy>
                            </a>
                        </Link>
                        <div>
                            <div className={styles.categoryWrapper}>
                                <Link href={`/categories/${category?.data[router.locale]?.alias}`}>
                                    <a className={styles.category}>{category?.data[router.locale]?.name}</a>
                                </Link>
                                {subcategory &&
                                    <span>
                                        <span className={styles.divider}>{' | '}</span>
                                        <Link href={`/categories/${category?.data[router.locale]?.alias}/${subcategory?.data[router.locale]?.alias}`}>
                                            <a className={styles.source}>{subcategory?.data[router.locale]?.name}</a>
                                        </Link>
                                    </span>
                                }
                            </div>
                            <Link href={`/${article?.data[router.locale]?.alias}`}>
                                <a className={styles.articleTitle}>
                                    {article.data[router.locale]?.title}
                                </a>
                            </Link>
                            <p className={styles.articleMetaInfo}>
                                {author && author?.data[router.locale]?.name}
                                <span>{formatDate(article.data[router.locale]?.date, router.locale)}</span>
                            </p>
                            <div dangerouslySetInnerHTML={{ __html: article.data[router.locale]?.shortDescription }} className={styles.articleDesc }></div>
                        </div>
                    </div>;
                }
                )}
            </div>
            <Link href={moreLink}>
                <button className={styles.moreBtn}>{intl.formatMessage({ id: 'common.more' })}
                    <span/>
                    <span/>
                    <span/>
                    <span/>
                </button>
            </Link>
            {withLargeCommercial && <div className={styles.adSpace}>
                {
                    commercialItem
                        ? <a className={classNames(styles.commercialLink, {
                            [styles.mobileHidden]: mobileGoogleAd
                        })} href={commercialItem.link} target='_blank' rel="noreferrer">
                            <Lazy>
                                <picture>
                                    <source media="(max-width:526px)" srcSet={horizontalOnMobile
                                        ? commercialItem.photosHorizontal[0].path
                                        : commercialItem.photos[0].path}
                                    type='image/webp'
                                    />
                                    <source srcSet={commercialItem.photosHorizontal[0].pathWebp} type='image/webp' />
                                    <img src={commercialItem.photosHorizontal[0].path} alt={commercialItem.name || 'commercial'} />
                                </picture>
                            </Lazy>
                        </a>
                        : <div className={classNames(styles.placeholder, {
                            [styles.mobileHidden]: mobileGoogleAd
                        })}>{'AD'}</div>
                }
                {/* square */}
                {
                    mobileGoogleAd &&
                    <div className={styles.googleAd}>
                        <amp-ad width="100vw" height="320"
                            type="adsense"
                            data-ad-client="ca-pub-5094837188797246"
                            data-ad-slot="5047189141"
                            data-auto-format="rspv"
                            data-full-width="">
                            <div overflow=""></div>
                        </amp-ad>
                    </div>
                }
            </div>}
        </div>
    );
};

MoreArticles.propTypes = {
    withLargeCommercial: PropTypes.bool,
    theme: PropTypes.string,
    categories: PropTypes.array,
    authors: PropTypes.array,
    articles: PropTypes.array,
    commercialItem: PropTypes.object,
    title: PropTypes.string,
    moreLink: PropTypes.string,
    lastChild: PropTypes.bool,
    horizontalOnMobile: PropTypes.bool,
    mobileGoogleAd: PropTypes.bool
};

MoreArticles.defaultProps = {
    moreLink: '#',
    horizontalOnMobile: false,
    mobileGoogleAd: false
};

export default MoreArticles;
