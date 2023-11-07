import React from 'react';
import styles from './index.module.scss';
import MultimediaPageItem from '../../MultimediaPageItem';
import Categories from '../Categories';
import Join from '../Join';
import classNames from 'classnames';
import Link from 'next/link';
import PropTypes from 'prop-types';
import { useRouter } from 'next/router';
import Lazy from '../../Lazy';
// IMAGES
import HomeIconSVG from '../../../../../../public/images/svg/home.svg';
import { FormattedMessage } from 'react-intl';

const Introduction = ({ categories, category, posts, commercialItem, noAd }) => {
    const router = useRouter();

    return (
        <div className={styles.root}>
            <Categories categories={categories} category={category}/>
            <div className={styles.titleWrapper}>
                <div className={styles.containerLeft}>
                    <span className={styles.wholeLine}/>
                    <span className={styles.wholeLine}/>
                    <span className={styles.wholeLine}/>
                    <span className={styles.wholeLine}/>
                </div>
                <h6 className={styles.title}>
                    {category?.data[router.locale]?.name}
                </h6>
                <div className={styles.containerRight}>
                    <span className={styles.wholeLine}/>
                    <span className={styles.wholeLine}/>
                    <span className={styles.wholeLine}/>
                    <span className={styles.wholeLine}/>
                </div>
            </div>
            <p className={styles.category}>
                <Link href={'/'}><HomeIconSVG className={styles.homeIcon}/></Link>
                <Link href={`/multimedia/${category?.data[router.locale]?.alias}`}>
                    <a className={styles.link}>{category?.data[router.locale]?.name}</a>
                </Link>
            </p>
            <div className={styles.listWrapper}>
                {
                    (noAd && !posts.length) &&
                    <div className={styles.noContent}>
                        <FormattedMessage id='nocontent.title'/>
                    </div>
                }
                {
                    !!posts.length &&
                    <div className={styles.list}>
                        {posts.map((post) => (
                            <div className={classNames(styles.itemWrapper, {
                                [styles.imageWrapper]: post.type === 'image'
                            })} key={post?._id}>
                                <MultimediaPageItem post={post} type={post.type} theme='multimediaPage' />
                            </div>
                        ))}
                    </div>
                }
                <Join theme='mediaPage'/>
            </div>
            {
                !noAd &&
                <div className={styles.ad}>
                    {
                        commercialItem
                            ? <a className={styles.commercialLink} href={commercialItem.link} target='_blank' rel="noreferrer">
                                <Lazy>
                                    <picture>
                                        <source media="(max-width:526px)" srcSet={commercialItem.photos[0].pathWebp} type='image/webp' />
                                        <source srcSet={commercialItem.photosHorizontal[0].pathWebp} type='image/webp' />
                                        <img src={commercialItem.photosHorizontal[0].path} alt={commercialItem.name || 'commercial'} />
                                    </picture>
                                </Lazy>
                            </a>
                            : <div className={styles.placeholder}>{'AD'}</div>
                    }
                    {/* horizontal */}
                    <div className={styles.googleAd}>
                        <amp-ad width="100vw" height="320"
                            type="adsense"
                            data-ad-client="ca-pub-5094837188797246"
                            data-ad-slot="4141301580"
                            data-auto-format="rspv"
                            data-full-width="">
                            <div overflow=""></div>
                        </amp-ad>
                    </div>
                </div>
            }
        </div>
    );
};

Introduction.propTypes = {
    commercialItem: PropTypes.object,
    category: PropTypes.object,
    categories: PropTypes.array,
    posts: PropTypes.array,
    noAd: PropTypes.bool
};

export default Introduction;
