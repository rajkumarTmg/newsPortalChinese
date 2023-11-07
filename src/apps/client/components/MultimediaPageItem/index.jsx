import React, { useRef, useState } from 'react';
import styles from './index.module.scss';
import CommentSVG from '../../../../../public/images/svg/comments.svg';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { useRouter } from 'next/router';
import { useSelector } from 'react-redux';
import Link from 'next/link';
import formatDateRelative from '../../utils/formatDateRelative';
import ReactPlayer from 'react-player';
import formatSeconds from '../../utils/formatSeconds';
import Lazy from '../Lazy';
import { FormattedMessage } from 'react-intl';
import AuthorWebp from '../../../../../public/images/NSC-Author-Book.webp';
import AuthorPNG from '../../../../../public/images/NSC-Author-Book.png';

const MultimediaPageItem = ({ type, theme, post }) => {
    const router = useRouter();
    const authors = useSelector(({ data }) => data.authors);
    const author = post && authors.find((author) => author._id === post.data[router.locale]?.author);
    const [duration, setDuration] = useState(null);
    const ref = useRef(null);

    const onDuration = () => {
        if (ref.current) {
            setDuration(ref.current.getDuration());
        }
    };

    return (
        <div className={classNames(styles.root, {
            [styles[theme]]: theme
        })}>
            <Link href={`/posts/${post?.data[router.locale]?.alias}`}>
                <a className={styles.preview}>
                    {type === 'video' && <span className={styles.playIcon}/>}
                    {
                        type === 'photo'
                            ? <Lazy>
                                <picture>
                                    <source srcSet={post?.data[router.locale]?.avatar[0]?.pathWebp} type='image/webp' />
                                    <img src={post?.data[router.locale]?.avatar[0]?.path} alt={post?.data[router.locale]?.title} />
                                </picture>
                            </Lazy>
                            : !!post?.data[router.locale]?.videoPreview &&
                            !!post?.data[router.locale]?.videoPreview.length &&
                            <Lazy>
                                <picture>
                                    <source srcSet={post?.data[router.locale]?.videoPreview[0]?.pathWebp} type='image/webp' />
                                    <img src={post?.data[router.locale]?.videoPreview[0]?.path} alt={post?.data[router.locale]?.title} />
                                </picture>
                            </Lazy>
                    }
                    { type === 'video' &&
                        (theme === 'multimediaPage' || theme === 'columnConcern' || theme === 'hotspot' || theme === 'postPage') &&
                        <p className={classNames(styles.duration, {
                            [styles.visible]: duration
                        })}>{formatSeconds(duration)}</p>
                    }
                    { type === 'video' && <div className={classNames(styles.player, {
                        [styles.playerPreview]: !post?.data[router.locale]?.videoPreview ||
                        !post?.data[router.locale]?.videoPreview.length
                    })}>
                        <Lazy>
                            <ReactPlayer
                                playIcon={<div/>}
                                ref={ref}
                                url={post?.data[router.locale]?.videoLink}
                                playing={false}
                                onReady={onDuration}
                                config={{
                                    file: {
                                        attributes: {
                                            preload: 'metadata'
                                        }
                                    }
                                }}
                            />
                        </Lazy>
                    </div>}
                </a>
            </Link>
            <div className={styles.info}>
                {
                    author &&
                    <div className={styles.authorWrapper}>
                        <div className={styles.authorAvatar}>
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
                        <p className={styles.authorName}>{author?.data[router.locale]?.name}</p>
                    </div>
                }
                <div className={styles.mainInfo}>
                    <Link href={`/posts/${post?.data[router.locale]?.alias}`}>
                        <a className={styles.title}>{post?.data[router.locale]?.title}</a>
                    </Link>
                    <p className={styles.stats}>
                        <span className={styles.comments}>
                            <CommentSVG/>
                            {post?.comments.count}
                        </span>
                        <span className={styles.views}>{post.views?.toLocaleString() || 0} <FormattedMessage id='common.views'/></span>
                        <span className={styles.divider}>|</span>
                        <span className={styles.date}>{formatDateRelative(post?.data[router.locale]?.date, router.locale)}</span>
                    </p>
                </div>
            </div>
        </div>
    );
};

MultimediaPageItem.propTypes = {
    type: PropTypes.oneOf(['video', 'image']),
    theme: PropTypes.string,
    post: PropTypes.object
};

export default MultimediaPageItem;
