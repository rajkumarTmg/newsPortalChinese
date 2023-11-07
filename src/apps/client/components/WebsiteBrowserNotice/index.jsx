import React from 'react';
import styles from './index.module.scss';
import PropTypes from 'prop-types';
import { useRouter } from 'next/router';
import StyleRenderer from '../StyleRenderer';

const WebsiteBrowserNotice = ({ page }) => {
    const router = useRouter();

    return (
        <div className={styles.root}>
            <div className={styles.content}>
                <div className={styles.text}>
                    {
                        page?.data[router.locale].text &&
                        <StyleRenderer html={page.data[router.locale].text} newClass={'privacy'}/>
                    }
                </div>
            </div>
        </div>
    );
};

WebsiteBrowserNotice.propTypes = {
    page: PropTypes.object
};

export default WebsiteBrowserNotice;
