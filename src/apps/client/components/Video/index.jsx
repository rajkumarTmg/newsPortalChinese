import React, { useState, useRef } from 'react';
import styles from './index.module.scss';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import Lazy from '../Lazy';
// IMAGES
import VideoIconSVG from '../../../../../public/images/svg/video.svg';

const Video = ({ theme, src, description, preview }) => {
    const videoRef = useRef();
    const [isPlaying, setPlaying] = useState(false);

    const handlePlay = () => {
        videoRef.current.paused ? videoRef.current.play() : videoRef.current.pause();
        setPlaying((prev) => !prev);
    };

    const rootClassNames = classNames(styles.root, {
        [styles[theme]]: theme
    });

    return (
        <div className={rootClassNames}>
            <video className={styles.video} ref={videoRef}>
                <source src={src} type="video/mp4"/>
            </video>
            <div className={styles.preview}>
                <Lazy>
                    <img src={preview} alt='preview' className={classNames(styles.previewImage, {
                        [styles.hidden]: isPlaying
                    })} />
                </Lazy>
                <button className={classNames(styles.playButton, {
                    [styles.hidden]: isPlaying,
                    [styles.played]: isPlaying,
                    [styles.paused]: !isPlaying
                })} onClick={handlePlay}/>
                <p className={classNames(styles.description, {
                    [styles.hidden]: isPlaying
                })}><span className={styles.icon}><VideoIconSVG/></span>{description}</p>
                <p className={styles.metaInfo}>10:15 Jan 03, 2020</p>
            </div>
        </div>
    );
};

Video.propTypes = {
    theme: PropTypes.string,
    src: PropTypes.string,
    description: PropTypes.string,
    preview: PropTypes.string
};

Video.defaultProps = {
    description: '',
    preview: '/images/last-articles-mock.png'
};

export default Video;
