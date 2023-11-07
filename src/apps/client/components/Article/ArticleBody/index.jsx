import React, { useEffect, useMemo, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import { useIntl } from 'react-intl';
import styles from './index.module.scss';
// COMPONENTS
import Subscription from './Subscription';
import SubCategory from './SubCategory';
import LeftSide from './LeftSide';
import LeftSideLarge from './LeftSideLarge';
import QuoteSvg from '../../../../../../public/images/svg/quote.svg';
import AuthorBlock from './AuthorBlock';
import { useRouter } from 'next/router';
import TextBlock from './TextBlock';
import classNames from 'classnames';
import CommentsMobile from './CommentsMobile';
import { useWindowSize } from '../../../utils/useWindowSize';
import getVotesForArticle from '../../../services/client/votes/getVotesForArticle';
import { AD_PAGES_ALIASES } from '../../../../admin/constants/constants';
import { getToken, getTokenUser } from '../../../utils/manageToken';
import vote from '../../../services/client/votes/vote';
import setSignInPopup from '../../../store/actions/setSignInPopup';
import { useDispatch, useSelector } from 'react-redux';
import setDraftVote from '../../../store/actions/setDraftVote';
import setSignUpPopup from '../../../store/actions/setSignUpPopup';

const ArticleBody = ({ article, author, fontSize, handleFontSizeClick, handleScrollToComments, bodyRef, /* setIsLoader, isLoader, */ articles, votesList }) => {
    const intl = useIntl();
    const router = useRouter();
    const content = useRef();
    const mainContent = useRef();
    const leftBarQuote = useRef();
    const leftBarQuoteDesk = useRef();
    const leftBarVote = useRef();
    const leftBarVoteDesk = useRef();
    const leftBarAd = useRef();
    const leftBarRecent = useRef();
    const leftBarRecentDesk = useRef();
    const leftBarAudio = useRef();
    const { width } = useWindowSize();
    const [mainContentHeight, setMainContentHeight] = useState(0);
    const [mainContentBottomHeight, setMainContentBottomHeight] = useState(0);
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
    const dispatch = useDispatch();
    const cssLoaded = useSelector(({ application }) => application.loaded);
    const [loaded, setLoaded] = useState(cssLoaded);
    const MOBILE_WIDTH = 1024;
    const DESKTOP_WIDTH = 1440;
    const isTablet = useMemo(() => width <= DESKTOP_WIDTH, [width]);
    // let timeout;
    // const [isLoader, setIsLoader] = useState(false);

    useEffect(() => {
        const timeout = setTimeout(() => {
            setLoaded(cssLoaded);
        }, 1000);

        return () => {
            clearTimeout(timeout);
        };
    }, [cssLoaded]);

    useEffect(() => {
        setVotes(votesList || []);
    }, [votesList]);

    useEffect(() => {
        if (mainContent.current && width && loaded) {
            setMainContentHeight(mainContent?.current?.clientHeight);
            const mainContentBottomHeight = (bodyRef?.current?.querySelector('.commentButtonWrapper')?.clientHeight || 0) +
                (bodyRef?.current?.querySelector('.subscriptionRoot')?.clientHeight || 0) +
                (bodyRef?.current?.querySelector('.tags')?.clientHeight || 0) +
                (bodyRef?.current?.querySelector('.subcategoryRoot')?.clientHeight || 0) +
                (bodyRef?.current?.querySelector('.commentsWrapperMobile')?.clientHeight || 0) +
            30; // .root padding;
            setMainContentBottomHeight(mainContentBottomHeight);
        }
    }, [width, mainContent, article?._id, loaded, bodyRef]);

    useEffect(() => {
        if (width && loaded) {
            checkSidebarFit();
        }
        return () => {
            // clearTimeout(timeout);
        };
        // eslint-disable-next-line max-len
    }, [article?._id, leftBarQuote, leftBarQuoteDesk, leftBarVote, leftBarVoteDesk, leftBarRecent, leftBarRecentDesk, leftBarAd, leftBarAudio, content, mainContentHeight, mainContentBottomHeight, loaded, width, votes]);

    const checkSidebarFit = () => {
        leftBarAd.current?.classList.remove(styles.hidden);
        const ref1 = width <= DESKTOP_WIDTH ? leftBarRecent : leftBarRecentDesk;
        ref1.current?.classList.remove(styles.hidden);
        ref1.current?.children[0]?.children[1].childNodes.forEach((item, i) => {
            item.classList.remove(styles.hidden);
        });
        const ref2 = width <= DESKTOP_WIDTH ? leftBarVote : leftBarVoteDesk;
        ref2.current?.classList.remove(styles.hidden);

        const ref3 = width <= DESKTOP_WIDTH ? leftBarQuote : leftBarQuoteDesk;
        ref3.current?.classList.remove(styles.hidden);
        if (width && width > MOBILE_WIDTH) {
            if (mainContentHeight && mainContentBottomHeight) {
                const quoteHeight = (leftBarQuote.current?.clientHeight || 0) || (leftBarQuoteDesk.current?.clientHeight || 0) || 0;
                const voteHeight = (leftBarVote.current?.clientHeight || 0) || (leftBarVoteDesk.current?.clientHeight || 0) || 0;
                const recentHeight = (leftBarRecent.current?.clientHeight || 0) || (leftBarRecentDesk.current?.clientHeight || 0) || 0;
                const adHeight = leftBarAd.current?.clientHeight || 0;
                const audioHeight = leftBarAudio.current?.clientHeight || 0;
                const lettersHeight = 95;
                const recentBlockRowsGap = 31;

                let leftBarHeightTotal = quoteHeight + voteHeight + recentHeight + adHeight + audioHeight + lettersHeight;

                if (leftBarHeightTotal > (mainContentHeight + mainContentBottomHeight)) {
                    if (leftBarAd.current && adHeight) {
                        leftBarHeightTotal = leftBarHeightTotal - adHeight;
                        leftBarAd.current.classList.add(styles.hidden);
                    }
                    let removedRecentHeight = 0;
                    if (leftBarHeightTotal > (mainContentHeight + mainContentBottomHeight)) {
                        const ref = leftBarRecent.current?.clientHeight ? leftBarRecent : leftBarRecentDesk;
                        if (ref.current && ref.current.clientHeight) {
                            ref.current.children[0]?.children[1].childNodes.forEach((item, i) => {
                                if (leftBarHeightTotal > (mainContentHeight + mainContentBottomHeight)) {
                                    if (i === (ref.current.children[0]?.children[1].childNodes.length - 1)) {
                                        leftBarHeightTotal = leftBarHeightTotal - ref.current.clientHeight - recentBlockRowsGap;
                                        removedRecentHeight = removedRecentHeight + ref.current.clientHeight + recentBlockRowsGap;
                                        ref.current.classList.add(styles.hidden);
                                        return;
                                    }
                                    leftBarHeightTotal = leftBarHeightTotal - item.clientHeight - recentBlockRowsGap;
                                    removedRecentHeight = removedRecentHeight + item.clientHeight + recentBlockRowsGap;
                                    item.classList.add(styles.hidden);
                                }
                            });
                        }
                    }
                    if (leftBarHeightTotal > (mainContentHeight + mainContentBottomHeight)) {
                        const ref = leftBarVote.current?.clientHeight ? leftBarVote : leftBarVoteDesk;

                        if (ref.current && ref.current.clientHeight) {
                            leftBarHeightTotal = leftBarHeightTotal - ref.current.clientHeight;
                            ref.current.classList.add(styles.hidden);
                            leftBarHeightTotal = leftBarHeightTotal + removedRecentHeight;
                            ref1.current?.classList.remove(styles.hidden);
                            ref1.current?.children[0]?.children[1].childNodes.forEach((item, i) => {
                                item.classList.remove(styles.hidden);
                            });

                            if (leftBarHeightTotal > (mainContentHeight + mainContentBottomHeight)) {
                                const ref = leftBarRecent.current?.clientHeight ? leftBarRecent : leftBarRecentDesk;
                                if (ref.current && ref.current.clientHeight) {
                                    ref.current.children[0]?.children[1].childNodes.forEach((item, i) => {
                                        if (leftBarHeightTotal > (mainContentHeight + mainContentBottomHeight)) {
                                            if (i === (ref.current.children[0]?.children[1].childNodes.length - 1)) {
                                                leftBarHeightTotal = leftBarHeightTotal - ref.current.clientHeight - recentBlockRowsGap;
                                                ref.current.classList.add(styles.hidden);
                                                return;
                                            }

                                            leftBarHeightTotal = leftBarHeightTotal - item.clientHeight - recentBlockRowsGap;
                                            item.classList.add(styles.hidden);
                                        }
                                    });
                                }
                            }
                        }
                    }
                    if (leftBarHeightTotal > (mainContentHeight + mainContentBottomHeight)) {
                        const ref = leftBarQuote.current?.clientHeight ? leftBarQuote : leftBarQuoteDesk;

                        if (ref.current && ref.current.clientHeight) {
                            leftBarHeightTotal = leftBarHeightTotal - ref.current.clientHeight;
                            ref.current.classList.add(styles.hidden);
                        }
                    }
                }
            }
        }
    };

    useEffect(() => {
        const timeout = setTimeout(() => {
            // eslint-disable-next-line max-len
            getVotesForArticle({ page: AD_PAGES_ALIASES.articlePage, articleId: article._id, category: article.data[router.locale].category, subcategory: article.data[router.locale].subcategory, ...(user?._id ? { userId: user._id } : {}) })
                .then((response) => {
                    setVotes(response.props.votes);
                });
        }, 0);

        return () => {
            clearTimeout(timeout);
        };
    }, [user, article, router.locale]);

    const handleVote = (values, voteId) => {
        const token = getToken();
        if (user) {
            vote({ variantId: values.variant, voteId: voteId, token, locale: router.locale, path: router.asPath })
                .then(() => {
                    // eslint-disable-next-line max-len
                    getVotesForArticle({ page: AD_PAGES_ALIASES.articlePage, articleId: article._id, category: article.data[router.locale].category, subcategory: article.data[router.locale].subcategory, ...(user?._id ? { userId: user._id } : {}) })
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
        <div className={classNames(styles.root, {
            [styles[`fontSize${fontSize}`]]: fontSize
        })} ref={bodyRef}>
            <div className={styles.main}>
                <LeftSideLarge
                    article={article}
                    handleFontSizeClick={handleFontSizeClick}
                    votes={votesModified}
                    handleVote={handleVote}
                    leftBarVote={leftBarVoteDesk}
                    leftBarRecent={leftBarRecentDesk}
                    leftBarAd={leftBarAd}
                    leftBarAudio={leftBarAudio}
                    leftBarQuote={leftBarQuoteDesk}
                    articles={articles}
                />
                <div className={styles.firstPart}>
                    <div className={styles.authorBlock}>
                        <AuthorBlock author={author} article={article}/>
                    </div>
                    <div
                        className={styles.content}
                        style={{
                            // maxHeight: `${mainContentHeight + mainContentBottomHeight}px`,
                            marginBottom: `-${isTablet ? mainContentBottomHeight : 0}px`
                        }}
                        ref={content}
                    >
                        <React.Fragment>
                            <div className={styles.quote} ref={leftBarQuote}>
                                {
                                    article.data[router.locale]?.citationText &&
                                    <React.Fragment>
                                        <QuoteSvg className={styles.icon}/>
                                        <p className={styles.quoteText}>
                                            {article.data[router.locale]?.citationText}
                                        </p>
                                        {
                                            article.data[router.locale]?.citationAuthor &&
                                            <p className={styles.quoteAuthor}> - {article.data[router.locale]?.citationAuthor}</p>
                                        }
                                    </React.Fragment>
                                }
                            </div>
                            <LeftSide
                                leftBarVote={leftBarVote}
                                leftBarRecent={leftBarRecent}
                                votes={votesModified}
                                handleVote={handleVote}
                                articles={articles}
                            />
                        </React.Fragment>
                        {
                            article.data[router.locale]?.citationText &&
                            <div className={styles.mobileQuoteWrapper}>
                                <div className={styles.quote}>
                                    <QuoteSvg className={styles.icon}/>
                                    <p className={styles.quoteText}>
                                        {article.data[router.locale]?.citationText}
                                    </p>
                                    {
                                        article.data[router.locale]?.citationAuthor &&
                                        <p className={styles.quoteAuthor}> - {article.data[router.locale]?.citationAuthor}</p>
                                    }
                                </div>
                            </div>
                        }
                        <div
                            className={classNames(styles.sectionWrapper, {
                                [styles.withPadding]: article?.data[router.locale]?.audioFile[0]?.path
                            }, 'sectionWrapper')}
                            ref={mainContent}
                            style={{
                                marginBottom: `${isTablet ? mainContentBottomHeight : 0}px`
                            }}
                        >
                            <div className={styles.authorBlock}>
                                <AuthorBlock author={author} article={article}/>
                            </div>
                            {article.data[router.locale]?.description && <React.Fragment>
                                <TextBlock html={article.data[router.locale]?.description} isOldSiteArticle={article.data[router.locale]?.isOldSiteArticle}/>
                            </React.Fragment>}
                        </div>
                    </div>
                </div>
                <div className={classNames(styles.commentButtonWrapper, 'commentButtonWrapper')}>
                    <button className={styles.commentButton} onClick={handleScrollToComments}>{intl.formatMessage({ id: 'common.comments' })}</button>
                </div>
                <Subscription/>
                <p className={classNames(styles.tags, 'tags')}>{intl.formatMessage({ id: 'common.tags' })}: {article.data[router.locale]?.tags}</p>
                <SubCategory article={article}/>
                <div className={classNames(styles.commentsWrapperMobile, 'commentsWrapperMobile')}>
                    <CommentsMobile article={article}/>
                </div>
            </div>
        </div>
    );
};

ArticleBody.propTypes = {
    article: PropTypes.object,
    author: PropTypes.object,
    fontSize: PropTypes.number,
    handleFontSizeClick: PropTypes.func,
    handleScrollToComments: PropTypes.func,
    bodyRef: PropTypes.object,
    // setIsLoader: PropTypes.func,
    // isLoader: PropTypes.bool,
    articles: PropTypes.array,
    votesList: PropTypes.array
};

export default ArticleBody;
