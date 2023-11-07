import React from 'react';
import styles from './index.module.scss';
import Image from 'next/image';
import PropTypes from 'prop-types';
import Lazy from '../../../Lazy';
import { useIntl } from 'react-intl';

const MoreContent = ({ commercialItem }) => {
    const intl = useIntl();

    return (
        <div className={styles.root}>
            <div className={styles.titleWrapper}>
                <span className={styles.wholeLine} />
                <span className={styles.wholeLine} />
                <span className={styles.wholeLine} />
                <h6 className={styles.title}>
                    {intl.formatMessage({ id: 'common.moreContent' })}
                    <span className={styles.overlap}/>
                    <span className={styles.overlap}/>
                    <span className={styles.overlap}/>
                </h6>
            </div>
            <div className={styles.card}>
                <div className={styles.image}>
                    <Lazy>
                        <Image src='/images/article-mock-image.png' layout='fill'/>
                    </Lazy>
                </div>
                <p className={styles.desc}>武汉病毒疫苗管用吗？武汉病毒疫苗 管用吗 武 汉病毒疫苗管用吗？</p>
            </div>
            <div className={styles.ad}>
                {
                    commercialItem
                        ? <a className={styles.commercialLink} href={commercialItem.link} target='_blank' rel="noreferrer">
                            <Lazy>
                                <picture>
                                    <source srcSet={commercialItem.photos[0].pathWebp} type='image/webp' />
                                    <img src={commercialItem.photos[0].path} alt={commercialItem.name || 'commercial'} />
                                </picture>
                            </Lazy>
                        </a>
                        : <div className={styles.placeholder}>{'AD'}</div>
                }
            </div>
        </div>
    );
};

MoreContent.propTypes = {
    commercialItem: PropTypes.object
};

export default MoreContent;
