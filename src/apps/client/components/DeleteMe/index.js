import { FormattedMessage } from 'react-intl';
import classNames from 'classnames';

import { useRouter } from 'next/router';

import styles from './index.module.css';

import { LOCALES } from '../../constants';

const DeleteMe = () => {
    const router = useRouter();

    const handleLangClick = locale => () => {
        router.push(router.pathname, router.pathname, { locale: locale === 'uk' ? 'ua' : locale });
    };

    return (
        <div className={styles.locales}>
            <div className={styles.localesTitle}>
                <FormattedMessage id='mainPage.langs' />
            </div>
            <div className={styles.localesList}>
                { LOCALES.map((localeFromList, i) => <div
                    className={classNames(styles.locale, { [styles.localeActive]: localeFromList === router.locale })}
                    key={i}
                    onClick={handleLangClick(localeFromList)}
                >
                    {localeFromList}
                </div>) }
            </div>
        </div>
    );
};

export default DeleteMe;
