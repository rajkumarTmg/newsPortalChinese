import React from 'react';
import Link from 'next/link';
import styles from './index.module.scss';
import { SOCIALS } from '../../../constants/home';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { useRouter } from 'next/router';

const SocialHeader = ({ theme }) => {
    const router = useRouter();
    const rootClassnames = classNames(styles.root, {
        [styles[theme]]: theme
    });
    const DOMAIN = process.env.NEXT_PUBLIC_DOMAIN_URL;

    return (
        <div className={rootClassnames}>
            {SOCIALS.map(({ link, Icon, feed }, index) =>
                <Link href={feed ? `${DOMAIN}/feed/${router.locale}/rss.xml` : link} key={index}>
                    <a className={styles.socialLink} target='_blank'>
                        <Icon/>
                    </a>
                </Link>)}
        </div>
    );
};

SocialHeader.propTypes = {
    theme: PropTypes.string
};

export default SocialHeader;
