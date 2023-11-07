import React from 'react';
import Image from 'next/image';
import styles from './index.module.scss';
import Lazy from '../../Lazy';

const BestDeals = () => {
    return (
        <div className={styles.root}>
            <p className={styles.title}>Best deals
                <span/>
                <span/>
                <span/>
            </p>
            <div className={styles.list}>
                <div className={styles.item}>
                    <div className={styles.image}>
                        <Lazy>
                            <Image src='/images/mock-watch-ad.png' layout='fill'/>
                        </Lazy>
                    </div>
                    <div className={styles.info}>
                        <p className={styles.name}>Swiss Watch</p>
                        <p className={styles.desc}>Great Swiss watch on sales today here one Per customer 10% off</p>
                        <p className={styles.price}>$1,225.00</p>
                    </div>
                </div>
                <div className={styles.item}>
                    <div className={styles.image}>
                        <div className={styles.icon}>icon</div>
                        <Lazy>
                            <Image src='/images/mock-watch-ad.png' layout='fill'/>
                        </Lazy>
                    </div>
                    <div className={styles.info}>
                        <p className={styles.name}>Swiss Watch</p>
                        <p className={styles.desc}>Great Swiss watch on sales today here one Per customer 10% off</p>
                        <p className={styles.price}>$1,225.00</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BestDeals;
