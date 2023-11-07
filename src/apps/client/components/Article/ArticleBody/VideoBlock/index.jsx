import React from 'react';
import PropTypes from 'prop-types';
import styles from './index.module.scss';
import CustomVideoPlayer from '../../../CustomVideoPlayer';
import Lazy from '../../../Lazy';

const VideoBlock = ({ data }) => {
    return (
        <div className={styles.root}>
            <Lazy>
                <CustomVideoPlayer
                    src={data.videoLink}
                    preview={data.videoPreview[0].path}
                    description={data.videoDescription}
                    theme='articlePage'
                />
            </Lazy>
        </div>
    );
};

VideoBlock.propTypes = {
    data: PropTypes.object
};

export default VideoBlock;
