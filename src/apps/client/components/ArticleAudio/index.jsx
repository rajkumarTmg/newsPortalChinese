import React, { useRef, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import getFormattedDuration from '../../utils/formatSeconds';
import styles from './index.module.scss';
import VolumeSVG from '../../../../../public/images/svg/readPlay.svg';
import ReadWaves from '../../../../../public/images/svg/readWaves.svg';
import ReactAudioPlayer, { RHAP_UI } from 'react-h5-audio-player';
import StopSVG from '../../../../../public/images/svg/audioStop.svg';
import PauseSVG from '../../../../../public/images/svg/audioPause.svg';
import PlaySVG from '../../../../../public/images/svg/audioPlay.svg';
import { useRouter } from 'next/router';
import { FormattedMessage } from 'react-intl';

const ArticleAudio = ({ theme, title, file }) => {
    const [progress, setProgress] = useState(0);
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
            audioRef.current.audio.current.ontimeupdate = onProgress;
            audioRef.current.audio.current.volume = 0.1;
            handleReset();
        }
    }, [audioRef.current, router.pathname]);

    const onProgress = () => {
        if (audioRef.current) {
            setProgress(audioRef.current.audio.current.currentTime / audioRef.current.audio.current.duration * 100);
        }
    };

    return (
        <div className={classNames(styles.root, {
            [styles[theme]]: theme,
            [styles.isPlaying]: isPlaying,
            [styles.isPaused]: !isPlaying && !!audioRef?.current?.audio?.current?.currentTime,
            [styles.isStopped]: isStopDisabled
        })}>
            <ReactAudioPlayer
                autoPlay={false}
                src={file}
                preload='metadata'
                ref={audioRef}
                layout={'stacked-reverse'}
                customIcons={{
                    volume: <VolumeSVG className={styles.volumeIcon}/>,
                    volumeMute: <VolumeSVG className={styles.volumeIcon}/>
                }}
                showJumpControls={false}
                customProgressBarSection={(isPlaying || !!audioRef?.current?.audio?.current?.currentTime)
                    ? [
                        RHAP_UI.PROGRESS_BAR,
                        RHAP_UI.CURRENT_TIME
                    ]
                    : []}
                customControlsSection={[
                    RHAP_UI.ADDITIONAL_CONTROLS,
                    RHAP_UI.VOLUME_CONTROLS
                ]}
                customAdditionalControls={[
                    <button key={'stop'} className={styles.controlButton} disabled={isStopDisabled} onClick={handleReset}><StopSVG/></button>,
                    <button key={'play'} className={styles.controlButton} disabled={isPlaying} onClick={handlePlay}><PlaySVG/></button>,
                    <button key={'pause'} className={styles.controlButton} disabled={!isPlaying} onClick={handlePlay}><PauseSVG/></button>
                ]}
                customVolumeControls={[RHAP_UI.VOLUME]}
                autoPlayAfterSrcChange={false}
                autoplay={false}
                className={styles.player}
                // other props here
            />
            <div>
                <div className={styles.wavesIcon} >
                    <ReadWaves />
                    <span className={styles.wavesBlue} style={{ width: `${progress}%` }}>
                        <ReadWaves />
                    </span>
                </div>
                {duration &&
                    <div className={styles.readTime}>{title && `${title},`} {duration} <FormattedMessage id='common.minsRead'/> </div>
                }
            </div>
        </div>

    );
};

ArticleAudio.propTypes = {
    theme: PropTypes.string,
    title: PropTypes.string,
    file: PropTypes.string
};

ArticleAudio.defaultProps = {
    file: '/mockAudio.mp3',
    title: ''
};

export default React.memo(ArticleAudio);
