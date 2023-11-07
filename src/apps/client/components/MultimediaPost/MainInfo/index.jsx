import React, { useEffect, useRef, useState } from 'react';
import styles from './index.module.scss';
import CustomVideoPlayer from '../../CustomVideoPlayer';
import CommentSVG from '../../../../../../public/images/svg/comments.svg';
import LikeSVG from '../../../../../../public/images/svg/like.svg';
import ShareSVG from '../../../../../../public/images/svg/share.svg';
import PropTypes from 'prop-types';
import StyleRenderer from '../../StyleRenderer';
import { useRouter } from 'next/router';
import classNames from 'classnames';
import formatDate from '../../../utils/formatDate';
// IMAGES
import ArrowBasicIconSVG from '../../../../../../public/images/svg/arrowBasic.svg';
import MoreIconSVG from '../../../../../../public/images/svg/more.svg';
// import StarSVG from '../../../../../../public/images/svg/star.svg';
import Lazy from '../../Lazy';
import { FormattedMessage, useIntl } from 'react-intl';
import AuthorWebp from '../../../../../../public/images/NSC-Author-Book.webp';
import AuthorPNG from '../../../../../../public/images/NSC-Author-Book.png';

const MainInfo = ({ post, isLiked, author, comments, handleLike }) => {
    const router = useRouter();
    const ref = useRef();
    const intl = useIntl();
    const [opened, setOpened] = useState(false);

    const handleOpenHiddenText = () => {
        setOpened(true);
    };

    useEffect(() => {
        if (ref.current && ref.current.children[0]?.children.length === 1) {
            setOpened(true);
        }
    }, [ref.current]);

    return (
        <div className={styles.root}>
            <div className={styles.mainContent}>
                <div className={styles.wrapper}>
                    <div className={styles.video}>
                        <p className={styles.metaInfo}>{formatDate(post.data[router.locale]?.date, router.locale)}</p>
                        {
                            post.type === 'video' &&
                            <div className={styles.videoPlayer}>
                                <Lazy>
                                    <CustomVideoPlayer
                                        src={
                                            post.data[router.locale]?.videoLink ||
                                            (post.data[router.locale]?.videoFile?.length && post.data[router.locale]?.videoFile[0].path)
                                        }
                                        preview={post.data[router.locale]?.videoPreview[0]?.path}
                                    />
                                </Lazy>
                            </div>
                        }
                        {
                            post.type === 'photo' &&
                            <div className={styles.photoContainer}>
                                <Lazy>
                                    <picture>
                                        <source srcSet={post.data[router.locale]?.avatar[0].pathWebp} type='image/webp' />
                                        <img src={post.data[router.locale]?.avatar[0].path} alt={post.data[router.locale]?.title} />
                                    </picture>
                                </Lazy>
                            </div>
                        }
                        <h1 className={styles.title}>{post.data[router.locale]?.title}</h1>
                        <div className={styles.date}>
                            <p>{post.views?.toLocaleString() || 0} <FormattedMessage id='common.views'/></p>
                            <p>{formatDate(post.data[router.locale]?.date, router.locale)}</p>
                        </div>
                        <div className={styles.stats}>
                            {/* <p className={styles.mobileFollows}>1235 follows</p> */}
                            <div className={styles.subscribe}>
                                <p className={styles.views}>{post.views?.toLocaleString() || 0} <FormattedMessage id='common.views'/></p>
                                {/* <button className={styles.subscribeButton}><FormattedMessage id='common.subscribe' /></button> */}
                            </div>
                            <div className={styles.reactions}>
                                <div className={styles.reactionItem}>
                                    <div><CommentSVG width={25} height={25}/></div>
                                    <div className={styles.count}>{post.comments?.count}</div>
                                </div>
                                <div className={classNames(styles.reactionItem, {
                                    [styles.liked]: isLiked
                                })}>
                                    <div className={styles.likeButton} onClick={handleLike(post._id)}>
                                        <LikeSVG width={25} height={25}/>
                                    </div>
                                    <span className={styles.count}>{post.likes?.count}</span>
                                </div>
                                <div className={styles.reactionItem}>
                                    <div><ShareSVG width={25} height={25}/></div>
                                    <div className={styles.count}>{post.shares?.toLocaleString() || 0}</div>
                                </div>
                            </div>
                        </div>
                        <div className={styles.postInfo}>
                            {
                                author &&
                                <div className={styles.author}>
                                    <div className={styles.avatar}>
                                        {
                                            author?.data[router.locale]?.avatar[0]
                                                ? <Lazy>
                                                    <picture>
                                                        <source srcSet={author?.data[router.locale]?.avatar[0].pathWebp} type='image/webp' />
                                                        <img src={author?.data[router.locale]?.avatar[0].path} alt={'author'} />
                                                    </picture>
                                                </Lazy>
                                                : <Lazy>
                                                    <picture>
                                                        <source srcSet={AuthorWebp} type='image/webp' />
                                                        <img src={AuthorPNG} alt={'author'} />
                                                    </picture>
                                                </Lazy>
                                                // eslint-disable-next-line max-len
                                                // : <div className={styles.defaultAvatar}>{author?.data[router.locale]?.name.split(' ').map((item) => item.slice(0, 1)).join()}</div>
                                        }
                                    </div>
                                    <p className={styles.name}>{author?.data[router.locale]?.name}</p>
                                    {/* <p className={styles.followers}>1235 <FormattedMessage id='common.followers'/></p> */}
                                    {/* <div className={styles.favorite}><StarSVG className={styles.starIcon}/></div> */}
                                </div>
                            }
                            <p className={classNames(styles.postText, {
                                [styles.opened]: opened
                            })} ref={ref}>
                                <StyleRenderer html={post.data[router.locale]?.description}/>
                                {
                                    !opened &&
                                    <span className={styles.arrows} onClick={handleOpenHiddenText}><MoreIconSVG/></span>
                                }
                            </p>
                        </div>
                        <p className={styles.comments}>
                            {/* eslint-disable-next-line max-len */}
                            {!!comments.length && `${comments.length} `}{intl.formatMessage({ id: 'common.comments' })} <ArrowBasicIconSVG className={styles.icon}/>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

MainInfo.propTypes = {
    post: PropTypes.object,
    author: PropTypes.object,
    isLiked: PropTypes.bool,
    comments: PropTypes.array,
    handleLike: PropTypes.func
};

export default MainInfo;
