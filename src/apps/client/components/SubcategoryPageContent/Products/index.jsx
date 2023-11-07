import React from 'react';
import styles from './index.module.scss';
import Image from 'next/image';
import Lazy from '../../Lazy';

const Products = () => {
    return (
        <div className={styles.root}>
            <div className={styles.titleWrapper}>
                <p className={styles.title}>
            优惠商品 icon
                    <span>本周最大折扣商品 50% 健康食品 手袋厂 25%. 本周最大折扣商品 50% 健康食品 手袋厂 25% 皮鞋 ….</span>
                    <span className={styles.line}/>
                    <span className={styles.line}/>
                    <span className={styles.line}/>
                </p>
            </div>
            <div className={styles.productList}>
                {Array(16).fill(null).map((_, index) =>
                    <div className={styles.product} key={index}>
                        <div className={styles.productImage}>
                            <Lazy>
                                <Image src='/images/mock-watch-ad.png' layout='fill' objectFit='contain'/>
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
