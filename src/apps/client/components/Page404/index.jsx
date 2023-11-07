import React, { useEffect } from 'react';
import styles from './index.module.scss';
import { useIntl } from 'react-intl';
import Link from 'next/link';
import Image from 'next/image';
import ArrowBasicIconSVG from '../../../../../public/images/svg/arrowRightBasic.svg';

const Page404 = () => {
    const intl = useIntl();

    useEffect(() => {
        const footer = document.querySelector('#footerRoot');
        if (footer) {
            footer.style.display = 'none';
        }

        return () => {
            if (footer) {
                footer.style.display = 'block';
            }
        };
    }, []);

    return <div className={styles.root}>
        <div className={styles.header}>
            <div className={styles.mainLogo}>
                <Link href='/'>
                    <span className={styles.logoImage}>
                        <Image src="/images/header-main-logo.png" layout="fill"/>
                    </span>
                </Link>
            </div>
        </div>
        <div className={styles.body}>
            <span className={styles.headerText}>{intl.formatMessage({ id: 'notFound.header' })}</span>
            <Link href='/'>
                <span className={styles.link}>
                    {intl.formatMessage({ id: 'notFound.link' })}
                    <ArrowBasicIconSVG className={styles.icon}/>
                </span>
            </Link>
        </div>
    </div>;
};

export default Page404;
