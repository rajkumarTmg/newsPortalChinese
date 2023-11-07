import React from 'react';
import PropTypes from 'prop-types';
import styles from './index.module.scss';
import RelatedTopic from '../RelatedTopic';
import Poll from '../../../Poll';

import { AD_PAGES_ALIASES } from '../../../../../admin/constants/constants';

const LeftSide = ({ leftBarVote, leftBarRecent, votes, handleVote, articles }) => {
    return (
        <div className={styles.root}>
            {!!votes.length &&
                <div className={styles.vote} ref={leftBarVote}>
                    <Poll page={AD_PAGES_ALIASES.articlePage} votes={votes} handleVote={handleVote} additionIdForLabel='smallDesktop'/>
                </div>
            }
            <div className={styles.related} ref={leftBarRecent}>
                <RelatedTopic theme={'articlePage'} articles={articles?.slice(0, 4)}/>
            </div>
        </div>
    );
};

LeftSide.propTypes = {
    leftBarVote: PropTypes.object,
    leftBarRecent: PropTypes.object,
    votes: PropTypes.array,
    handleVote: PropTypes.func,
    articles: PropTypes.array
};

export default LeftSide;
