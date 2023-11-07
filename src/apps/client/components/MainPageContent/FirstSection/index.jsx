import React from 'react';
import styles from './index.module.scss';
import LastArticles from './LastArticles';
import HotNews from './HotNews';
import PropTypes from 'prop-types';

const FirstSection = ({ articles, featuredMain, featuredSub, featuredBottom, featuredVideo, featuredVote, votes, handleVote, articlesLast }) => {
    return (
        <div className={styles.root}>
            <LastArticles theme='hotNews' articles={articlesLast} votes={votes}/>
            <HotNews
                articles={articles}
                featuredMain={featuredMain}
                featuredSub={featuredSub}
                featuredBottom={featuredBottom}
                featuredVideo={featuredVideo}
                featuredVote={featuredVote}
                votes={votes}
                handleVote={handleVote}
            />
        </div>
    );
};

FirstSection.propTypes = {
    articles: PropTypes.array,
    articlesLast: PropTypes.array,
    featuredMain: PropTypes.array,
    featuredSub: PropTypes.array,
    featuredBottom: PropTypes.array,
    featuredVideo: PropTypes.array,
    featuredVote: PropTypes.array,
    votes: PropTypes.array,
    handleVote: PropTypes.func
};

export default FirstSection;
