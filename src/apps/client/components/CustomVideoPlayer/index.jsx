import React, { useState, useRef, useEffect, useMemo } from 'react';
import styles from './index.module.scss';
import ReactPlayer from 'react-player';
import classNames from 'classnames';
import PropTypes from 'prop-types';
// UTILS
import isIOS from '../../utils/isIOS';
// IMAGES
import FullScreenSVG from '../../../../../public/images/svg/fullscreen.svg';
import VideoPlaySVG from '../../../../../public/images/svg/videoPlay.svg';
import VideoPlaySharpSVG from '../../../../../public/images/svg/playSharp.svg';
import VideoLineSVG from '../../../../../public/images/svg/videoLine.svg';
import VideoVolumeSVG from '../../../../../public/images/svg/videoVolume.svg';
import VideoIconSVG from '../../../../../public/images/svg/video.svg';
import Portal from '../Portal/Portal';

const format = (seconds) => {
    if (isNaN(seconds)) {
        return '00:00';
    }
    const date = new Date(seconds * 1000);
    const hh = date.getUTCHours();
    const mm = date.getUTCMinutes();
    const ss = date.getUTCSeconds().toString().padStart(2, '0');
    if (hh) {
        return `${hh}:${mm.toString().padStart(2, '0')}:${ss}`;
    }
    return `${mm}:${ss}`;
};

