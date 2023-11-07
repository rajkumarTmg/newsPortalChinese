import React from 'react';
import styles from './index.module.scss';
import Image from 'next/image';
import Lazy from '../../Lazy';
import { FormattedMessage } from 'react-intl';

const Offers = () => {
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
                    <FormattedMessage id='common.magazine'/>
                </h6>
                <div className={styles.containerRight}>
                    <span className={styles.wholeLine}/>
                    <span className={styles.wholeLine}/>
                    <span className={styles.wholeLine}/>
                    <span className={styles.wholeLine}/>
                </div>
            </div>
            <div className={styles.offersList}>
                {Array(4).fill(null).map((_, index) =>
                    <div className={styles.offerItem} key={index}>
                        <div className={styles.offerImage}>
                            <Lazy>
                                <Image src='/images/article-mock.png' layout='fill' objectFit='cover'/>
                            </Lazy>
                        </div>
                        <p className={styles.price}>
                            Magazine $25
                        </p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Offers;
