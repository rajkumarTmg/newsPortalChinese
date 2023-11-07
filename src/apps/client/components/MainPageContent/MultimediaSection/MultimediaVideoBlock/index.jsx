import React, { useRef, useState } from 'react';
import styles from './index.module.scss';
import PropTypes from 'prop-types';
import Link from 'next/link';
import { useRouter } from 'next/router';
import formatDate from '../../../../utils/formatDate';
import classNames from 'classnames';
import ReactPlayer from 'react-player';
import formatSeconds from '../../../../utils/formatSeconds';
import Lazy from '../../../Lazy';

const MultimediaBlock = ({ theme, item }) => {
    const router = useRouter();
    const [duration, setDuration] = useState(null);
    const ref = useRef(null);

    const onDuration = () => {
        if (ref.current) {
            setDuration(ref.current.getDuration());
        }
    };

    return (
        <Link href={`/posts/${item.data[router.locale]?.alias}`}>
            <a className={classNames(styles.videoLink, {
                [styles[theme]]: theme
            })}>
                <span className={styles.playIcon}/>
                {
                    !!item?.data[router.locale]?.videoPreview &&
                    !!item?.data[router.locale]?.videoPreview.length &&
                    <Lazy overflow={true}>
                        <picture>
                            <source srcSet={item.data[router.locale]?.videoPreview[0]?.pathWebp} type='image/webp' />
                            <img src={item.data[router.locale]?.videoPreview[0]?.path} alt={item.data[router.locale]?.title} />
                        </picture>
                    </Lazy>
                }
                <div className={styles.info}>
                    <p className={styles.videoLinkDesc}>{item.data[router.locale]?.title}</p>
                    <div className={styles.metaData}>
                        <span className={classNames(styles.time, {
                            [styles.visible]: duration
                        })}>
                            {formatSeconds(duration)}
                        </span>
                        <span className={styles.date}>
                            {formatDate(item.data[router.locale]?.date, router.locale)}
                        </span>
                    </div>
                </div>
                <div className={classNames(styles.player, {
                    [styles.playerPreview]: !item?.data[router.locale]?.videoPreview ||
                    !item?.data[router.locale]?.videoPreview.length
                })}>
                    <Lazy overflow={true}>
                        <ReactPlayer
                            playIcon={<div/>}
                            ref={ref}
                            url={item?.data[router.locale]?.videoLink}
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
                </div>
            </a>
        </Link>
    );
};
MultimediaBlock.propTypes = {
    theme: PropTypes.string,
    item: PropTypes.object
};

export default MultimediaBlock;
