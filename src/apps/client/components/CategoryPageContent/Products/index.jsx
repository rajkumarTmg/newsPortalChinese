import React from 'react';
import styles from './index.module.scss';
import Image from 'next/image';
import Lazy from '../../Lazy';

const Products = () => {
    return (
        <div className={styles.root}>
            <div className={styles.productList}>
                {Array(16).fill(null).map((_, index) =>
                    <div className={styles.product} key={index}>
                        <div className={styles.productImage}>
                            <Lazy>
                                <Image src='/images/mock-watch-ad.png' layout='fill'/>
                            </Lazy>
                        </div>
                        <div className={styles.productInfo}>
                            <p className={styles.productTitle}>Swiss watch</p>
                            <p className={styles.productDesc}>Great Swiss watch on sales today here one Per customer 10% off</p>
                            <p className={styles.productPrice}>$1,225.00</p>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Products;
