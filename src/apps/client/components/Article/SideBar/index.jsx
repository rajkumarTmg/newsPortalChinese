import React, { useEffect, useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import styles from './index.module.scss';
import WeatherWidget from './WeatherWidget';
import Latest from './Latest';
import LeaveComment from './LeaveComment';
import CommentsList from './CommentsList';
import Slider from './Slider';
import PropTypes from 'prop-types';
import Subscription from './Subscription';
import Link from 'next/link';
import getArticleById from '../../../services/server/getArticleById';
import { useRouter } from 'next/router';
import Socials from '../../Socials';
import Lazy from '../../Lazy';
import { useWindowSize } from '../../../utils/useWindowSize';
import classNames from 'classnames';

const MIN_COMMENTS_HEIGHT = 200;

const Sidebar = ({ article, posts, handleShare, commentsRef, bodyRef, introductionRef, otherArticles, articles }) => {
    const [comments, setComments] = useState(article.comments.list);
    const router = useRouter();
    const sidebarCommercials = useSelector(({ commercial }) => commercial.articlePageCommercial.slice(2, 5));
    const { width } = useWindowSize();
    const [mainContentHeight, setMainContentHeight] = useState(bodyRef?.current?.clientHeight + introductionRef?.current?.clientHeight);

    const adBlock1 = useRef();
    const adBlock3 = useRef();
    const adBlock4 = useRef();
    const slider = useRef();

    const sideBar = useRef();
    const commentsListRef = useRef();
    const [height, setHeight] = useState(commentsListRef.current?.style?.maxHeight || 0);

    const cssLoaded = useSelector(({ application }) => application.loaded);
    const [loaded, setLoaded] = useState(cssLoaded);
    const MOBILE_WIDTH = 1024;

    useEffect(() => {
        const timeout = setTimeout(() => {
            setLoaded(cssLoaded);
        }, 1000);

        return () => {
            clearTimeout(timeout);
        };
    }, [cssLoaded]);

    useEffect(() => {
        const mainContentHeight = (bodyRef?.current?.querySelector('.sectionWrapper')?.clientHeight || 0) +
            (bodyRef?.current?.querySelector('.commentButtonWrapper')?.clientHeight || 0) +
            (bodyRef?.current?.querySelector('.subscriptionRoot')?.clientHeight || 0) +
            (bodyRef?.current?.querySelector('.tags')?.clientHeight || 0) +
            (bodyRef?.current?.querySelector('.subcategoryRoot')?.clientHeight || 0) +
            (bodyRef?.current?.querySelector('.commentsWrapperMobile')?.clientHeight || 0) +
            30 // .root padding
        ;

        const height = mainContentHeight + introductionRef?.current?.clientHeight;
        setMainContentHeight(height);
    }, [bodyRef.current, introductionRef.current, article?._id, width, loaded, posts, otherArticles, comments]);

    useEffect(() => {
        let timeout;
        if (width && loaded) {
            setTimeout(() => {
                checkSidebarFit();
            }, 1000);
        }

        return () => {
            clearTimeout(timeout);
        };
        // eslint-disable-next-line max-len
    }, [article, posts, slider, adBlock1, adBlock3, adBlock4, mainContentHeight, loaded, width, sideBar, otherArticles, comments]);

    const checkSidebarFit = () => {
        adBlock4.current?.classList.remove(styles.hidden);
        adBlock3.current?.classList.remove(styles.hidden);
        adBlock1.current?.classList.remove(styles.hidden);
        slider.current?.classList.remove(styles.hidden);

        if (sideBar.current) {
            sideBar.current.parentNode.style.height = 'unset';
        }
        if (commentsListRef.current) {
            commentsListRef.current.style.maxHeight = '0px';
            commentsListRef.current.style.minHeight = '0px';
        }

        if (width > MOBILE_WIDTH) {
            if (mainContentHeight) {
                const adBlock1Height = adBlock1.current?.clientHeight || 0;
                const adBlock3Height = adBlock3.current?.clientHeight || 0;
                const adBlock4Height = adBlock4.current?.clientHeight || 0;
                const sliderHeight = slider.current?.clientHeight || 0;

                let rightBarHeightTotal = (sideBar.current?.clientHeight + 200) || 0;

                if (rightBarHeightTotal > mainContentHeight) {
                    if (adBlock4.current && adBlock4Height) {
                        rightBarHeightTotal = rightBarHeightTotal - adBlock4Height;
                        adBlock4.current.classList.add(styles.hidden);
                    }

                    if (rightBarHeightTotal > mainContentHeight) {
                        if (adBlock3.current && adBlock3Height) {
                            rightBarHeightTotal = rightBarHeightTotal - adBlock3Height;
                            adBlock3.current.classList.add(styles.hidden);
                        }
                    }

                    if (rightBarHeightTotal > mainContentHeight) {
                        if (adBlock1.current && adBlock1Height) {
                            rightBarHeightTotal = rightBarHeightTotal - adBlock1Height;
                            adBlock1.current.classList.add(styles.hidden);
                        }
                    }

                    if (rightBarHeightTotal > mainContentHeight) {
                        if (slider.current && sliderHeight) {
                            rightBarHeightTotal = rightBarHeightTotal - sliderHeight;
                            slider.current.classList.add(styles.hidden);
                        }
                    }

                    if (sideBar.current && commentsListRef.current) {
                        let sideBarHeight;

                        if ((mainContentHeight - sideBar.current.clientHeight) < MIN_COMMENTS_HEIGHT) {
                            sideBarHeight = mainContentHeight + (MIN_COMMENTS_HEIGHT - (mainContentHeight - sideBar.current.clientHeight));
                        } else {
                            sideBarHeight = mainContentHeight;
                        }

                        const isSliderHeight = (mainContentHeight - sideBarHeight - sliderHeight) > MIN_COMMENTS_HEIGHT;

                        if (isSliderHeight && slider.current && sideBarHeight) {
                            slider.current.classList.remove(styles.hidden);
                            commentsListRef.current.style.maxHeight = `${mainContentHeight - sideBar.current.clientHeight - sliderHeight}px`;
                        } else {
                            commentsListRef.current.style.maxHeight = `${mainContentHeight - sideBar.current.clientHeight}px`;
                        }

                        sideBar.current.parentNode.style.height = `${sideBarHeight}px`;
                        commentsListRef.current.style.minHeight = `${MIN_COMMENTS_HEIGHT}px`;
                        setHeight(mainContentHeight - sideBar.current.clientHeight + 1);
                    }
                } else {
                    if (commentsListRef.current) {
                        commentsListRef.current.style.maxHeight = `${mainContentHeight - sideBar.current.clientHeight}px`;

                        commentsListRef.current.style.minHeight = `${MIN_COMMENTS_HEIGHT}px`;
                        setHeight(mainContentHeight - sideBar.current.clientHeight + 1);
                    }
                }
            }
        }
    };

    useEffect(() => {
        if (height && commentsListRef.current) {
            commentsListRef.current.style.height = `${commentsListRef.current.querySelector('.commentsList')?.clientHeight}px`;
        }
    }, [height, commentsListRef.current]);

    useEffect(() => {
        setComments(article.comments.list);
    }, [article]);

    const handleCommentsUpdate = () => {
        getArticleById({ locale: router.locale, id: article._id }).then(result => {
            if (result?.data) {
                setComments(result.comments.list);
            }
        });
    };

    return (
        <div className={styles.root}>
            <div className={styles.sideBarContent} ref={sideBar}>
                <div className={classNames(styles.ad, styles.first)} ref={adBlock1}>
                    {
                        sidebarCommercials[0]
                            ? <a className={styles.commercialLink} href={sidebarCommercials[0].link} target='_blank' rel="noreferrer">
                                <Lazy>
                                    <picture>
                                        <source media="(max-width:1440px)" srcSet={sidebarCommercials[0].photosVertical[0].pathWebp} type='image/webp' />
                                        <source srcSet={sidebarCommercials[0].photos[0].pathWebp} type='image/webp' />
                                        <img src={sidebarCommercials[0].photos[0].path} alt={sidebarCommercials[0].name || 'commercial'} />
                                    </picture>
                                </Lazy>
                            </a>
                            : <div className={styles.placeholder}>{'AD'}</div>
                    }
                </div>
                <div className={styles.subscriptionWrapper}>
                    <Subscription/>
                </div>
                <div className={styles.socials}>
                    <Socials url={`/${article?.data[router.locale]?.alias}`} onClose={handleShare}/>
                </div>
                <div className={classNames(styles.ad, styles.third)} ref={adBlock3}>
                    {
                        sidebarCommercials[1]
                            ? <a className={styles.commercialLinkSmallDesktop} href={sidebarCommercials[1].link} target='_blank' rel="noreferrer">
                                <Lazy>
                                    <picture>
                                        <source media="(max-width:526px)" srcSet={sidebarCommercials[1].photos[0].pathWebp} type='image/webp' />
                                        <source media="(max-width:1024px)" srcSet={sidebarCommercials[1].photosHorizontal[0].pathWebp} type='image/webp' />
                                        <source srcSet={sidebarCommercials[1].photosVertical[0].pathWebp} type='image/webp' />
                                        <img src={sidebarCommercials[1].photosVertical[0].path} alt={sidebarCommercials[1].name || 'commercial'} />
                                    </picture>
                                </Lazy>
                            </a>
                            : <div className={styles.placeholderSmallDesktop}>{'AD'}</div>
                    }
                    {/* vertical */}
                    <div className={styles.googleAdSmallDesktop}>
                        <amp-ad width="100vw" height="320"
                            type="adsense"
                            data-ad-client="ca-pub-5094837188797246"
                            data-ad-slot="3921809737"
                            data-auto-format="rspv"
                            data-full-width="">
                            <div overflow=""></div>
                        </amp-ad>
                    </div>
                    {/* horizontal */}
                    <div className={styles.googleAdMobile}>
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
                <div className={classNames(styles.ad, styles.fourth)} ref={adBlock4}>
                    {
                        sidebarCommercials[2]
                            ? <a className={styles.commercialLinkMobile} href={sidebarCommercials[2].link} target='_blank' rel="noreferrer">
                                <Lazy>
                                    <picture>
                                        <source media="(max-width:526px)" srcSet={sidebarCommercials[2].photos[0].pathWebp} type='image/webp' />
                                        <source media="(max-width:1024px)" srcSet={sidebarCommercials[2].photosHorizontal[0].pathWebp} type='image/webp' />
                                        <source srcSet={sidebarCommercials[2].photosVertical[0].pathWebp} type='image/webp' />
                                        <img src={sidebarCommercials[2].photosVertical[0].path} alt={sidebarCommercials[2].name || 'commercial'} />
                                    </picture>
                                </Lazy>
                            </a>
                            : <div className={styles.placeholderMobile}>{'AD'}</div>
                    }
                    {/* horizontal */}
                    <div className={styles.googleAdMobile}>
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
                <WeatherWidget/>
                <Latest article={article} otherArticles={otherArticles}/>
                <LeaveComment handleCommentsUpdate={handleCommentsUpdate} article={article} commentsRef={commentsRef}/>
                {
                    !!comments.length &&
                    <CommentsList
                        comments={comments}
                        article={article}
                        handleCommentsUpdate={handleCommentsUpdate}
                        commentsListRef={commentsListRef}
                        height={width > MOBILE_WIDTH ? height : true}
                    />
                }
                <div className={styles.articles}>
                    {
                        articles.filter(item => item._id !== article._id).slice(0, 2).map((item, i) => (
                            <div key={i}>
                                <Link href={`/${item?.data[router.locale]?.alias}`}>
                                    <a className={styles.preview}>
                                        <Lazy>
                                            <picture>
                                                <source srcSet={item.data[router.locale]?.avatar[0].pathWebp} type='image/webp' />
                                                <img src={item.data[router.locale]?.avatar[0].path} alt={item.data[router.locale]?.title} />
                                            </picture>
                                        </Lazy>
                                    </a>
                                </Link>
                                <Link href={`/${item?.data[router.locale]?.alias}`}>
                                    <a className={styles.articleTitle}>
                                        {item.data[router.locale]?.title}
                                    </a>
                                </Link>
                            </div>
                        ))
                    }
                </div>
                {
                    !!posts?.length &&
                    <Slider slides={posts} sliderRef={slider}/>
                }
            </div>
        </div>
    );
};

Sidebar.propTypes = {
    article: PropTypes.object,
    posts: PropTypes.array,
    handleShare: PropTypes.func,
    commentsRef: PropTypes.object,
    bodyRef: PropTypes.object,
    introductionRef: PropTypes.object,
    otherArticles: PropTypes.array,
    articles: PropTypes.array
};

export default Sidebar;