const CustomVideoPlayer = ({ src, preview, description, theme }) => {
    const [state, setState] = useState({
        playing: false,
        controls: false,
        played: 0,
        muted: false,
        duration: 0,
        volume: 0.5,
        seeking: false
    });
    // for ios only
    const [isFullscreen, setFullscreenState] = useState(false);
    const playerRef = useRef(null);
    const progressRef = useRef(null);
    const playerContainerRef = useRef(null);
    const handlePlayPause = () => {
        setState({ ...state, playing: !state.playing });
    };
    const isIOSDevice = useMemo(() => isIOS(), []);

    const hideCustomControls = ['facebook'].some(string => src.includes(string)); // some players are hardly customizable
    const handleFastForward = () => {
        playerRef.current.seekTo(playerRef.current.getCurrentTime() + 10);
    };

    const updateProgressBar = (value) => {
        if (progressRef?.current) {
            progressRef.current.style.backgroundSize = (value - 0) * 100 / 100 + '% 100%';
        }
    };

    const handleProgress = (changeState) => {
        const value = changeState.played * 100;
        updateProgressBar(value);
        if (!state.seeking) {
            setState({ ...state, ...changeState });
        }
    };

    const handleSeekMouseDown = e => {
        setState({ ...state, seeking: true });
    };

    const handleSeekChange = e => {
        updateProgressBar((e.target.value * 100));
        setState({ ...state, played: parseFloat(e.target.value) });
    };

    const handleSeekMouseUp = e => {
        setState({ ...state, seeking: false });
        updateProgressBar((e.target.value * 100));
        playerRef.current.seekTo(parseFloat(e.target.value));
    };

    const handleVolumeChange = e => {
        const volumeValue = parseFloat(e.target.value);

        setState({ ...state, volume: volumeValue });
    };

    const handleMute = () => {
        setState({ ...state, muted: !state.muted });
    };

    const handleVolumeMouseUp = (e) => {
        const volumeValue = parseFloat(e.target.value);
        if (volumeValue === 0) {
            setState({ ...state, muted: true });
        } else {
            setState({ ...state, muted: false });
        }
    };

    const handleIOSFullscreen = () => {
        setFullscreenState(state => {
            document.body.style.overflow = state ? 'auto' : 'hidden';
            return !state;
        });
    };

    const handleFullscreen = () => {
        const ref = playerContainerRef.current;
        if (!document.fullscreenElement) {
            if (ref.mozRequestFullScreen) { /* Firefox */
                ref.mozRequestFullScreen();
            } else if (ref.requestFullscreen) { /* Chrome, Safari and Opera */
                ref.requestFullscreen();
            } else if (ref.webkitRequestFullscreen) { /* Chrome, Safari and Opera */
                ref.webkitRequestFullscreen();
            } else if (ref.msRequestFullscreen) { /* IE/Edge */
                ref.msRequestFullscreen();
            }
        } else {
            if (document.mozCancelFullScreen) { /* Firefox */
                document.mozCancelFullScreen();
            } else if (document.exitFullscreen) { /* Chrome, Safari and Opera */
                document.exitFullscreen();
            } else if (document.exitFullscreen) { /* Chrome, Safari and Opera */
                document.exitFullscreen();
            } else if (document.webkitExitFullscreen) { /* Chrome, Safari and Opera */
                document.webkitExitFullscreen();
            } else if (document.msExitFullscreen) { /* IE/Edge */
                document.msExitFullscreen();
            }
        }
    };

    const handleClickFullscreen = () => {
        if (isIOSDevice) {
            handleIOSFullscreen();
        } else {
            handleFullscreen();
        }
    };

    const elapsedTime =
    format(playerRef.current
        ? playerRef.current.getCurrentTime()
        : 0
    );

    useEffect(() => {
        if (isIOSDevice) {
            const iosEscEvent = (e) => {
                if (e.key === 'Escape') {
                    setFullscreenState(false);
                }
            };

            document.addEventListener('keydown', iosEscEvent);

            return () => document.removeEventListener('keydown', iosEscEvent);
        }
    }, [isIOSDevice]);

    useEffect(() => {
        if (playerRef.current?.player.isPlaying !== state.playing) {
            setState({ ...state, playing: playerRef.current?.player.isPlaying });
        }
    }, [playerRef.current?.player.isPlaying]);

    // eslint-disable-next-line no-lone-blocks
    { /*
         const handleScreenOrientation = () => {
        handleClickFullscreen();
        if (screen.orientation.type === 'portrait-primary') {
            screen.orientation.lock('landscape-primary');
        } else {
            screen.orientation.unlock();
        }
    };
    */ }

    const rootClassNames = classNames(styles.root, {
        [styles[theme]]: theme,
        [styles.fullscreen]: isFullscreen
    });

    return (
        <Portal parentNode={document.body} styles={{ wrapper: styles.portalWrapper }} active={isFullscreen}>
            <div
                ref={playerContainerRef}
                className={rootClassNames}
            >
                {
                    preview &&
            <div className={classNames(styles.preview, {
                [styles.hidden]: state.playing || (!!state.played && !state.playing)
            })}>
                <img src={preview} alt='preview'/>
            </div>
                }
                {
                    (theme === 'articlePage' && description) &&
                <p className={classNames(styles.description, {
                    [styles.hidden]: state.playing || (!!state.played && !state.playing)
                })}><span className={styles.icon}><VideoIconSVG/></span>{description}</p>
                }
                <div className={styles.player}>
                    <ReactPlayer
                        ref={playerRef}
                        width="100%"
                        height="100%"
                        url={src}
                        playing={state.playing}
                        controls={false}
                        volume={state.volume}
                        muted={state.muted}
                        onProgress={handleProgress}
                        onReady={() =>
                            setState({ ...state, duration: playerRef.current?.getDuration() })
                        }
                        config={{
                            file: {
                                attributes: {
                                    preload: 'metadata'
                                }
                            }
                        }}
                    />
                </div>
                { (!hideCustomControls || (hideCustomControls && preview && (!state.playing && !state.played))) &&
                <React.Fragment>
                    <div className={classNames(styles.playButton, {
                        [styles.hidden]: state.playing,
                        [styles.played]: state.playing,
                        [styles.paused]: !state.playing
                    })}>
                        <button className={styles.button} onClick={handlePlayPause}>
                            {state.playing
                                ? <span><VideoLineSVG/><VideoLineSVG/></span>
                                : <span><VideoPlaySharpSVG/></span>
                            }
                        </button>
                    </div>
                    <div className={styles.controls}>
                        <div className={styles.progressWrapper}>
                            <div className={styles.progressInner}>
                                <input
                                    ref={progressRef}
                                    type='range'
                                    min={0}
                                    max={1}
                                    step='any'
                                    value={state.played}
                                    onMouseDown={handleSeekMouseDown}
                                    onChange={handleSeekChange}
                                    onMouseUp={handleSeekMouseUp}
                                    className={styles.progress}
                                />
                            </div>
                        </div>
                        <div className={styles.controlsWrapper}>
                            <button
                                className={styles.controlPlay}
                                onClick={handlePlayPause}>
                                {state.playing
                                    ? <span><VideoLineSVG/><VideoLineSVG/></span>
                                    : <span><VideoPlaySVG/></span>
                                }
                            </button>
                            <button
                                className={styles.controlForward}
                                onClick={handleFastForward}>
                                <span><VideoPlaySVG/><VideoLineSVG/></span>
                            </button>
                            <div className={styles.volumeWrapper}>
                                <button
                                    onClick={handleMute}
                                    className={styles.volume}
                                >
                                    {state.muted
                                        ? <><VideoVolumeSVG/></>
                                        : <><VideoVolumeSVG/></>
                                    }
                                </button>
                                <input
                                    className={styles.inputVolume}
                                    type='range'
                                    min={0} max={1}
                                    step='any'
                                    value={state.volume}
                                    onChange={handleVolumeChange}
                                    onMouseUp={handleVolumeMouseUp} />
                            </div>
                            <p className={styles.timeInfo}>
                                {elapsedTime}/{Math.floor(state.duration / 60) + ':' + ('0' + Math.floor(state.duration % 60)).slice(-2)}
                            </p>
                        </div>
                        <div className={styles.buttonsWrapper}>
                            <button
                                className={styles.fullScreen}
                                onClick={handleClickFullscreen}
                            >
                                <FullScreenSVG/>
                            </button>
                            {/* <button onClick={handleScreenOrientation}>album</button> */}
                        </div>
                    </div>
                </React.Fragment>
                }
            </div>
        </Portal>
    );
};

CustomVideoPlayer.propTypes = {
    src: PropTypes.string,
    preview: PropTypes.string,
    description: PropTypes.string,
    theme: PropTypes.string
};

export default CustomVideoPlayer;
