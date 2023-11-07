import React from 'react';
import styles from './index.module.scss';
import Link from 'next/link';
import { useIntl } from 'react-intl';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { useRouter } from 'next/router';
import Lazy from '../../../Lazy';

const RelatedTopic = ({ theme, articles }) => {
    const router = useRouter();
    const intl = useIntl();

    return (
        !!articles?.length && <div className={ classNames(styles.root, {
            [styles[theme]]: theme
        })}>
            <div className={styles.titleWrapper}>
                <div className={styles.containerLeft}>
                    <span className={styles.wholeLine}/>
                    <span className={styles.wholeLine}/>
                    <span className={styles.wholeLine}/>
                    <span className={styles.wholeLine}/>
                </div>
                <h6 className={styles.title}>
                    {intl.formatMessage({ id: 'common.relatedTopic' })}
                </h6>
                <div className={styles.containerRight}>
                    <span className={styles.wholeLine}/>
                    <span className={styles.wholeLine}/>
                    <span className={styles.wholeLine}/>
                    <span className={styles.wholeLine}/>
                </div>
            </div>
            <div className={styles.relatedList}>
                {articles.map((article) =>
                    <div key={article?._id}>
                        <div className={styles.relatedItem}>
                            <Link href={`/${article?.data[router.locale]?.alias}`}>
                                <a className={styles.relatedImage}>
                                    <Lazy>
                                        <picture>
                                            <source srcSet={article.data[router.locale]?.avatar[0].pathWebp} type='image/webp' />
                                            <img src={article.data[router.locale]?.avatar[0].path} alt={article.data[router.locale]?.title} />
                                        </picture>
                                    </Lazy>
                                </a>
                            </Link>
                            <Link href={`/${article?.data[router.locale]?.alias}`}>
                                <a className={styles.relatedTitle}>
                                    {article.data[router.locale]?.title}
                                </a>
                            </Link>
                            <div className={styles.relatedStats}>
                                <span>{article.views?.toLocaleString() || 0} {intl.formatMessage({ id: 'common.views' })}</span>
                                <span>{article.shares?.toLocaleString() || 0} {intl.formatMessage({ id: 'common.share' })}</span>
                            </div>
                        </div>
                    </div>
                )}

            </div>
        </div>
    );
};

RelatedTopic.propTypes = {
    theme: PropTypes.string,
    articles: PropTypes.array
};

RelatedTopic.defaultProps = {
    articles: []
};

export default RelatedTopic;
