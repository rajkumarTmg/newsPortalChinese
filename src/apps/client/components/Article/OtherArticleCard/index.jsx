import React from 'react';
import styles from './index.module.scss';
import { useRouter } from 'next/router';
import Link from 'next/link';
import PropTypes from 'prop-types';
import formatDate from '../../../utils/formatDate';
import Lazy from '../../Lazy';

const OtherArticleCard = ({ article, authors, categories }) => {
    const router = useRouter();
    const author = authors.find((author) => author._id === article.data[router.locale]?.author);
    const category = article && categories.find((category) => category._id === article.data[router.locale]?.category);
    const subcategory = article &&
        // eslint-disable-next-line max-len
        article.data[router.locale]?.subcategory && category?.subcategories?.find((subcategory) => subcategory._id === article.data[router.locale]?.subcategory);
    return (
        <div className={styles.article}>
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
                <p className={styles.category}>
                    {
                        category &&
                        <Link href={`/categories/${category?.data[router.locale]?.alias}`}>
                            <a className={styles.link}>{category?.data[router.locale]?.name}</a>
                        </Link>
                    }
                    {
                        subcategory && <span className={styles.divider}>｜</span>
                    }
                    {subcategory &&
                        <span className={styles.source}>
                            <Link href={`/categories/${category?.data[router.locale]?.alias}/${subcategory?.data[router.locale]?.alias}`}>
                                <a className={styles.link}>{subcategory?.data[router.locale]?.name}</a>
                            </Link>
                        </span>
                    }
                </p>
                <Link href={`/${article?.data[router.locale]?.alias}`}>
                    <a className={styles.articleTitle}>
                        {article.data[router.locale]?.title}
                    </a>
                </Link>
                <p className={styles.articleMetaInfo}>
                    {author && author?.data[router.locale]?.name}
                    <span>{formatDate(article.data[router.locale]?.date, router.locale)}</span>
                </p>
                {/* eslint-disable-next-line max-len */}
                <div dangerouslySetInnerHTML={{ __html: article.data[router.locale]?.shortDescription }} className={styles.articleDesc}></div>
            </div>
        </div>
    );
};

OtherArticleCard.propTypes = {
    article: PropTypes.object,
    authors: PropTypes.array,
    categories: PropTypes.array
};

export default OtherArticleCard;
