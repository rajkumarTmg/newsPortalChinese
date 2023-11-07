import React from 'react';
import PropTypes from 'prop-types';
import styles from './index.module.scss';
// COMPONENTS
import FacebookSvg from '../../../../../public/images/svg/articlesFb.svg';
import TwitterSvg from '../../../../../public/images/svg/articlesTw.svg';
import InstagramSvg from '../../../../../public/images/svg/instagram.svg';
import MailSvg from '../../../../../public/images/svg/mail.svg';
import { InstapaperShareButton, FacebookShareButton, TwitterShareButton, EmailShareButton } from 'react-share';
import classNames from 'classnames';

const Socials = ({ url, onClose, theme }) => {
    const domain = process.env.NEXT_PUBLIC_DOMAIN_URL;

    const onShareWindowClose = () => {
        if (onClose) {
            onClose();
        }
    };

    const rootClassNames = classNames(styles.socials, {
        [styles[theme]]: theme
    });

    return url && (
        <div className={rootClassNames}>
            <div className={styles.socialLink}>
                <FacebookShareButton url={`${domain}${url}`} className={styles.shareLink} onShareWindowClose={onShareWindowClose}>
                    <FacebookSvg />
                </FacebookShareButton>
            </div>
            <div className={styles.socialLink}>
                <TwitterShareButton url={`${domain}${url}`} className={styles.shareLink} onShareWindowClose={onShareWindowClose}>
                    <TwitterSvg />
                </TwitterShareButton>
            </div>
            <div className={styles.socialLink}>
                <InstapaperShareButton url={`${domain}${url}`} className={styles.shareLink} onShareWindowClose={onShareWindowClose}>
                    <InstagramSvg />
                </InstapaperShareButton>
            </div>
            <div className={styles.socialLink} onClick={onShareWindowClose}>
                <EmailShareButton url={`${domain}${url}`} className={styles.shareLink}>
                    <MailSvg className={styles.mail}/>
                </EmailShareButton>
            </div>
        </div>
    );
};

Socials.propTypes = {
    url: PropTypes.string,
    onClose: PropTypes.func,
    theme: PropTypes.string
};

export default Socials;
