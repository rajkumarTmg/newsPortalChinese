import React, { useEffect, useState } from 'react';
import styles from './index.module.scss';
import LikeSVG from '../../../../../../public/images/svg/like.svg';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { useRouter } from 'next/router';
import Lazy from '../../Lazy';
import formatDateRelative from '../../../utils/formatDateRelative';
// IMAGES
import MoreIconSVG from '../../../../../../public/images/svg/more.svg';
// import { FormattedMessage } from 'react-intl';

const CommentItem = ({ comment, likes, handleLike }) => {
    const [isLiked, setIsLiked] = useState(!!likes.filter((id) => id === comment._id).length);

    useEffect(() => {
        setIsLiked(!!likes.filter((id) => id === comment._id).length);
    }, [likes]);

    const router = useRouter();
    return (
        <div className={styles.root}>
            <div className={styles.mobileAvatar}>
                <Lazy>
                    <div className={styles.defaultAvatar}>{comment.userName.split(' ').map((item) => item.slice(0, 1)).join()}</div>
                </Lazy>
            </div>
            <div className={styles.metaInfo}>
                <div className={styles.avatar}>
                    <Lazy>
                        <div className={styles.defaultAvatar}>{comment.userName.split(' ').map((item) => item.slice(0, 1)).join()}</div>
                    </Lazy>
                </div>
                <div className={styles.author}>
                    <p className={styles.name}>{comment.userName}
                        {/* <span className={styles.followers}>123 <FormattedMessage id='common.follows'/></span> */}
                    </p>
                    <p className={styles.date}>{formatDateRelative(comment.createdAt, router.locale)}</p>
                </div>
            </div>
            <p className={styles.text}>{comment.text}
                <span><MoreIconSVG className={styles.icon}/></span>
            </p>
            <div className={styles.reactions}>
                <div className={classNames(styles.reaction, {
                    [styles.liked]: isLiked
                })}>
                    <div className={styles.likeButton} onClick={handleLike(comment._id)}>
                        <LikeSVG width={25} height={25}/>
                    </div>
                    <span className={styles.count}>{comment.likes?.count}</span>
                </div>
                {/*
                <div className={styles.reaction}>
                    <LikeSVG/>
                    <span className={styles.count}>500</span>
                </div>
                <p className={styles.reply}><FormattedMessage id='common.reply'/> <span>23</span></p>
                */}
            </div>
        </div>
    );
};

CommentItem.propTypes = {
    comment: PropTypes.object,
    likes: PropTypes.array,
    handleLike: PropTypes.func
};

export default CommentItem;
