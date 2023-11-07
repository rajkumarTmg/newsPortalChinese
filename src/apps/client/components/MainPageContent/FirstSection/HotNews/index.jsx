import React, { useMemo, useRef } from 'react';
import styles from './index.module.scss';
import { useRouter } from 'next/router';
import Link from 'next/link';
import PollBlock from '../PollBlock';
import Subscription from '../Subscription';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import formatDate from '../../../../utils/formatDate';
import classNames from 'classnames';
import ReactPlayer from 'react-player';
import Lazy from '../../../Lazy';

const HotNews = ({ articles, featuredMain, featuredSub, featuredBottom, featuredVideo, featuredVote, votes, handleVote }) => {
    const categories = useSelector(({ data }) => data.categories);
    const authors = useSelector(({ data }) => data.authors);
    const router = useRouter();
    const ref = useRef(null);

    // eslint-disable-next-line max-len
    const articleOneCategory = useMemo(() => featuredBottom[0] && categories.find((category) => category._id === featuredBottom[0]?.data[router.locale]?.category), [featuredBottom]);
    // eslint-disable-next-line max-len
    const articleTwoCategory = useMemo(() => featuredBottom[1] && categories.find((category) => category._id === featuredBottom[1]?.data[router.locale]?.category), [featuredBottom]);
    const featuredMainToRender = useMemo(() => featuredMain.length ? featuredMain : [articles[0]], [featuredMain, articles]);
    // eslint-disable-next-line max-len
    const featuredSubToRender = useMemo(() => articles.slice(1, 5).map((article, index) => featuredSub[index] ? featuredSub[index] : article), [featuredSub, articles]);
    const featuredSubToRenderMobile = useMemo(() => featuredSub[3] ? [featuredSub[3]] : [articles[5]], [featuredSub, articles]);
    const featuredBottomToRenderFirst = useMemo(() => featuredBottom[0] ? featuredBottom[0] : articles[6], [featuredBottom, articles]);
    const featuredBottomToRenderSecond = useMemo(() => featuredBottom[1] ? featuredBottom[1] : articles[7], [featuredBottom, articles]);
    // eslint-disable-next-line max-len
    const featuredVoteToRender = useMemo(() => featuredVote.length ? [...featuredVote, ...articles.slice(8)].slice(0, 2) : articles.slice(8, 10), [featuredVote, articles]);

    return (
        <>
            {
                featuredMainToRender.map((article) => {
                    const category = article && categories.find((category) => category._id === article?.data[router.locale]?.category);
                    const author = article && authors.find((author) => author._id === article?.data[router.locale]?.author);

                    return <div className={styles.largeNews} key={article?._id.toString()}>
                        <Link href={`/categories/${category?.data[router.locale]?.alias}`}>
                            <a className={styles.subCategory}>{category?.data[router.locale]?.name}</a>
                        </Link>
                        <Link href={`/${article?.data[router.locale]?.alias}`}>
                            <a className={styles.largeNewsImage}>
                                <Lazy>
                                    <picture>
                                        <source srcSet={article?.data[router.locale]?.avatar[0].pathWebp} type='image/webp' />
                                        <img src={article?.data[router.locale]?.avatar[0].path} alt={article?.data[router.locale]?.title} />
                                    </picture>
                                </Lazy>
                            </a>
                        </Link>
                        <div className={styles.largeNewsInfo}>
                            <p className={styles.largeNewsMeta}>{author && author?.data[router.locale]?.name} {' | '}
                                {formatDate(article?.data[router.locale]?.date, router.locale)}
                            </p>
                            <Link href={`/${article?.data[router.locale]?.alias}`}>
                                <a className={styles.largeNewsTitle}>
                                    <h6>{article?.data[router.locale]?.title}</h6>
                                </a>
                            </Link>
                        </div>
                    </div>;
                })
            }
            <div className={styles.featuredMainMobile}>
                {
                    featuredSubToRenderMobile.map((article) => {
                        const category = article && categories.find((category) => category._id === article?.data[router.locale]?.category);
                        const author = article && authors.find((author) => author._id === article?.data[router.locale]?.author);

                        return <div className={styles.largeNews} key={article?._id.toString()}>
                            <Link href={`/categories/${category?.data[router.locale]?.alias}`}>
                                <a className={styles.subCategory}>{category?.data[router.locale]?.name}</a>
                            </Link>
                            <Link href={`/${article?.data[router.locale]?.alias}`}>
                                <a className={styles.largeNewsImage}>
                                    <Lazy>
                                        <picture>
                                            <source srcSet={article?.data[router.locale]?.avatar[0].pathWebp} type='image/webp' />
                                            <img src={article?.data[router.locale]?.avatar[0].path} alt={article?.data[router.locale]?.title} />
                                        </picture>
                                    </Lazy>
                                </a>
                            </Link>
                            <div className={styles.largeNewsInfo}>
                                <p className={styles.largeNewsMeta}>{author && author?.data[router.locale]?.name} {' | '}
                                    {formatDate(article?.data[router.locale]?.date, router.locale)}
                                </p>
                                <Link href={`/${article?.data[router.locale]?.alias}`}>
                                    <a className={styles.largeNewsTitle}>
                                        <h6>{article?.data[router.locale]?.title}</h6>
                                    </a>
                                </Link>
                            </div>
                        </div>;
                    })
                }
            </div>
            <div className={styles.mainNewsList}>
                {featuredSubToRender.map((article) =>
                    <div className={styles.mainNewsItem} key={article?._id.toString()}>
                        <Link href={`/${article?.data[router.locale]?.alias}`}>
                            <a className={styles.largeNewsImage}>
                                <Lazy>
                                    <picture>
                                        <source srcSet={article?.data[router.locale]?.avatar[0].pathWebp} type='image/webp' />
                                        <img src={article?.data[router.locale]?.avatar[0].path} alt={article?.data[router.locale]?.title} />
                                    </picture>
                                </Lazy>
                            </a>
                        </Link>
                        <Lazy>
                            <div className={styles.mainNewsItemDescWrap}>
                                <Link href={`/${article?.data[router.locale]?.alias}`}>
                                    <a className={styles.mainNewsItemDesc}>{article?.data[router.locale]?.title}</a>
                                </Link>
                            </div>
                        </Lazy>
                    </div>
                )}
            </div>
            <div className={classNames(styles.articles, {
                [styles.noVotes]: votes !== null && !votes?.length
            })}>
                {
                    featuredBottomToRenderFirst &&
                        <div className={styles.articleItem}>
                            <div className={styles.articleImage}>
                                <Link href={`/${featuredBottomToRenderFirst?.data[router.locale]?.alias}`}>
                                    <a className={styles.largeNewsImage}>
                                        <Lazy>
                                            <picture>
                                                <source srcSet={featuredBottomToRenderFirst?.data[router.locale]?.avatar[0].pathWebp} type='image/webp' />
                                                {/* eslint-disable-next-line max-len */}
                                                <img src={featuredBottomToRenderFirst?.data[router.locale]?.avatar[0].path} alt={featuredBottomToRenderFirst?.data[router.locale]?.title} />
                                            </picture>
                                        </Lazy>
                                    </a>
                                </Link>
                                <Link href={`/categories/${articleOneCategory?.data[router.locale]?.alias}`}>
                                    <a className={styles.category}>{articleOneCategory?.data[router.locale]?.name}</a>
                                </Link>
                                <Lazy heightAuto={true}>
                                    <div className={styles.mainNewsItemDescWrap}>
                                        <Link href={`/${featuredBottomToRenderFirst?.data[router.locale]?.alias}`}>
                                            <a className={styles.articleTitleInner}>{featuredBottomToRenderFirst?.data[router.locale]?.title}</a>
                                        </Link>
                                    </div>
                                </Lazy>
                            </div>
                            <Lazy heightAuto={true}>
                                <Link href={`/${featuredBottomToRenderFirst?.data[router.locale]?.alias}`}>
                                    <a className={styles.articleTitle}>{featuredBottomToRenderFirst?.data[router.locale]?.title}</a>
                                </Link>
                            </Lazy>
                            <div dangerouslySetInnerHTML={{ __html: featuredBottomToRenderFirst?.data[router.locale]?.shortDescription }}
                                className={styles.articleDesc}
                            ></div>
                        </div>
                }
                {
                    featuredBottomToRenderSecond &&
                        <div className={styles.articleItem}>
                            <div className={styles.articleImage}>
                                <Link href={`/${featuredBottomToRenderSecond?.data[router.locale]?.alias}`}>
                                    <a className={styles.largeNewsImage}>
                                        <Lazy>
                                            <picture>
                                                <source srcSet={featuredBottomToRenderSecond?.data[router.locale]?.avatar[0].pathWebp} type='image/webp' />
                                                {/* eslint-disable-next-line max-len */}
                                                <img src={featuredBottomToRenderSecond?.data[router.locale]?.avatar[0].path} alt={featuredBottomToRenderSecond?.data[router.locale]?.title} />
                                            </picture>
                                        </Lazy>
                                    </a>
                                </Link>
                                <Link href={`/categories/${articleTwoCategory?.data[router.locale]?.alias}`}>
                                    <a className={styles.category}>{articleTwoCategory?.data[router.locale]?.name}</a>
                                </Link>
                                <Lazy heightAuto={true}>
                                    <div className={styles.mainNewsItemDescWrap}>
                                        <Link href={`/${featuredBottomToRenderSecond?.data[router.locale]?.alias}`}>
                                            <a className={styles.articleTitleInner}>{featuredBottomToRenderSecond?.data[router.locale]?.title}</a>
                                        </Link>
                                    </div>
                                </Lazy>
                            </div>
                            <Lazy heightAuto={true}>
                                <Link href={`/${featuredBottomToRenderSecond?.data[router.locale]?.alias}`}>
                                    <a className={styles.articleTitle}>{featuredBottomToRenderSecond?.data[router.locale]?.title}</a>
                                </Link>
                            </Lazy>
                            <div dangerouslySetInnerHTML={{ __html: featuredBottomToRenderSecond?.data[router.locale]?.shortDescription }}
                                className={styles.articleDesc}
                            ></div>
                        </div>
                }
                {
                    !!featuredVideo.length &&
                    <Link href={`/posts/${featuredVideo[0]?.data[router.locale]?.alias}`}>
                        <a className={styles.videoLink}>
                            {
                                !!featuredVideo[0]?.data[router.locale]?.videoPreview &&
                                !!featuredVideo[0]?.data[router.locale]?.videoPreview.length &&
                                <Lazy>
                                    <picture>
                                        <source srcSet={featuredVideo[0]?.data[router.locale]?.videoPreview[0]?.pathWebp} type='image/webp' />
                                        {/* eslint-disable-next-line max-len */}
                                        <img src={featuredVideo[0]?.data[router.locale]?.videoPreview[0]?.path} alt={featuredVideo[0]?.data[router.locale]?.title} />
                                    </picture>
                                </Lazy>
                            }
                            <div className={classNames(styles.player, {
                                [styles.playerPreview]: !featuredVideo[0]?.data[router.locale]?.videoPreview ||
                                !featuredVideo[0]?.data[router.locale]?.videoPreview.length
                            })}>
                                <Lazy>
                                    <ReactPlayer
                                        playIcon={<div/>}
                                        ref={ref}
                                        url={featuredVideo[0]?.data[router.locale]?.videoLink}
                                        playing={false}
                                        config={{
                                            file: {
                                                attributes: {
                                                    preload: 'metadata'
                                                }
                                            }
                                        }}
                                    />
                                </Lazy>
                            </div>
                        </a>
                    </Link>
                }
            </div>
            <PollBlock articles={articles} featuredVote={featuredVoteToRender} handleVote={handleVote} votes={votes}/>
            <Subscription/>
        </>
    );
};

HotNews.propTypes = {
    articles: PropTypes.array,
    featuredMain: PropTypes.array,
    featuredSub: PropTypes.array,
    featuredBottom: PropTypes.array,
    featuredVideo: PropTypes.array,
    featuredVote: PropTypes.array,
    votes: PropTypes.array,
    handleVote: PropTypes.func
};

export default HotNews;
