import React from 'react';
import { useRouter } from 'next/router';
import PropTypes from 'prop-types';
import dynamic from 'next/dynamic';
import styles from './index.module.scss';
import AsideCommercial from '../AsideCommercial';
import RelatedTopic from '../RelatedTopic';
import QuoteSvg from '../../../../../../../public/images/svg/quote.svg';
import Poll from '../../../Poll';

import { AD_PAGES_ALIASES } from '../../../../../admin/constants/constants';
import classNames from 'classnames';

const ArticleAudio = dynamic(import('../../../ArticleAudio'), {
    ssr: false
});

const LeftSideLarge = ({ article, handleFontSizeClick, votes, leftBarQuote, leftBarAudio, handleVote, leftBarVote, leftBarRecent, leftBarAd, articles }) => {
    const router = useRouter();

    return (
        <div className={styles.root}>
            <div className={styles.audio} ref={leftBarAudio}>
                {
                    article?.data[router.locale]?.audioFile[0]?.path &&
                    <ArticleAudio
                        title={article.data[router.locale]?.audioTitle}
                        file={article.data[router.locale]?.audioFile[0]?.path}
                        theme='article'
                    />
                }
            </div>
            <div className={styles.letters} onClick={handleFontSizeClick}>
                <span>A</span>
                <span>A</span>
            </div>
            {
                article.data[router.locale]?.citationText &&
                    <div className={styles.quote} ref={leftBarQuote}>
                        <QuoteSvg className={styles.icon}/>
                        <p className={styles.quoteText}>
                            {article.data[router.locale]?.citationText}
                        </p>
                        {
                            article.data[router.locale]?.citationAuthor &&
                                <p className={styles.quoteAuthor}> - {article.data[router.locale]?.citationAuthor}</p>
                        }
                    </div>
            }
            {!!votes.length &&
                <div className={classNames(styles.vote, {
                    [styles.noPaddingTop]: article.data[router.locale]?.citationText
                })} ref={leftBarVote}>
                    <div className={styles.voteContent}>
                        <Poll page={AD_PAGES_ALIASES.articlePage} votes={votes} handleVote={handleVote}/>
                    </div>
                </div>
            }
            <div className={styles.sideAd} ref={leftBarAd}>
                <AsideCommercial theme='articlePage'/>
            </div>
            <div className={styles.related} ref={leftBarRecent}>
                <RelatedTopic theme={'articlePage'} articles={articles?.slice(0, 4)}/>
            </div>
        </div>
    );
};

LeftSideLarge.propTypes = {
    article: PropTypes.object,
    handleFontSizeClick: PropTypes.func,
    votes: PropTypes.array,
    handleVote: PropTypes.func,
    leftBarVote: PropTypes.object,
    leftBarRecent: PropTypes.object,
    leftBarAd: PropTypes.object,
    leftBarQuote: PropTypes.object,
    leftBarAudio: PropTypes.object,
    articles: PropTypes.array
};

export default LeftSideLarge;
