import React, { useEffect, useState, useMemo, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import PropTypes from 'prop-types';
import styles from './index.module.scss';
import Categories from './Categories';
import Introduction from './Introduction';
import ColumnConcern from './ColumnConcern';
import Other from './Other';
import Sidebar from './Sidebar';
// import Products from './Products';
import { AD_PAGES_ALIASES } from '../../../admin/constants/constants';
import UpSVG from '../../../../../public/images/svg/upPrimary.svg';
import Poll from '../Poll';
import Subscription from '../Article/SideBar/Subscription';
import getCommercialForCategories from '../../services/client/commercial/getCommercialForCategories';
import setSubcategoryPageCommercial from '../../store/actions/setSubcategoryPageCommercial';
import shuffleArray from '../../utils/shuffleArray';
import { useWindowSize } from '../../utils/useWindowSize';
import { getToken, getTokenUser } from '../../utils/manageToken';
import getVotesForCategories from '../../services/client/votes/getVotesForCategories';
import vote from '../../services/client/votes/vote';
import Lazy from '../Lazy';
import setSignInPopup from '../../store/actions/setSignInPopup';
import setDraftVote from '../../store/actions/setDraftVote';
// import Loader from '../Loader';
import setSignUpPopup from '../../store/actions/setSignUpPopup';

const SubcategoryPageContent = ({ categories, authors, category, subcategory, articles, votesList, recent, featured }) => {
    const dispatch = useDispatch();
    const featuredIds = useMemo(() => featured?.slice(0, 2).map(item => item._id), [featured]);
    // eslint-disable-next-line max-len
    const blockIntroductionArticles = useMemo(() => [...featured?.slice(0, 2), ...recent.filter(item => !featuredIds.includes(item._id))].slice(0, 4) || [], [featured, recent, featuredIds]);
    const blockIntroductionArticlesIds = useMemo(() => blockIntroductionArticles.map(item => item._id), [blockIntroductionArticles]);
    const recentFiltered = useMemo(() => recent.filter(item => !blockIntroductionArticlesIds.includes(item._id)), [blockIntroductionArticlesIds, recent]);
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
    const { width } = useWindowSize();
    const isMobile = useMemo(() => width <= 1280, [width]);
    const recentArticles = useMemo(() => !isMobile ? recentFiltered.slice(0, 6) : recentFiltered.slice(0, 8), [isMobile, recentFiltered]);
    const commercials = useSelector(({ commercial }) => commercial.subCategoriesCommercial);
    const user = useSelector(({ application }) => application.user);

    const shuffledCommercials = useMemo(() => commercials.length ? shuffleArray(commercials) : [], [commercials]);
    const adsForSidebar = useMemo(() => shuffledCommercials.slice(0, 2), [shuffledCommercials]);

    const articlesRef = useRef();
    const sidebarRef = useRef();
    const relatedRef = useRef();
    const adRef = useRef();
    const cssLoaded = useSelector(({ application }) => application.loaded);
    // const [loaded, setLoaded] = useState(cssLoaded);
    const MOBILE_WIDTH = 1280;
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
        // eslint-disable-next-line max-len
    }, [width, /* loaded, */ subcategory, shuffledCommercials, relatedRef, adRef, articlesRef?.current?.clientHeight, sidebarRef, blockIntroductionArticles, recent, votes]);

    const checkSidebarFit = () => {
        relatedRef.current?.classList.remove(styles.hidden);
        relatedRef.current?.children[0]?.children[1].childNodes.forEach((item, i) => {
            item.classList.remove(styles.hidden);
        });
        adRef.current?.classList.remove(styles.hidden);
        const recentBlockRowsGap = 31;
        if (subcategory && width > MOBILE_WIDTH) {
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
            }
        } else {
            if (subcategory && blockIntroductionArticles.length) {
                // setIsLoader(false);
            }
        }
    };

    useEffect(() => {
        const timeout = setTimeout(() => {
            if (subcategory) {
                getCommercialForCategories({ page: AD_PAGES_ALIASES.subCategoryPage, category: category._id, subcategory: subcategory._id })
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
                            .filter(priority => priority.page === AD_PAGES_ALIASES.subCategoryPage)
                    };
                });
                        dispatch(setSubcategoryPageCommercial(commercials));
                    });
            }
        }, 2000);

        return () => {
            clearTimeout(timeout);
        };
    }, [subcategory]);

    useEffect(() => {
        const timeout = setTimeout(() => {
            if (category?._id && subcategory?._id) {
            // eslint-disable-next-line max-len
                getVotesForCategories({ page: AD_PAGES_ALIASES.subCategoryPage, category: category?.data[router.locale]?._id, subcategory: subcategory?.data[router.locale]?._id, ...(user?._id ? { userId: user._id } : {}), locale: router.locale })
                    .then((response) => {
                        setVotes(response.props.votes);
                    });
            }
        }, 0);

        return () => {
            clearTimeout(timeout);
        };
    }, [category, subcategory, router.locale, user]);

    const handleVote = (values, voteId) => {
        const token = getToken();
        if (user) {
            vote({ variantId: values.variant, voteId: voteId, token, locale: router.locale, path: router.asPath })
                .then(() => {
                    // eslint-disable-next-line max-len
                    getVotesForCategories({ page: AD_PAGES_ALIASES.subCategoryPage, category: category?.data[router.locale]?._id, subcategory: subcategory?.data[router.locale]?._id, ...(user?._id ? { userId: user._id } : {}), locale: router.locale })
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
                <Categories
                    categories={categories}
                    category={category}
                    subcategory={subcategory}
                />
                <Introduction
                    blockIntroductionArticles={blockIntroductionArticles}
                    commercialItem={adsForSidebar[0]}
                    subcategory={subcategory}
                    category={category}
                />
                <div className={styles.desktopSidebar}>
                    <div className={styles.poll}>
                        {votesModified.length
                            ? <Poll transparent page={AD_PAGES_ALIASES.subCategoryPage} votes={votesModified} handleVote={handleVote}/>
                            : <div className={styles.pollAd}>{shuffledCommercials[2]
                                ? <a className={styles.commercialLink} href={shuffledCommercials[2].link} target='_blank' rel="noreferrer">
                                    <Lazy>
                                        <picture>
                                            <source srcSet={shuffledCommercials[2].photosVertical[0].pathWebp} type='image/webp' />
                                            <img src={shuffledCommercials[2].photosVertical[0].path} alt={shuffledCommercials[2].name || 'commercial'} />
                                        </picture>
                                    </Lazy>
                                </a>
                                : <div className={styles.placeholder}>{'AD'}</div>
                            }</div>
                        }
                    </div>
                    <div className={styles.subscribe}>
                        {
                            !!blockIntroductionArticles.length &&
                            <Subscription />
                        }
                    </div>
                </div>
                <div className={styles.contentWrapper}>
                    <div className={styles.content}>
                        {
                            !!recentArticles.length &&
                            <ColumnConcern
                                articles={recentArticles}
                                categories={categories}
                                category={category}
                                commercialItem={shuffledCommercials[0]}
                            />
                        }
                        <div className={styles.articles}>
                            <div className={styles.articlesContent} ref={articlesRef}>
                                <Other
                                    categories={categories}
                                    authors={authors}
                                    category={category}
                                    subcategory={subcategory}
                                    exclude={[...blockIntroductionArticles, ...recentFiltered]}
                                />
                            </div>
                        </div>
                        <div className={styles.mobileSidebar}>
                            {!!votesModified.length &&
                            <div className={styles.poll}>
                                {/* eslint-disable-next-line max-len */}
                                <Poll transparent page={AD_PAGES_ALIASES.subCategoryPage} votes={votesModified} handleVote={handleVote}/>
                            </div>
                            }
                            <div className={styles.subscribe}>
                                <Subscription />
                            </div>
                        </div>
                        <div className={styles.commercialList}>
                            {
                                shuffledCommercials[1]
                                    ? <a className={styles.commercialLinkSide} href={shuffledCommercials[1].link} target='_blank' rel="noreferrer">
                                        <Lazy>
                                            <picture>
                                                <source srcSet={shuffledCommercials[1].photosVertical[0].pathWebp} type='image/webp' />
                                                <img src={shuffledCommercials[1].photosVertical[0].path} alt={shuffledCommercials[1].name || 'commercial'} />
                                            </picture>
                                        </Lazy>
                                    </a>
                                    : <div className={styles.placeholderSide}>{'AD'}</div>
                            }
                            {/* vertical */}
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
                        </div>
                        <div className={styles.sidebar}>
                            <div className={styles.sidebarContent} ref={sidebarRef}>
                                {
                                    !!recentArticles.length &&
                                    <Sidebar commercials={adsForSidebar} relatedRef={relatedRef} adRef={adRef} articles={articles}/>
                                }
                            </div>
                        </div>
                    </div>
                </div>
                <button className={styles.upButton} onClick={() => window.scrollTo({
                    top: 0,
                    behavior: 'smooth'
                })}><UpSVG/></button>
            </div>
            {/* <Products/> */}
        </>

    );
};

SubcategoryPageContent.propTypes = {
    categories: PropTypes.array,
    authors: PropTypes.array,
    category: PropTypes.object,
    subcategory: PropTypes.object,
    articles: PropTypes.array,
    votesList: PropTypes.array,
    featured: PropTypes.array,
    recent: PropTypes.array
};

export default SubcategoryPageContent;
