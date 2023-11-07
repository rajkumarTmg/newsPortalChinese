import React from 'react';
import styles from './index.module.scss';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { FormattedMessage } from 'react-intl';

const Latest = ({ article, otherArticles }) => {
    const router = useRouter();
    const categories = useSelector(({ data }) => data.categories);
    const category = categories.find((category) => category._id === article.data[router.locale]?.category);
    const subcategories = category?.subcategories;

    return (
        <div className={styles.root}>
            <div className={styles.titleWrapper}>
                <div className={styles.containerLeft}>
                    <span className={styles.wholeLine}/>
                    <span className={styles.wholeLine}/>
                    <span className={styles.wholeLine}/>
                    <span className={styles.wholeLine}/>
                </div>
                <h4 className={styles.title}>
                    <FormattedMessage id='common.latest'/>
                </h4>
                <div className={styles.containerRight}>
                    <span className={styles.wholeLine}/>
                    <span className={styles.wholeLine}/>
                    <span className={styles.wholeLine}/>
                    <span className={styles.wholeLine}/>
                </div>
            </div>
            <div className={styles.list}>
                {otherArticles.map((item) => {
                    const subcategory = subcategories?.find((subcategory) => subcategory._id === article.data[router.locale]?.subcategory);
                    return <div className={styles.item} key={item?._id}>
                        {
                            subcategory
                                ? <Link href={`/categories/${category?.data[router.locale]?.alias}/${subcategory.data[router.locale]?.alias}`}>
                                    <a className={styles.category}>{subcategory?.data[router.locale]?.name}</a>
                                </Link>
                                : <Link href={`/categories/${category?.data[router.locale]?.alias}`}>
                                    <a className={styles.category}>{category?.data[router.locale]?.name}</a>
                                </Link>
                        }
                        <Link href={`/${item.data[router.locale]?.alias}`}>
                            <a className={styles.headline}><span>{item.data[router.locale]?.title}</span></a>
                        </Link>
                    </div>;
                }
                )}
            </div>

        </div>

    );
};

Latest.propTypes = {
    article: PropTypes.object,
    otherArticles: PropTypes.array
};

export default Latest;
