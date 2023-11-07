import React from 'react';
import styles from './index.module.scss';
import { useRouter } from 'next/router';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import Link from 'next/link';
import { useIntl } from 'react-intl';

const Sidebar = ({ category, otherArticles }) => {
    const router = useRouter();
    const intl = useIntl();
    const categories = useSelector(({ data }) => data.categories);

    return (
        <div className={styles.sidebar}>
            <div className={styles.titlesWrapper}>
                <p className={styles.title}>
                    {category?.data[router.locale]?.name}
                    <span/>
                </p>
                <p className={styles.title}>{intl.formatMessage({ id: 'common.latestHeadlines' })}</p>
                <span className={styles.line}/>
                <span className={styles.line}/>
                <span className={styles.line}/>
                <span className={styles.line}/>
            </div>
            <div className={styles.list}>
                {otherArticles.map((item) => {
                    const category = categories.find((category) => category._id === item.data[router.locale]?.category);
                    const subcategory = item.data[router.locale]?.subcategory &&
                            category?.subcategories?.find((subcategory) => subcategory._id === item.data[router.locale]?.subcategory);
                    return category && (<div className={styles.item} key={item?._id}>
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
                    </div>);
                }
                )}
            </div>
        </div>
    );
};

Sidebar.propTypes = {
    category: PropTypes.object,
    otherArticles: PropTypes.array
};

export default Sidebar;
