import React from 'react';
import { useRouter } from 'next/router';
import styles from './index.module.scss';
import Poll from '../../../Poll';
import LastArticles from '../LastArticles';
import PropTypes from 'prop-types';
import { AD_PAGES_ALIASES } from '../../../../../admin/constants/constants';
import { useSelector } from 'react-redux';
import Link from 'next/link';
import Lazy from '../../../Lazy';
import classNames from 'classnames';

const PollBlock = ({ articles, featuredVote, votes, handleVote }) => {
    const router = useRouter();
    const categories = useSelector(({ data }) => data.categories);

    return (
        <div className={styles.root}>
            <div className={styles.poll}>
                { votes?.length
                    ? <Poll page={AD_PAGES_ALIASES.mainPage} votes={votes} handleVote={handleVote}/>
                    : votes !== null && <div className={classNames(styles.featured, {
                        [styles.noVotes]: !votes?.length
                    })}>
                        {
                            featuredVote.map((article, i) => {
                                const category = categories.find((category) => category._id === article.data[router.locale]?.category);
                                return <div className={styles.articleItem} key={i}>
                                    <div className={styles.articleImage}>
                                        <Link href={`/${article.data[router.locale]?.alias}`}>
                                            <a className={styles.largeNewsImage}>
                                                <Lazy>
                                                    <picture>
                                                        <source srcSet={article.data[router.locale]?.avatar[0].pathWebp} type='image/webp' />
                                                        <img src={article.data[router.locale]?.avatar[0].path} alt={article.data[router.locale]?.title} />
                                                    </picture>
                                                </Lazy>
                                            </a>
                                        </Link>
                                        <Link href={`/categories/${category?.data[router.locale]?.alias}`}>
                                            <a className={styles.category}>{category?.data[router.locale]?.name}</a>
                                        </Link>
                                        <Lazy heightAuto={true}>
                                            <div className={styles.mainNewsItemDescWrap}>
                                                <Link href={`/${article.data[router.locale]?.alias}`}>
                                                    <a className={styles.articleTitleInner}>{article.data[router.locale]?.title}</a>
                                                </Link>
                                            </div>
                                        </Lazy>
                                    </div>
                                    <Lazy heightAuto={true}>
                                        <Link href={`/${article.data[router.locale]?.alias}`}>
                                            <a className={styles.articleTitle}>{article.data[router.locale]?.title}</a>
                                        </Link>
                                    </Lazy>
                                    <div dangerouslySetInnerHTML={{ __html: article.data[router.locale]?.shortDescription }}
                                        className={styles.articleDesc}
                                    ></div>
                                </div>;
                            })
                        }
                    </div>
                }
                {
                    votes === null && <div></div>
                }
            </div>
            <div className={styles.hotNews}>
                <LastArticles theme='latest' articles={articles}/>
            </div>
        </div>
    );
};

PollBlock.propTypes = {
    articles: PropTypes.array,
    featuredVote: PropTypes.array,
    votes: PropTypes.array,
    handleVote: PropTypes.func
};

export default PollBlock;
