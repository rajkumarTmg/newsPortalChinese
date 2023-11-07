import React, { useEffect, useState, useMemo, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import ColumnConcern from './ColumnConcern';
import styles from './index.module.scss';
import Introduction from './Introduction';
import MultimediaSection from '../MainPageContent/MultimediaSection';
import CommercialBlock from '../MainPageContent/CommercialBlock';
import MoreArticles from './MoreArticles';
import Poll from '../Poll';
import RelatedTopic from '../Article/ArticleBody/RelatedTopic';
import Categories from '../CategoryPageContent/Categories';
import Sidebar from './Sidebar';
// import Products from './Products';
import UpSVG from '../../../../../public/images/svg/upPrimary.svg';
// import BestDeals from './BestDeals';
import classNames from 'classnames';
import getArticlesBySubcategory from '../../services/server/getArticlesBySubcategory';
import { useRouter } from 'next/router';
import getPostsByType from '../../services/server/getPostsByType';
import getArrayChunks from '../../utils/getArrayChunks';

import getCommercialForCategories from '../../services/client/commercial/getCommercialForCategories';
import shuffleArray from '../../utils/shuffleArray';
import { AD_PAGES_ALIASES } from '../../../admin/constants/constants';
import setCategoryPageCommercial from '../../store/actions/setCategoryPageCommercial';
import getVotesForCategories from '../../services/client/votes/getVotesForCategories';
import vote from '../../services/client/votes/vote';
import { getToken, getTokenUser } from '../../utils/manageToken';
import Lazy from '../Lazy';
import setSignInPopup from '../../store/actions/setSignInPopup';
import setDraftVote from '../../store/actions/setDraftVote';
import { useWindowSize } from '../../utils/useWindowSize';
// import Loader from '../Loader';
import setSignUpPopup from '../../store/actions/setSignUpPopup';
import Link from 'next/link';

const CategoryPageContent = ({ categories, category, articles, votesList, popularArticles, intro }) => {
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
    const authors = useSelector(({ data }) => data.authors);
    const [subcategoriesArticles, setSubcategoriesArticles] = useState([]);
    const [multimediaSlides, setMultimediaSlides] = useState([]);
    const user = useSelector(({ application }) => application.user);

    const commercials = useSelector(({ commercial }) => commercial.categoriesCommercial);

    const shuffledCommercials = useMemo(() => commercials.length ? shuffleArray(commercials) : [], [commercials]);

    const sidebarRef = useRef();
    const pollRef = useRef();
    const relatedRef = useRef();
    const adRef = useRef();
    const articlesRef = useRef();
    const { width } = useWindowSize();
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
    }, [width, /* loaded, */ subcategoriesArticles, votes, shuffledCommercials, pollRef, relatedRef, adRef, articlesRef, sidebarRef]);

    const checkSidebarFit = () => {
        pollRef.current?.classList.remove(styles.hidden);
        relatedRef.current?.classList.remove(styles.hidden);
        relatedRef.current?.children[0]?.children[1].childNodes.forEach((item, i) => {
            item.classList.remove(styles.hidden);
        });
        adRef.current?.classList.remove(styles.hidden);
        const recentBlockRowsGap = 31;
        if (category && width > MOBILE_WIDTH) {
            if (sidebarRef.current && articlesRef.current) {
                let sidebarHeight = sidebarRef.current.clientHeight - 20;
                if (sidebarHeight > articlesRef.current.clientHeight) {
                    if (adRef.current && adRef.current.clientHeight) {
                        sidebarHeight = sidebarHeight - adRef.current.clientHeight;
                        adRef.current.classList.add(styles.hidden);
                    }

                    if (sidebarHeight > articlesRef.current.clientHeight) {
                        if (relatedRef.current && relatedRef.current.clientHeight) {
                            relatedRef.current.children[0]?.children[1].childNodes.forEach((item, i) => {
                                if (sidebarHeight > articlesRef.current.clientHeight) {
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
                    type: 'video',
                    sort: 'desc',
                    page: 1,
                    size: 30,
                    categoryId: category._id
                }),
                getPostsByType({
                    locale: router.locale,
                    type: 'photo',
                    sort: 'desc',
                    page: 1,
                    size: 50,
                    categoryId: category._id
                })
            ]).then(([videoPosts, photoPosts]) => {
                const multimediaVideos = getArrayChunks(videoPosts.paginatedResults, 3);
                const multimediaPhotos = getArrayChunks(photoPosts.paginatedResults, 5);
                const multimedia = Array(10).fill(null)
                    .map((chunk, i) => ({ videos: multimediaVideos[i], photos: multimediaPhotos[i] }))
                    .filter(item => (!!item.videos?.length || !!item.photos?.length));
                setMultimediaSlides(multimedia);
            });

            const getSubcategories = category?.subcategories?.map((subcategory) => getArticlesBySubcategory({
                locale: router.locale,
                page: 1,
                size: 6,
                sort: 'desc',
                categoryId: category._id,
                subcategoryId: subcategory._id
            }));
            Promise.all([...getSubcategories]).then(([...results]) => {
                const subcategoriesResult = category?.subcategories?.map((subcategory, i) => ({
                    subcategory,
                    articles: results[i].paginatedResults
                }));
                setSubcategoriesArticles(subcategoriesResult.filter(item => !!item.articles?.length));
            });
        }

        const timeout = setTimeout(() => {
            getCommercialForCategories({ page: AD_PAGES_ALIASES.categoryPage, category: category._id }).then((categoriesCommercial) => {
                const commercials = categoriesCommercial.map((item) => {
                    return {
                        id: item._id,
                        name: item.data[router.locale]?.name,
                        link: item.data[router.locale]?.link,
                        photos: item.data[router.locale]?.photos,
                        photosHorizontal: item.data[router.locale]?.photosHorizontal,
                        photosVertical: item.data[router.locale]?.photosVertical,
                        priorities: item.data[router.locale]?.priorities
                            .map((priority) => priority[router.locale])
                    };
                });
                dispatch(setCategoryPageCommercial(commercials));
            });
        }, 2000);

        return () => {
            clearTimeout(timeout);
        };
    }, [category, router.locale]);

    useEffect(() => {
        const timeout = setTimeout(() => {
            if (category?._id) {
            // eslint-disable-next-line max-len
                getVotesForCategories({ page: AD_PAGES_ALIASES.categoryPage, category: category?.data[router.locale]?._id, ...(user?._id ? { userId: user._id } : {}), locale: router.locale })
                    .then((response) => {
                        setVotes(response.props.votes);
                    });
            }
        }, 0);

        return () => {
            clearTimeout(timeout);
        };
    }, [category, router.locale, user]);

    const handleVote = (values, voteId) => {
        const token = getToken();
        if (user) {
            vote({ variantId: values.variant, voteId: voteId, token, locale: router.locale, path: router.asPath })
                .then(() => {
                    // eslint-disable-next-line max-len
                    getVotesForCategories({ page: AD_PAGES_ALIASES.categoryPage, category: category?.data[router.locale]?._id, ...(user?._id ? { userId: user._id } : {}), locale: router.locale })
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
        <>
            <div className={styles.root}>
                {/* <Loader theme={'fullScreen'} open={isLoader || !loaded}/> */}
                {
                    category && <React.Fragment>
                        <div className={styles.mobileTitle}>
                            <div className={styles.titlesWrapper}>
                                <p className={styles.title}>
                                    {category?.data[router.locale]?.name}
                                    <span/>
                                </p>
                                <p className={styles.title}></p>
                                <span className={styles.line}/>
                                <span className={styles.line}/>
                                <span className={styles.line}/>
                                <span className={styles.line}/>
                            </div>
                        </div>
                        <Categories categories={categories} activeCategory={category} />
                        <Introduction articles={intro.slice(0, 5)} categories={categories} votes={votesModified} handleVote={handleVote}/>
                        <div className={styles.desktopSidebar}>
                            <Sidebar category={category} otherArticles={intro.slice(3, 18)}/>
                        </div>
                        <div className={styles.contentWrapper}>
                            <div className={styles.content}>
                                {
                                    !!popularArticles.length &&
                                    <ColumnConcern
                                        articles={popularArticles}
                                        categories={categories}
                                        category={category}
                                        commercialItem={shuffledCommercials[0]}
                                        commercialItem2={shuffledCommercials[1]}
                                        votes={votesModified}
                                        handleVote={handleVote}
                                    />
                                }
                                <div className={styles.mobileSidebar}>
                                    <Sidebar category={category} otherArticles={intro.slice(0, 15)}/>
                                </div>
                                {
                                    (!!multimediaSlides.length && !!intro.slice(0, 5).length) &&
                                    <div className={styles.multimedia}>
                                        <MultimediaSection
                                            theme='categoryPage'
                                            multimediaSlides={multimediaSlides}
                                            link={`/multimedia/${category?.data[router.locale]?.alias}`}
                                        />
                                        <Link href={`/multimedia/${category?.data[router.locale]?.alias}`}>
                                            <div className={styles.graphicElement}>
                                                <div></div>
                                                <div></div>
                                                <div></div>
                                                <div></div>
                                            </div>
                                        </Link>
                                    </div>
                                }
                                <div className={classNames(styles.moreArticlesWrapper, styles.singleMoreArticles)}>
                                    {
                                        (!!subcategoriesArticles.length && !!intro.slice(0, 5).length) &&
                                        <MoreArticles
                                            withLargeCommercial
                                            theme='categoryPage'
                                            articles={subcategoriesArticles[0].articles}
                                            categories={categories}
                                            authors={authors}
                                            commercialItem={shuffledCommercials[2]}
                                            horizontalOnMobile
                                            mobileGoogleAd={true}
                                        />
                                    }
                                </div>
                                {
                                    !!subcategoriesArticles.length &&
                                    <div className={styles.ad}>
                                        <CommercialBlock commercialItem={shuffledCommercials[3]} isGoogleAdSmallDesktop={true} isGoogleAdMobile={true}/>
                                    </div>
                                }
                                {
                                    !!subcategoriesArticles.length &&
                                    <div className={styles.moreArticlesWrapper}>
                                        <div className={styles.articles}>
                                            <div className={styles.articlesContent} ref={articlesRef}>
                                                {
                                                    subcategoriesArticles.map((item, i) => (
                                                        <MoreArticles
                                                            withLargeCommercial={true}
                                                            lastChild={i === (subcategoriesArticles.length - 1)}
                                                            theme='categoryPage'
                                                            articles={item.articles}
                                                            categories={categories}
                                                            authors={authors}
                                                            key={i}
                                                            title={item.subcategory?.data[router.locale]?.name}
                                                            moreLink={
                                                                // eslint-disable-next-line max-len
                                                                `/categories/${category?.data[router.locale]?.alias}/${item.subcategory?.data[router.locale]?.alias}`
                                                            }
                                                            commercialItem={shuffledCommercials[i + 5]}
                                                            horizontalOnMobile={i !== (subcategoriesArticles.length - 2)}
                                                            mobileGoogleAd={i === 0}
                                                        />
                                                    ))
                                                }
                                            </div>
                                        </div>
                                        <div className={styles.sidebar}>
                                            <div className={styles.sidebarContent} ref={sidebarRef}>
                                                {!!votesModified.length &&
                                                    <div className={styles.poll} ref={pollRef}>
                                                        <Poll
                                                            page={AD_PAGES_ALIASES.categoryPage}
                                                            votes={votesModified}
                                                            handleVote={handleVote}
                                                        />
                                                    </div>
                                                }
                                                <div className={styles.related} ref={relatedRef}>
                                                    <RelatedTopic articles={articles?.slice(0, 6)} theme='categoryPage'/>
                                                </div>
                                                <div className={styles.adBanner} ref={adRef}>
                                                    {
                                                        shuffledCommercials[4]
                                                            // eslint-disable-next-line max-len
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
                                            </div>
                                        </div>
                                    </div>
                                }
                            </div>
                        </div>
                        <button className={styles.upButton} onClick={() => window.scrollTo({
                            top: 0,
                            behavior: 'smooth'
                        })}><UpSVG/></button>
                        {/* <BestDeals/> */}
                    </React.Fragment>
                }
            </div>
            {/* <Products/> */}
        </>
    );
};

CategoryPageContent.propTypes = {
    categories: PropTypes.array,
    category: PropTypes.object,
    articles: PropTypes.array,
    votesList: PropTypes.array,
    popularArticles: PropTypes.array,
    intro: PropTypes.array
};

export default CategoryPageContent;
