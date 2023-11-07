import React from 'react';
import styles from './index.module.scss';
import Image from 'next/image';
import Link from 'next/link';
import { useIntl } from 'react-intl';
import Lazy from '../../Lazy';

const StoreList = () => {
    const intl = useIntl();
    return (
        <div className={styles.root}>
            <button className={styles.button}>Store Listing</button>
            <div className={styles.list}>
                {Array(2).fill(null).map((_, index) =>
                    <Link key={index} href='#'>
                        <a className={styles.item} >
                            <div className={styles.image}>
                                <Lazy>
                                    <Image layout='fill' src='/images/hot-news-mock.png' objectFit='cover'/>
                                </Lazy>
                            </div>
                            <div className={styles.statistic}>
                                <div className={styles.statisticItem}>
                                    <div className={styles.icon}>&#10084;</div>
                                    <p>609</p>
                                </div>
                                <div className={styles.statisticItem}>
                                    <div className={styles.icon}>&#10084;</div>
                                    <p>120</p>
                                </div>
                                <span className={styles.share}>{intl.formatMessage({ id: 'common.share' })}</span>
                            </div>
                        </a>
                    </Link>)}
            </div>
        </div>
    );
};

export default StoreList;
