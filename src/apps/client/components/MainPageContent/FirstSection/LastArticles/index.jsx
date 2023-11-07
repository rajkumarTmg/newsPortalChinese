import React from 'react';
import styles from './index.module.scss';
import { useIntl } from 'react-intl';
import Image from 'next/image';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { useSelector } from 'react-redux';
import formatDateRelative from '../../../../utils/formatDateRelative';
import Lazy from '../../../Lazy';

const LastArticles = ({ theme, articles, votes }) => {
    const intl = useIntl();
    const router = useRouter();
    const authors = useSelector(({ data }) => data.authors);
    const categories = useSelector(({ data }) => data.categories);

    return (
        <div className={classNames(styles.root, {
            [styles[theme]]: theme,
            [styles.noVotes]: theme === 'hotNews' && votes !== null && !votes?.length
        })}>
            <div className={styles.titleWrapper}>
                <div className={styles.containerLeft}>
                    <span className={styles.wholeLine}/>
                    <span className={styles.wholeLine}/>
                    <span className={styles.wholeLine}/>
                    <span className={styles.wholeLine}/>
                </div>
                <h4 className={styles.title}>
                    {intl.formatMessage({ id: 'mainPage.lastArticlesTitle' })}
                </h4>
                <div className={styles.containerRight}>
                    <span className={styles.wholeLine}/>
                    <span className={styles.wholeLine}/>
                    <span className={styles.wholeLine}/>
                    <span className={styles.wholeLine}/>
                </div>
            </div>
            <div className={styles.articlesList}>
                {articles.slice(0, 5).map((article) => {
                    const author = authors.find((author) => author._id === article.data[router.locale]?.author);
                    const category = article && categories.find((category) => category._id === article.data[router.locale]?.category);
                    const subcategory = article &&
                        article.data[router.locale]?.subcategory &&
                        category?.subcategories?.find((subcategory) => subcategory._id === article.data[router.locale]?.subcategory);
                    return (
                        <div key={article._id.toString()} className={styles.articleItem}>
                            <p className={styles.category}>
                                <Link href={`/categories/${category?.data[router.locale]?.alias}`}>
                                    <a className={styles.link}>{category?.data[router.locale]?.name}</a>
                                </Link>
                                {subcategory &&
                                    <span>
                                        <span className={styles.divider}>{' | '}</span>
                                        <Link href={`/categories/${category?.data[router.locale]?.alias}/${subcategory?.data[router.locale]?.alias}`}>
                                            <a className={styles.articleSubcategory}>{subcategory?.data[router.locale]?.name}</a>
                                        </Link>
                                    </span>
                                }</p>
                            <div>
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
                                <div className={styles.stats}>
                                    <span>{article.views?.toLocaleString() || 0} {intl.formatMessage({ id: 'common.views' })}</span>
                                    <span>{article.shares?.toLocaleString() || 0} {intl.formatMessage({ id: 'common.share' })}</span>
                                </div>
                            </div>
                            <div>
                                <div className={styles.articleType}>
                                    <span>&gt;</span>
                                    <Link href={`/categories/${category?.data[router.locale]?.alias}`}>
                                        <a className={styles.link}>{category?.data[router.locale]?.name}</a>
                                    </Link>
                                </div>
                                <Link href={`/${article?.data[router.locale]?.alias}`}>
                                    <a className={styles.articleTitle}>{article.data[router.locale]?.title}</a>
                                </Link>
                                <div className={styles.metaInfoWrapper}>
                                    <span className={styles.metaInfo}>{author && author?.data[router.locale]?.name}</span>
                                    <span className={styles.metaInfo}>{formatDateRelative(article.data[router.locale]?.date, router.locale)}</span>
                                    <div className={styles.commentsStat}>
                                        <div>
                                            <Image src='/images/share.png' width={26} height={26}/>
                                            <p>{article.shares?.toLocaleString() || 0}</p>
                                        </div>
                                        <div>
                                            <Image src='/images/comment.png' width={22} height={22}/>
                                            <p>{article.comments.count}</p>
                                        </div>
                                    </div>
                                </div>
                                <div dangerouslySetInnerHTML={{ __html: article.data[router.locale]?.shortDescription }}
                                    className={styles.articleDescription}
                                ></div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

LastArticles.propTypes = {
    theme: PropTypes.string,
    articles: PropTypes.array,
    votes: PropTypes.array
};

export default LastArticles;
