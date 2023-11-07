import React from 'react';
import styles from './index.module.scss';
import SliderArrow from '../../MainPageContent/MultimediaSection/SliderArrow';
import SlickSlider from 'react-slick';
import PropTypes from 'prop-types';
import { useRouter } from 'next/router';
import formatDateRelative from '../../../utils/formatDateRelative';
import Lazy from '../../Lazy';
import { FormattedMessage } from 'react-intl';
import Link from 'next/link';

const AudioVideoHotspot = ({ posts }) => {
    const router = useRouter();

    const settings = {
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <SliderArrow direction='right' theme='multimediaPage' />,
        prevArrow: <SliderArrow direction='left' theme='multimediaPage' />,
        lazyLoad: true
    };

    return (
        <div className={styles.root}>
            <div className={styles.titleWrapper}>
                <div className={styles.containerLeft}>
                    <span className={styles.wholeLine}/>
                    <span className={styles.wholeLine}/>
                    <span className={styles.wholeLine}/>
                    <span className={styles.wholeLine}/>
                </div>
                <h6 className={styles.mainTitle}>
                    <FormattedMessage id='multimedia.hotPictures'/>
                </h6>
                <div className={styles.containerRight}>
                    <span className={styles.wholeLine}/>
                    <span className={styles.wholeLine}/>
                    <span className={styles.wholeLine}/>
                    <span className={styles.wholeLine}/>
                </div>
            </div>
            <div className={styles.sliderWrapper}>
                <SlickSlider
                    {...settings}
                >
                    {posts.map((slide, index) =>
                        <div className={styles.block} key={index}>
                            <div className={styles.top}>
                                {slide.slice(0, 4).map((post) =>
                                    <Link href={`/posts/${post?.data[router.locale]?.alias}`} key={post?._id} >
                                        <a className={styles.image}>
                                            <Lazy>
                                                <picture>
                                                    <source srcSet={post.data[router.locale]?.avatar[0].pathWebp} type='image/webp' />
                                                    <img src={post.data[router.locale]?.avatar[0].path} alt={post.data[router.locale]?.title} />
                                                </picture>
                                            </Lazy>
                                            <div className={styles.info}>
                                                <p className={styles.title}>{post.data[router.locale]?.title}</p>
                                                <p className={styles.stat}>
                                                    <span>{post.views?.toLocaleString() || 0} <FormattedMessage id='common.views'/></span>
                                                    <span className={styles.divider}> | </span>
                                                    <span>{formatDateRelative(post.data[router.locale]?.date, router.locale)}</span></p>
                                            </div>
                                        </a>
                                    </Link>
                                )}
                            </div>
                            <div className={styles.bottom}>
                                {slide.slice(4).map((post) =>
                                    <Link href={`/posts/${post?.data[router.locale]?.alias}`} key={post?._id} >
                                        <a className={styles.image}>
                                            <Lazy>
                                                <picture>
                                                    <source srcSet={post.data[router.locale]?.avatar[0].pathWebp} type='image/webp' />
                                                    <img src={post.data[router.locale]?.avatar[0].path} alt={post.data[router.locale]?.title} />
                                                </picture>
                                            </Lazy>
                                            <div className={styles.info}>
                                                <p className={styles.title}>{post.data[router.locale]?.title}</p>
                                                <p className={styles.stat}>
                                                    <span>{post.views?.toLocaleString() || 0} <FormattedMessage id='common.views'/></span>
                                                    <span className={styles.divider}> | </span>
                                                    <span>{formatDateRelative(post.data[router.locale]?.date, router.locale)}</span></p>
                                            </div>
                                        </a>
                                    </Link>
                                )}
                            </div>
                        </div>
                    )}
                </SlickSlider>
            </div>
        </div>
    );
};

AudioVideoHotspot.propTypes = {
    posts: PropTypes.array
};

export default AudioVideoHotspot;
