import React from 'react';
import styles from './index.module.scss';
import { useIntl } from 'react-intl';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { useRouter } from 'next/router';
import Link from 'next/link';
import formatDate from '../../utils/formatDate';
import { useSelector } from 'react-redux';
import Lazy from '../Lazy';

const SmallArticleCard = ({ withStats, theme, article, small }) => {
    const categories = useSelector(({ data }) => data.categories);
    const router = useRouter();
    const category = article && categories.find((category) => category._id === article.data[router.locale]?.category);
    const subcategory = article &&
        article.data[router.locale]?.subcategory &&
        category?.subcategories?.find((subcategory) => subcategory._id === article.data[router.locale]?.subcategory);
    const authors = useSelector(({ data }) => data.authors);
    const author = article && authors.find((author) => author._id === article.data[router.locale]?.author);
    const rootClassNames = classnames(styles.root, {
        [styles[theme]]: theme
    });
    const intl = useIntl();
    return (
        article
            ? <div className={rootClassNames}>
                <span className={styles.category}>{(theme === 'categoryPage' || theme === 'subCategoryPage')
                    ? <>
                        <Link href={`/categories/${category?.data[router.locale]?.alias}`}>
                            <a className={styles.category}>{category?.data[router.locale]?.name}</a>
                        </Link>
                        {subcategory && <span className={styles.divider}>{' | '}</span>}
                        {subcategory &&
                        <span className={styles.subCategory}>
                            <Link href={`/categories/${category?.data[router.locale]?.alias}/${subcategory?.data[router.locale]?.alias}`}>
                                <a className={styles.source}>{subcategory?.data[router.locale]?.name}</a>
                            </Link>
                        </span>
                        }
                    </>
                    : <Link href={`/categories/${category?.data[router.locale]?.alias}`}>
                        <a className={styles.category}>{'> '} {category?.data[router.locale]?.name}</a>
                    </Link>}
                </span>
                <Link href={`/${article?.data[router.locale]?.alias}`}>
                    <a className={classnames(styles.smallArticleImage, {
                        [styles.small]: small
                    })}>
                        <Lazy>
                            <picture>
                                <source srcSet={article.data[router.locale]?.avatar[0].pathWebp} type='image/webp' />
                                <img src={article.data[router.locale]?.avatar[0].path} alt={article.data[router.locale]?.title} />
                            </picture>
                        </Lazy>
                    </a>
                </Link>
                <Link href={`/${article?.data[router.locale]?.alias}`}>
                    <a className={styles.title}>
                        {article.data[router.locale]?.title}
                    </a>
                </Link>
                {article.data[router.locale]?.shortDescription &&
                    <div dangerouslySetInnerHTML={{ __html: article.data[router.locale]?.shortDescription }}
                        className={styles.description}
                    ></div>
                }
                {
                    withStats &&
                <div className={styles.stats}>
                    <span>{article.views?.toLocaleString() || 0} {intl.formatMessage({ id: 'common.views' })}</span>
                    <span>{article.shares?.toLocaleString() || 0} {intl.formatMessage({ id: 'common.share' })}</span>
                </div>
                }
                <p className={styles.date}>
                    {author && author?.data[router.locale]?.name} <span>{formatDate(article.data[router.locale]?.date, router.locale)}</span>
                </p>
            </div>
            : <></>
    );
};

SmallArticleCard.defaultProps = {
    title: '武汉病毒疫苗管用吗武汉病毒疫苗管用吗?'
};

SmallArticleCard.propTypes = {
    withStats: PropTypes.bool,
    theme: PropTypes.string,
    article: PropTypes.object,
    small: PropTypes.bool
};

export default SmallArticleCard;
