import React from 'react';
import PropTypes from 'prop-types';
import styles from './index.module.scss';
import MultimediaPageItem from '../../MultimediaPageItem';
import { useRouter } from 'next/router';

const ColumnConcern = ({ posts, subcategory }) => {
    const router = useRouter();

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
                    {subcategory?.data[router.locale]?.name}
                </h6>
                <div className={styles.containerRight}>
                    <span className={styles.wholeLine}/>
                    <span className={styles.wholeLine}/>
                    <span className={styles.wholeLine}/>
                    <span className={styles.wholeLine}/>
                </div>
            </div>
            <div className={styles.listWrapper}>
                <div className={styles.list}>
                    {posts.map((post) => (
                        <div className={styles.itemWrapper} key={post?._id}>
                            <MultimediaPageItem
                                post={post}
                                type={post.type}
                                theme='columnConcern' />
                        </div>
                    ))}
                </div>
                {/*
                <Link href={`/categories/${category?.data[router.locale]?.alias}/${subcategory?.data[router.locale]?.alias}`}>
                    <button className={styles.moreBtn}>{intl.formatMessage({ id: 'common.more' })}
                        <span/>
                        <span/>
                        <span/>
                        <span/>
                    </button>
                </Link>
                 */}
                {/* <div className={styles.ad}>AD</div> */}
            </div>
        </div>
    );
};

ColumnConcern.propTypes = {
    posts: PropTypes.array,
    subcategory: PropTypes.object
};

export default ColumnConcern;
