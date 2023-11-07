import React from 'react';
import styles from './index.module.scss';
import LargeArticleCard from '../../LargeArticleCard';
import SmallArticleCard from '../../SmallArticleCard';
import PropTypes from 'prop-types';
import Poll from '../../Poll';

import { AD_PAGES_ALIASES } from '../../../../admin/constants/constants';
import { FormattedMessage } from 'react-intl';

const Introduction = ({ articles, categories, votes, handleVote }) => {
    return (
        <div className={styles.root}>
            {
                (!articles.length) &&
                <div className={styles.noContent}>
                    <FormattedMessage id='nocontent.title'/>
                </div>
            }
            <div className={styles.articles}>
                <div className={styles.largeArticleCard}>
                    {
                        articles[0] &&
                        <LargeArticleCard withStats={true} theme='categoryPage' article={articles[0]} categories={categories}/>
                    }
                    <div className={styles.largeArticleCardTablet}>
                        {
                            articles[4] &&
                            <LargeArticleCard withStats={true} theme='categoryPage' article={articles[4]} categories={categories}/>
                        }
                    </div>
                </div>
                <div className={styles.smallArticles}>
                    {articles.slice(1, 4).map((article) => (
                        <div className={styles.smallArticle} key={article?._id}>
                            <SmallArticleCard
                                theme='categoryPage'
                                article={article}
                            />
                        </div>
                    ))}

                </div>
                {!!votes.length &&
                    <div className={styles.poll}>
                        <div className={styles.linesWrapper}>
                            <span className={styles.line}/>
                            <span className={styles.line}/>
                            <span className={styles.line}/>
                            <span className={styles.line}/>
                        </div>
                        <Poll
                            page={AD_PAGES_ALIASES.categoryPage}
                            votes={votes}
                            handleVote={handleVote}
                            additionIdForLabel='categoryPageMobile'
                        />
                    </div>
                }
            </div>
        </div>
    );
};

Introduction.propTypes = {
    articles: PropTypes.array,
    categories: PropTypes.array,
    votes: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
    handleVote: PropTypes.func
};

export default Introduction;
