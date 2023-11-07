import React from 'react';
import styles from './index.module.scss';
import CommentSVG from '../../../../../../public/images/svg/comments.svg';
import LikeSVG from '../../../../../../public/images/svg/like.svg';
import ShareSVG from '../../../../../../public/images/svg/share.svg';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { useRouter } from 'next/router';
import Share from '../ArticleContent/Share';

const SideStatistic = ({ article, handleLike, isLiked, handleFontSizeClick, handleShare }) => {
    const router = useRouter();

    return (
        <div className={styles.root}>
            <div className={styles.statisticItem}>
                <div><CommentSVG width={35} height={25}/></div>
                <div className={styles.count}>{article.comments?.count}</div>
            </div>
            <div className={classNames(styles.statisticItem, {
                [styles.liked]: isLiked
            })}>
                <div className={styles.likeButton} onClick={handleLike(article._id)}>
                    <LikeSVG width={25} height={25}/>
                </div>
                <div className={styles.count}>{article.likes?.count}</div>
            </div><div className={styles.statisticItem}>
                <div>
                    <Share url={`/${article?.data[router.locale]?.alias}`} onClose={handleShare}>
                        <ShareSVG width={35} height={25}/>
                    </Share>
                </div>
                <div className={styles.count}>{article?.shares?.toLocaleString() || 0}</div>
            </div>
            <div className={styles.letters} onClick={handleFontSizeClick}>
                <span>A</span>
                <span>A</span>
            </div>
        </div>
    );
};

SideStatistic.propTypes = {
    article: PropTypes.object,
    isLiked: PropTypes.bool,
    handleLike: PropTypes.func,
    handleFontSizeClick: PropTypes.func,
    handleShare: PropTypes.func
};

export default SideStatistic;
