import React from 'react';
import styles from './index.module.scss';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { LOCALES } from '../../constants';
import { FormattedMessage } from 'react-intl';

const LangSelect = () => {
    const router = useRouter();
    const currentPath = router.asPath;

    return (
        <div className={styles.root}>
            {LOCALES.filter(langItem => langItem !== 'en').filter(langItem => langItem !== router.locale).map((langItem, i) => {
                return (
                    <Link
                        key={i}
                        href={currentPath}
                        locale={langItem}
                    >
                        <a className={styles.option}><FormattedMessage id={`header.${langItem}`}/></a>
                    </Link>
                );
            })
            }
        </div>
    );
};

export default LangSelect;
