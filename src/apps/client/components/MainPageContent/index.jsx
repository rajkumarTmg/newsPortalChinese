import React, { useEffect, useState, useMemo } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import FirstSection from './FirstSection';
import styles from './index.module.scss';
import EssenceReview from './EssenceReview';
import Sidebar from './Sidebar';
import ThirdSection from './ThirdSection';
import CommercialBlock from './CommercialBlock';
import MultimediaSection from './MultimediaSection';
import FourthSection from './FourthSection';
import FifthSection from './FifthSection';
// eslint-disable-next-line no-unused-vars
// import StoreList from './StoreList';
import { useRouter } from 'next/router';
import getArticlesByIds from '../../services/server/getArticlesByIds';
import getArticlesByCategory from '../../services/server/getArticlesByCategory';
import getArrayChunks from '../../utils/getArrayChunks';

import getCommercialForPages from '../../services/client/commercial/getCommercialForPages';
import { AD_PAGES_ALIASES } from '../../../admin/constants/constants';
import setMainPageCommercial from '../../store/actions/setMainPageCommercial';
import shuffleArray from '../../utils/shuffleArray';
// IMAGES
import UpSVG from '../../../../../public/images/svg/upPrimary.svg';
// import Loader from '../Loader';
import getVotesForPages from '../../services/client/votes/getVotesForPages';
import { getToken, getTokenUser } from '../../utils/manageToken';
import vote from '../../services/client/votes/vote';
import setDraftVote from '../../store/actions/setDraftVote';
import setSignInPopup from '../../store/actions/setSignInPopup';
import setSignUpPopup from '../../store/actions/setSignUpPopup';
import Link from 'next/link';
import sortFeatured from '../../utils/sortFeatured';

