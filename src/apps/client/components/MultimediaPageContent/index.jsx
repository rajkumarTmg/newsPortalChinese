import React, { useEffect, useState, useMemo, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import styles from './index.module.scss';
import Introduction from './Introduction';
import HotspotMultimedia from './HotspotMultimedia';
import AudioVideoHotspot from './AudioVideoHotspot';
import ColumnConcern from './ColumnConcern';
import Poll from '../Poll';
import RelatedTopic from '../Article/ArticleBody/RelatedTopic';
import getPostsByType from '../../services/server/getPostsByType';
import getPostsBySubcategory from '../../services/server/getPostsBySubcategory';
import { useRouter } from 'next/router';
import getArrayChunks from '../../utils/getArrayChunks';

import { AD_PAGES_ALIASES } from '../../../admin/constants/constants';
import setMultimediaPageCommercial from '../../store/actions/setMultimediaPageCommercial';
import getCommercialForPages from '../../services/client/commercial/getCommercialForPages';
import shuffleArray from '../../utils/shuffleArray';
import { getToken, getTokenUser } from '../../utils/manageToken';
import vote from '../../services/client/votes/vote';
import getVotesForCategories from '../../services/client/votes/getVotesForCategories';
// IMAGES
import UpSVG from '../../../../../public/images/svg/upPrimary.svg';
import Lazy from '../Lazy';
import setSignInPopup from '../../store/actions/setSignInPopup';
// HOOKS
import { useWindowSize } from '../../utils/useWindowSize';
import Socials from '../Socials';
import setDraftVote from '../../store/actions/setDraftVote';
// import Loader from '../Loader';
import setSignUpPopup from '../../store/actions/setSignUpPopup';
import classNames from 'classnames';

const MultimediaPageContent = ({ category, categories, articles, votesList, postsIntro }) => {
    const dispatch = useDispatch();
    const router = useRouter();
    const [votes, setVotes] = useState(votesList);
    const votesModified = useMemo(() => votes?.length
        ? votes.map((item) => {
            return {
                id: item._id,
                title: item.data[router.locale]?.title,
                priorities: item.data[router.locale]?.priorities
                    .map((priority) => priority[router.locale]),
                votingOptions: item.data[router.locale]?.votingOptions,
                description: item.data[router.locale]?.editor,
                answers: item.answers,
                selectedOption: item.selectedOption,
                date: item.data[router.locale].date
            };
        })
        : [], [votes]);
    const [postsPhoto, setPostsPhoto] = useState([]);
    const [postsVideo, setPostsVideo] = useState([]);
    const [subcategoriesPosts, setSubcategoriesPosts] = useState([]);
    const user = useSelector(({ application }) => application.user);
    const { width } = useWindowSize();
    const isMobile = useMemo(() => width <= 1280, [width]);

    const commercials = useSelector(({ commercial }) => commercial.multimediaPageCommercial);

    const shuffledCommercials = useMemo(() => commercials.length ? shuffleArray(commercials) : [], [commercials]);

    const sidebarRef = useRef();
    const pollRef = useRef();
    const relatedRef = useRef();
    const adRef1 = useRef();
    const adRef2 = useRef();
    const adRef3 = useRef();
    const postsRef = useRef();
    const cssLoaded = useSelector(({ application }) => application.loaded);
    // const [loaded, setLoaded] = useState(cssLoaded);
    const MOBILE_WIDTH = 1440;
    // const [isLoader, setIsLoader] = useState(true);
    let timeout;

    useEffect(() => {
        // const timeout = setTimeout(() => { setLoaded(cssLoaded); }, 1000);

        return () => {
            // clearTimeout(timeout);
        };
    }, [cssLoaded]);

    useEffect(() => {
        setVotes(votesList || []);
    }, [votesList]);

    useEffect(() => {
        if (width) {
            checkSidebarFit();
        }

        return () => {
            clearTimeout(timeout);
        };
    }, [width, /* loaded, */ subcategoriesPosts, votes, shuffledCommercials, pollRef, relatedRef, adRef1, adRef2, adRef3, postsRef, sidebarRef]);

    const checkSidebarFit = () => {
        pollRef.current?.classList.remove(styles.hidden);
        relatedRef.current?.classList.remove(styles.hidden);
        relatedRef.current?.children[0]?.children[1].childNodes.forEach((item, i) => {
            item.classList.remove(styles.hidden);
        });
        adRef1.current?.classList.remove(styles.hidden);
        adRef2.current?.classList.remove(styles.hidden);
        adRef3.current?.classList.remove(styles.hidden);
        const recentBlockRowsGap = 31;
        if (category && width > MOBILE_WIDTH) {
            if (sidebarRef.current && postsRef.current) {
                let sidebarHeight = sidebarRef.current.clientHeight - 20;
                if (sidebarHeight > postsRef.current.clientHeight) {
                    if (adRef1.current && adRef1.current.clientHeight) {
                        sidebarHeight = sidebarHeight - adRef1.current.clientHeight;
                        adRef1.current.classList.add(styles.hidden);
                    }

                    if (sidebarHeight > postsRef.current.clientHeight) {
                        if (adRef2.current && adRef2.current.clientHeight) {
                            sidebarHeight = sidebarHeight - adRef2.current.clientHeight;
                            adRef2.current.classList.add(styles.hidden);
                        }
                    }

                    if (sidebarHeight > postsRef.current.clientHeight) {
                        if (adRef3.current && adRef3.current.clientHeight) {
                            sidebarHeight = sidebarHeight - adRef3.current.clientHeight;
                            adRef3.current.classList.add(styles.hidden);
                        }
                    }

                    if (sidebarHeight > postsRef.current.clientHeight) {
                        if (relatedRef.current && relatedRef.current.clientHeight) {
                            relatedRef.current.children[0]?.children[1].childNodes.forEach((item, i) => {
                                if (sidebarHeight > postsRef.current.clientHeight) {
                                    if (i === (relatedRef.current.children[0]?.children[1].childNodes.length - 1)) {
                                        sidebarHeight = sidebarHeight - relatedRef.current.clientHeight - recentBlockRowsGap;
                                        relatedRef.current.classList.add(styles.hidden);
                                        return;
                                    }

                                    sidebarHeight = sidebarHeight - item.clientHeight - recentBlockRowsGap;
                                    item.classList.add(styles.hidden);
                                }
                            });
                        }
                    }

                    // if (isLoader) {
                    // timeout = setTimeout(() => { setIsLoader(false); }, 500);
                    // }
                } else {
                    // if (isLoader) {
                    // timeout = setTimeout(() => { setIsLoader(false); }, 500);
                    // }
                }
            } else {
                // if (isLoader) {
                // timeout = setTimeout(() => { setIsLoader(false); }, 500);
                // }
            }
        } else {
            if (category) {
                // setIsLoader(false);
            }
        }
    };

    useEffect(() => {
        if (category) {
            Promise.all([
                getPostsByType({
                    locale: router.locale,
                    page: 1,
                    size: 6,
                    sort: 'desc',
                    categoryId: category._id,
                    type: 'video'
                }),
                getPostsByType({
                    locale: router.locale,
                    page: 1,
                    size: 90,
                    sort: 'desc',
                    categoryId: category._id,
                    type: 'photo',
                    featured: true
                })
            ]).then(([videoPosts, photoPosts]) => {
                setPostsVideo(videoPosts.paginatedResults);

                const photoSlides = getArrayChunks(photoPosts.paginatedResults, 9);
                setPostsPhoto(photoSlides);
            });

            if (width) {
                const getSubcategories = category?.subcategories?.map((subcategory) => getPostsBySubcategory({
                    locale: router.locale,
                    page: 1,
                    size: isMobile ? 6 : 9,
                    sort: 'desc',
                    categoryId: category._id,
                    subcategoryId: subcategory._id
                }));
                Promise.all([...getSubcategories]).then(([...results]) => {
                    const subcategoriesResult = category?.subcategories?.map((subcategory, i) => ({
                        subcategory,
                        posts: results[i].paginatedResults
                    }));
                    setSubcategoriesPosts(subcategoriesResult.filter(item => !!item.posts?.length));
                });
            }
        }
    }, [category, router.locale, width, isMobile]);

    useEffect(() => {
        const timeout = setTimeout(() => {
            getCommercialForPages({ page: AD_PAGES_ALIASES.multimediaPage })
                .then(response => {
                    const commercials =
                response.map((item) => {
                    return {
                        id: item._id,
                        name: item.data[router.locale]?.name,
                        link: item.data[router.locale]?.link,
                        photos: item.data[router.locale]?.photos,
                        photosHorizontal: item.data[router.locale]?.photosHorizontal,
                        photosVertical: item.data[router.locale]?.photosVertical,
                        priorities: item.data[router.locale]?.priorities
                            .map((priority) => priority[router.locale])
                            .filter(priority => priority.page === AD_PAGES_ALIASES.multimediaPage)

                    };
                });
                    dispatch(setMultimediaPageCommercial(commercials));
                });
        }, 2000);

        return () => {
            clearTimeout(timeout);
        };
    }, []);

    useEffect(() => {
        const timeout = setTimeout(() => {
            if (category) {
            // eslint-disable-next-line max-len
                getVotesForCategories({ page: AD_PAGES_ALIASES.multimediaPage, category: category?.data[router.locale]?._id, ...(user?._id ? { userId: user._id } : {}), locale: router.locale })
                    .then((response) => {
                        setVotes(response.props.votes);
                    });
            }
        }, 0);

        return () => {
            clearTimeout(timeout);
        };
    }, [user, category, router.locale]);

    const handleVote = (values, voteId) => {
        const token = getToken();
        if (user) {
            vote({ variantId: values.variant, voteId: voteId, token, locale: router.locale, path: router.asPath })
                .then(() => {
                    // eslint-disable-next-line max-len
                    getVotesForCategories({ page: AD_PAGES_ALIASES.multimediaPage, category: category?.data[router.locale]?._id, ...(user?._id ? { userId: user._id } : {}), locale: router.locale })
                        .then((response) => {
                            setVotes(response.props.votes);
                        });
                });
        } else {
            dispatch(setDraftVote({ variant: values.variant, voteId: voteId }));
            const token = getTokenUser();
            if (token) {
                dispatch(setSignInPopup(true));
            } else {
                dispatch(setSignUpPopup(true));
            }
        }
    };

    return (
        <div className={styles.root}>
            {/* <Loader theme={'fullScreen'} open={isLoader || !loaded}/> */}
            <Introduction
                categories={categories}
                category={category}
                posts={postsIntro}
                commercialItem={shuffledCommercials[0]}
                noAd={!postsVideo.length && !postsPhoto.length && !subcategoriesPosts.length}
            />
            <div className={styles.contentWrapper}>
                <div className={styles.socials}>
                    <div className={styles.stickyHelper}></div>
                    <div className={styles.socialsWrapper}>
                        <Socials url={`/multimedia/${category?.data[router.locale]?.alias}`}/>
                    </div>
                </div>
                <div className={styles.content}>
                    {
                        !!postsVideo.length &&
                        <HotspotMultimedia posts={postsVideo} category={category} sideAd={shuffledCommercials[1]} bottomAd={shuffledCommercials[1]}/>
                    }
                    {!!votesModified.length &&
                        <div className={styles.pollMobile} ref={pollRef}>
                            <Poll page={AD_PAGES_ALIASES.multimediaPage} votes={votesModified} handleVote={handleVote}/>
                        </div>
                    }
                    {
                        !!postsPhoto.length &&
                        <AudioVideoHotspot posts={postsPhoto}/>
                    }
                    {
                        (!!postsVideo.length || !!postsPhoto.length || !!subcategoriesPosts.length) &&
                        <div className={styles.largeAd}>
                            {
                                shuffledCommercials[2]
                                    ? <a className={styles.commercialLinkMobile} href={shuffledCommercials[2].link} target='_blank' rel="noreferrer">
                                        <Lazy>
                                            <picture>
                                                <source media="(max-width:526px)" srcSet={shuffledCommercials[2].photos[0].pathWebp} type='image/webp' />
                                                <source srcSet={shuffledCommercials[2].photosHorizontal[0].pathWebp} type='image/webp' />
                                                <img src={shuffledCommercials[2].photosHorizontal[0].path} alt={shuffledCommercials[2].name || 'commercial'} />
                                            </picture>
                                        </Lazy>
                                    </a>
                                    : <div className={styles.placeholderMobile}>{'AD'}</div>
                            }
                            {/* square */}
                            <div className={styles.googleAdMobile}>
                                <amp-ad width="100vw" height="320"
                                    type="adsense"
                                    data-ad-client="ca-pub-5094837188797246"
                                    data-ad-slot="5047189141"
                                    data-auto-format="rspv"
                                    data-full-width="">
                                    <div overflow=""></div>
                                </amp-ad>
                            </div>
                        </div>
                    }
                    {
                        !!subcategoriesPosts.length &&
                    <div className={styles.columnConcernWrapper}>
                        <div className={styles.postsWrapper} ref={postsRef}>
                            {
                                subcategoriesPosts.map((item, index) => (<div key={index} className={styles.posts}>
                                    <div className={styles.articles}>
                                        <ColumnConcern posts={item.posts} subcategory={item.subcategory} category={category}/>
                                    </div>
                                    {
                                        index !== (subcategoriesPosts.length - 1) &&
                                            <div className={styles.ad}>
                                                {
                                                    shuffledCommercials[index + 7]
                                                        ? <a className={classNames(styles.commercialLink, {
                                                            [styles.hiddenDesktop]: index === 1,
                                                            [styles.hiddenSmallDesktop]: (index === 0 || index === 1)
                                                        })} href={shuffledCommercials[index + 7].link} target='_blank'
                                                        rel="noreferrer">
                                                            <Lazy>
                                                                <picture>
                                                                    {/* eslint-disable-next-line max-len */}
                                                                    <source media="(max-width:526px)" srcSet={shuffledCommercials[index + 7].photos[0].pathWebp} type='image/webp' />
                                                                    {/* eslint-disable-next-line max-len */}
                                                                    <source srcSet={shuffledCommercials[index + 7].photosHorizontal[0].pathWebp} type='image/webp' />
                                                                    {/* eslint-disable-next-line max-len */}
                                                                    <img src={shuffledCommercials[index + 7].photosHorizontal[0].path} alt={shuffledCommercials[index + 7].name || 'commercial'} />
                                                                </picture>
                                                            </Lazy>
                                                        </a>
                                                        : <div className={classNames(styles.placeholder, {
                                                            [styles.hiddenDesktop]: index === 1,
                                                            [styles.hiddenSmallDesktop]: (index === 0 || index === 1)
                                                        })}>{'AD'}</div>
                                                }
                                                {/* horizontal */}
                                                {
                                                    index === 1 &&
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
                                                }
                                                {/* horizontal */}
                                                {
                                                    (index === 0 || index === 1) &&
                                                    <div className={styles.googleAdSmallDesktop}>
                                                        <amp-ad width="100vw" height="320"
                                                            type="adsense"
                                                            data-ad-client="ca-pub-5094837188797246"
                                                            data-ad-slot="4141301580"
                                                            data-auto-format="rspv"
                                                            data-full-width="">
                                                            <div overflow=""></div>
                                                        </amp-ad>
                                                    </div>
                                                }
                                            </div>
                                    }
                                </div>))
                            }
                        </div>
                        <div className={styles.sidebar}>
                            <div className={styles.sidebarContent} ref={sidebarRef}>
                                {!!votesModified.length &&
                                <div className={styles.poll} ref={pollRef}>
                                    <Poll page={AD_PAGES_ALIASES.multimediaPage} votes={votesModified} handleVote={handleVote}/>
                                </div>
                                }
                                <div className={styles.related} ref={relatedRef}>
                                    <RelatedTopic theme='multimediaPage' articles={articles?.slice(0, 4)}/>
                                </div>
                                <div className={styles.sidebarAd} ref={adRef1}>
                                    {
                                        shuffledCommercials[3]
                                            ? <a className={styles.commercialLink} href={shuffledCommercials[3].link} target='_blank' rel="noreferrer">
                                                <Lazy>
                                                    <picture>
                                                        {/* eslint-disable-next-line max-len */}
                                                        <source media="(max-width:526px)" srcSet={shuffledCommercials[3].photos[0].pathWebp} type='image/webp' />
                                                        <source srcSet={shuffledCommercials[3].photosVertical[0].pathWebp} type='image/webp' />
                                                        {/* eslint-disable-next-line max-len */}
                                                        <img src={shuffledCommercials[3].photosVertical[0].path} alt={shuffledCommercials[3].name || 'commercial'} />
                                                    </picture>
                                                </Lazy>
                                            </a>
                                            : <div className={styles.placeholder}>{'AD'}</div>
                                    }
                                </div>
                                <div className={styles.adSide} ref={adRef2}>
                                    {
                                        shuffledCommercials[4]
                                            ? <a className={styles.commercialLink} href={shuffledCommercials[4].link} target='_blank' rel="noreferrer">
                                                <Lazy>
                                                    <picture>
                                                        <source srcSet={shuffledCommercials[4].photosVertical[0].pathWebp} type='image/webp' />
                                                        {/* eslint-disable-next-line max-len */}
                                                        <img src={shuffledCommercials[4].photosVertical[0].path} alt={shuffledCommercials[4].name || 'commercial'} />
                                                    </picture>
                                                </Lazy>
                                            </a>
                                            : <div className={styles.placeholder}>{'AD'}</div>
                                    }
                                </div>
                                <div className={styles.adSide} ref={adRef3}>
                                    {
                                        shuffledCommercials[5]
                                            ? <a className={classNames(styles.commercialLink, styles.noDesktop)}
                                                href={shuffledCommercials[5].link} target='_blank' rel="noreferrer">
                                                <Lazy>
                                                    <picture>
                                                        <source srcSet={shuffledCommercials[5].photosVertical[0].pathWebp} type='image/webp' />
                                                        {/* eslint-disable-next-line max-len */}
                                                        <img src={shuffledCommercials[5].photosVertical[0].path} alt={shuffledCommercials[5].name || 'commercial'} />
                                                    </picture>
                                                </Lazy>
                                            </a>
                                            : <div className={classNames(styles.placeholder, styles.noDesktop)}>{'AD'}</div>
                                    }
                                    {/* vertical
                                    <div className={styles.googleAd}>
                                        <amp-ad width="100vw" height="320"
                                            type="adsense"
                                            data-ad-client="ca-pub-5094837188797246"
                                            data-ad-slot="3921809737"
                                            data-auto-format="rspv"
                                            data-full-width="">
                                            <div overflow=""></div>
                                        </amp-ad>
                                    </div>
                                    */}
                                </div>
                            </div>
                        </div>
                    </div>
                    }
                    {
                        !!subcategoriesPosts.length &&
                        <div className={styles.adBottom}>
                            {
                                shuffledCommercials[6]
                                    ? <a className={styles.commercialLinkBottom} href={shuffledCommercials[6].link} target='_blank' rel="noreferrer">
                                        <Lazy>
                                            <picture>
                                                <source srcSet={shuffledCommercials[6].photosHorizontal[0].pathWebp} type='image/webp' />
                                                <img src={shuffledCommercials[6].photosHorizontal[0].path} alt={shuffledCommercials[6].name || 'commercial'} />
                                            </picture>
                                        </Lazy>
                                    </a>
                                    : <div className={styles.placeholderBottom}>{'AD'}</div>
                            }
                            {/* horizontal */}
                            <div className={styles.googleAdSmallDesktop}>
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
            </div>
            <button className={styles.upButton}
                onClick={() => window.scrollTo({
                    top: 0,
                    behavior: 'smooth'
                })}
            ><UpSVG/></button>
        </div>
    );
};

MultimediaPageContent.propTypes = {
    category: PropTypes.object,
    categories: PropTypes.array,
    articles: PropTypes.array,
    votesList: PropTypes.array,
    postsIntro: PropTypes.array
};

export default MultimediaPageContent;
