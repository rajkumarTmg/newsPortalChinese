import React, { useEffect, useRef, useState } from 'react';
import getFormattedDuration from '../../../utils/formatSeconds';
import PropTypes from 'prop-types';

// IMAGES
import StopSVG from '../../../../../../public/images/svg/audioStop.svg';
import PlaySVG from '../../../../../../public/images/svg/audioPlay.svg';
import PauseSVG from '../../../../../../public/images/svg/audioPause.svg';
import VolumeIconSVG from '../../../../../../public/images/svg/volume.svg';
import ReactAudioPlayer, { RHAP_UI } from 'react-h5-audio-player';
// STYLES
import styles from './index.module.scss';
import classNames from 'classnames';
import { useRouter } from 'next/router';
import { FormattedMessage } from 'react-intl';
// import 'react-h5-audio-player/lib/styles.css';
// import 'react-h5-audio-player/lib/styles.less' Use LESS

const AudioPlayer = ({ theme, hideAudioInfo, file, title }) => {
    const [duration, setDuration] = useState(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const [isStopDisabled, setStopDisabled] = useState(true);
    const audioRef = useRef();
    const router = useRouter();

    const handlePlay = () => {
        if (audioRef?.current?.audio.current) {
            if (audioRef.current.audio.current.paused) {
                audioRef.current.audio.current.play();
                setIsPlaying(true);
                setStopDisabled(false);
            } else {
                audioRef.current.audio.current.pause();
                setIsPlaying(false);
            }
        }
    };

    const handleReset = () => {
        if (audioRef?.current?.audio.current) {
            setStopDisabled(true);
            setIsPlaying(false);
            audioRef.current.audio.current.pause();
            audioRef.current.audio.current.currentTime = 0;
        }
    };

    const onLoadedMetaData = () => {
        setDuration(getFormattedDuration(audioRef.current?.audio.current.duration));
    };

    useEffect(() => {
        if (audioRef?.current?.audio?.current) {
            audioRef.current.audio.current.onloadedmetadata = onLoadedMetaData;
            audioRef.current.audio.current.volume = 0.1;
            handleReset();
        }
    }, [audioRef.current, router.pathname]);

    return (
        <div className={classNames(styles.root, {
            [styles[theme]]: theme,
            [styles.isPlaying]: isPlaying,
            [styles.isPaused]: !isPlaying && !!audioRef?.current?.audio?.current?.currentTime,
            [styles.isStopped]: isStopDisabled
        })}>
            <div className={styles.container}>
                <div className={styles.bg}>
                    <img src='/images/audio-bg.png' className={styles.bgImage} alt='background'/>
                </div>
                <ReactAudioPlayer
                    autoPlay={false}
                    src={file}
                    preload='metadata'
                    ref={audioRef}
                    layout={'stacked-reverse'}
                    customIcons={{
                        volume: <VolumeIconSVG className={styles.volumeIcon}/>,
                        volumeMute: <VolumeIconSVG className={styles.volumeIcon}/>
                    }}
                    showJumpControls={false}
                    customProgressBarSection={(isPlaying || !!audioRef?.current?.audio?.current?.currentTime)
                        ? [
                            RHAP_UI.PROGRESS_BAR,
                            RHAP_UI.CURRENT_TIME
                        ]
                        : []}
                    customControlsSection={[
                        RHAP_UI.ADDITIONAL_CONTROLS
                    ]}
                    customAdditionalControls={[
                        <button key={'stop'} className={styles.controlButton} disabled={isStopDisabled} onClick={handleReset}><StopSVG/></button>,
                        <button key={'play'} className={styles.controlButton} disabled={isPlaying} onClick={handlePlay}><PlaySVG/></button>,
                        <button key={'pause'} className={styles.controlButton} disabled={!isPlaying} onClick={handlePlay}><PauseSVG/></button>,
                        <div key={'divider'} className={styles.volumeDivider}></div>,
                        RHAP_UI.VOLUME_CONTROLS
                    ]}
                    customVolumeControls={[RHAP_UI.VOLUME]}
                    footer={duration && !hideAudioInfo &&
                        <div className={styles.audioName}>{title && `${title},`} {duration} <FormattedMessage id='header.mins'/> </div>
                    }
                    autoPlayAfterSrcChange={false}
                    autoplay={false}
                    className={styles.player}
                    // other props here
                />
            </div>
        </div>
    );
};

AudioPlayer.propTypes = {
    hideAudioInfo: PropTypes.bool,
    theme: PropTypes.bool,
    file: PropTypes.string,
    title: PropTypes.string
};

export default React.memo(AudioPlayer);