const MainPageContent = ({ page, articlesDiscussed, articles, photoPosts, videoPosts, votesList, featuredArticles, featuredPosts, articlesLast }) => {
    const dispatch = useDispatch();
    const router = useRouter();
    // eslint-disable-next-line max-len
    const articlesBlockOne = useMemo(() => sortFeatured(page?.data[router.locale]?.featuredTopMain, featuredArticles.filter(article => page?.data[router.locale]?.featuredTopMain.includes(article._id))).slice(0, 1), [page, featuredArticles]);
    // eslint-disable-next-line max-len
    const articlesBlockTwo = useMemo(() => sortFeatured(page?.data[router.locale]?.featuredTopSub, featuredArticles.filter(article => page?.data[router.locale]?.featuredTopSub.includes(article._id))).slice(0, 4), [page, featuredArticles]);
    // eslint-disable-next-line max-len
    const articlesBlockThree = useMemo(() => sortFeatured(page?.data[router.locale]?.featuredBottom, featuredArticles.filter(article => page?.data[router.locale]?.featuredBottom.includes(article._id))).slice(0, 2), [page, featuredArticles]);
    // eslint-disable-next-line max-len
    const articlesBlockFour = useMemo(() => sortFeatured(page?.data[router.locale]?.featuredRight, featuredArticles.filter(article => page?.data[router.locale]?.featuredRight.includes(article._id))).slice(0, 1), [page, featuredArticles]);
    // eslint-disable-next-line max-len
    const articlesBlockFive = useMemo(() => sortFeatured(page?.data[router.locale]?.featuredRightList, featuredArticles.filter(article => page?.data[router.locale]?.featuredRightList.includes(article._id))).slice(0, 4), [page, featuredArticles]);
    // eslint-disable-next-line max-len
    const articlesBlockSix = useMemo(() => sortFeatured(page?.data[router.locale]?.featuredCommentarySection, featuredArticles.filter(article => page?.data[router.locale]?.featuredCommentarySection.includes(article._id))).slice(0, 6), [page, featuredArticles]);
    // eslint-disable-next-line max-len
    const articlesBlockVote = useMemo(() => sortFeatured(page?.data[router.locale]?.featuredBottomVote, featuredArticles.filter(article => page?.data[router.locale]?.featuredBottomVote.includes(article._id))).slice(0, 4), [page, featuredArticles]);
    // eslint-disable-next-line max-len
    const postsBlockFive = useMemo(() => featuredPosts?.length ? featuredPosts.slice(0, 1) : videoPosts?.paginatedResults?.slice(0, 1) || [], [featuredPosts, videoPosts]);

    const [categoriesArticles, setCategoriesArticles] = useState([]);
    const [multimediaSlides, setMultimediaSlides] = useState([]);
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
    const user = useSelector(({ application }) => application.user);
    const categories = useSelector(({ data }) => data.categories);
    const ads = useSelector(({ commercial }) => commercial.mainPageCommercial);
    // const [isLoader, setIsLoader] = useState(true);
    const cssLoaded = useSelector(({ application }) => application.loaded);
    // const [loaded, setLoaded] = useState(cssLoaded);

    useEffect(() => {
        // const timeout = setTimeout(() => { setLoaded(cssLoaded); }, 1000);

        return () => {
            // clearTimeout(timeout);
        };
    }, [cssLoaded]);

    useEffect(() => {
        setVotes(votesList || null);
    }, [votesList]);

    useEffect(() => {
        if (videoPosts && photoPosts) {
            const multimediaVideos = getArrayChunks(videoPosts.paginatedResults, 3);
            const multimediaPhotos = getArrayChunks(photoPosts.paginatedResults, 5);
            const multimedia = Array(10).fill(null)
                .map((chunk, i) => ({ videos: multimediaVideos[i], photos: multimediaPhotos[i] }))
                .filter(item => (!!item.videos?.length || !!item.photos?.length));
            setMultimediaSlides(multimedia);
        }
    }, [videoPosts, photoPosts]);

    useEffect(() => {
        const getCategories = categories.map((category) => getArticlesByCategory({
            locale: router.locale,
            page: 1,
            size: 10,
            sort: 'desc',
            categoryId: category._id,
            ...(category?.data[router.locale]?.featured?.length
                ? {
                    excludeArticleIds: category?.data[router.locale]?.featured?.filter(item => !!item).join(',')
                }
                : {})
        }));
        const getCategoriesFeatured = categories.map((category) => getArticlesByIds({
            locale: router.locale,
            sort: 'desc',
            ids: category?.data[router.locale]?.featured?.length
                ? category?.data[router.locale]?.featured?.filter(item => !!item).join(',')
                : ''
        }));
        Promise.all([...getCategories, ...getCategoriesFeatured]).then(([...results]) => {
            const categoriesResult = categories.map((category, i) => ({
                category,
                articles: results[i].paginatedResults,
                featured: sortFeatured((category?.data[router.locale]?.featured || []), (results[i + categories.length]) || [])
            }));
            setCategoriesArticles(categoriesResult);
        });
    }, [router.locale, categories]);

    useEffect(() => {
        const timeout = setTimeout(() => {
            getVotesForPages({ page: AD_PAGES_ALIASES.mainPage, ...(user?._id ? { userId: user._id } : {}) })
                .then((response) => {
                    setVotes(response.props.votes);
                });
        }, 0);

        return () => {
            clearTimeout(timeout);
        };
    }, [user, router.locale]);

    const handleVote = (values, voteId) => {
        const token = getToken();
        if (user) {
            vote({ variantId: values.variant, voteId: voteId, token, locale: router.locale, path: router.asPath })
                .then(() => {
                    getVotesForPages({ page: AD_PAGES_ALIASES.mainPage, ...(user?._id ? { userId: user._id } : {}) })
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

    useEffect(() => {
        const timeout = setTimeout(() => {
            getCommercialForPages({ page: AD_PAGES_ALIASES.mainPage })
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
                                    .filter(priority => priority.page === AD_PAGES_ALIASES.mainPage)

                            };
                        });
                    dispatch(setMainPageCommercial(commercials));
                });
        }, 2000);

        return () => {
            clearTimeout(timeout);
        };
    }, []);

    const shuffledAds = useMemo(() => ads.length ? shuffleArray(ads) : [], [ads]);

    return (
        <div className={styles.root}>
            {/* <Loader theme={'fullScreen'} open={isLoader || !loaded}/> */}
            <FirstSection
                articles={articles}
                articlesLast={articlesLast}
                featuredMain={articlesBlockOne}
                featuredSub={articlesBlockTwo}
                featuredBottom={articlesBlockThree}
                featuredVideo={postsBlockFive}
                featuredVote={articlesBlockVote}
                featuredRightList={articlesBlockFive}
                votes={votes ? votesModified : null}
                handleVote={handleVote}
            />
            {
                articlesBlockSix &&
                <EssenceReview
                    articles={articles.slice(15, 21)}
                    featured={articlesBlockSix}
                    commercialItem={shuffledAds[1]}
                />
            }
            <Sidebar
                article={articlesBlockFour[0]}
                commercialItem={shuffledAds[0]}
                articlesDiscussed={articlesDiscussed}
                featuredRightList={articlesBlockFive}
                articles={articles}
            />
            <ThirdSection categoriesArticles={categoriesArticles} commercialItem={shuffledAds[2]}/>
            <CommercialBlock commercialItem={shuffledAds[1]} theme={'wide'}/>
            {
                !!multimediaSlides.length &&
                <div className={styles.multimedia}>
                    <MultimediaSection multimediaSlides={multimediaSlides} link={`/multimedia/${categories[0]?.data[router.locale]?.alias}`}/>
                    <Link href={`/multimedia/${categories[0]?.data[router.locale]?.alias}`}>
                        <div className={styles.graphicElement}>
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                        </div>
                    </Link>
                </div>
            }
            <CommercialBlock commercialItem={shuffledAds[3]} isGoogleAdDesktop={true}/>
            <FourthSection categoriesArticles={categoriesArticles} smallCommercialItem={shuffledAds[5]} largeCommercialItem={shuffledAds[4]}/>
            <FifthSection
                categoriesArticles={categoriesArticles}
                commercialItem={shuffledAds[3]}
                smallCommercialItem={shuffledAds[6]}
                commercialItemSecond={shuffledAds[4]}
            />
            <button className={styles.upButton} onClick={() => window.scrollTo({
                top: 0,
                behavior: 'smooth'
            })}><UpSVG/></button>
        </div>
    );
};

MainPageContent.propTypes = {
    page: PropTypes.object,
    articlesDiscussed: PropTypes.array,
    articles: PropTypes.array,
    photoPosts: PropTypes.object,
    videoPosts: PropTypes.object,
    votesList: PropTypes.array,
    featuredArticles: PropTypes.array,
    featuredPosts: PropTypes.array,
    articlesLast: PropTypes.array
};

export default MainPageContent;
