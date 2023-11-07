import React from 'react';
import styles from './index.module.scss';
import PropTypes from 'prop-types';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Tooltip from '@material-ui/core/Tooltip';
import { EmailShareButton, FacebookShareButton, InstapaperShareButton, TwitterShareButton } from 'react-share';
import FacebookSvg from '../../../../../../../public/images/svg/articlesFb.svg';
import TwitterSvg from '../../../../../../../public/images/svg/articlesTw.svg';
import InstagramSvg from '../../../../../../../public/images/svg/instagram.svg';
import MailSvg from '../../../../../../../public/images/svg/mail.svg';

const Share = ({ children, url, onClose }) => {
    const [open, setOpen] = React.useState(false);
    const domain = process.env.NEXT_PUBLIC_DOMAIN_URL;

    const handleTooltipClose = () => {
        setOpen(false);
    };

    const handleTooltipOpen = () => {
        setOpen(true);
    };

    const onShareWindowClose = () => {
        if (onClose) {
            onClose();
        }
    };

    return (
        <ClickAwayListener onClickAway={handleTooltipClose}>
            <div>
                <Tooltip
                    placement='left'
                    PopperProps={{
                        disablePortal: true
                    }}
                    onClose={handleTooltipClose}
                    open={open}
                    disableFocusListener
                    disableHoverListener
                    disableTouchListener
                    classes={{ tooltip: styles.tooltipShare, popper: styles.popper }}
                    title={open && <React.Fragment>
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
                    </React.Fragment>}
                >
                    <div className={styles.share} onClick={!open ? handleTooltipOpen : handleTooltipClose}>
                        {children}
                    </div>
                </Tooltip>
            </div>
        </ClickAwayListener>
    );
};

Share.propTypes = {
    children: PropTypes.node,
    url: PropTypes.string,
    onClose: PropTypes.func
};

export default Share;
