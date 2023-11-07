import React from 'react';
import ArticleAudio from '../../../ArticleAudio';
import styles from './index.module.scss';
import PropTypes from 'prop-types';
import { useRouter } from 'next/router';
import formatDate from '../../../../utils/formatDate';
import Lazy from '../../../Lazy';
import { FormattedMessage } from 'react-intl';
import AuthorWebp from '../../../../../../../public/images/NSC-Author-Book.webp';
import AuthorPNG from '../../../../../../../public/images/NSC-Author-Book.png';

const AuthorBlock = ({ article, author }) => {
    const router = useRouter();

    return (
        <div className={styles.root}>
            <div className={styles.author}>
                <div className={styles.avatar}>
                    {
                        author?.data[router.locale]?.avatar[0]
                            ? <Lazy>
                                <picture>
                                    <source srcSet={author?.data[router.locale]?.avatar[0].pathWebp} type='image/webp' />
                                    <img src={author?.data[router.locale]?.avatar[0].path} alt={'author'} />
                                </picture>
                            </Lazy>
                            : <Lazy>
                                <picture>
                                    <source srcSet={AuthorWebp} type='image/webp' />
                                    <img src={AuthorPNG} alt={'author'} />
                                </picture>
                            </Lazy>
                        // eslint-disable-next-line max-len
                            // : <div className={styles.defaultAvatar}>{author?.data[router.locale]?.name.split(' ').map((item) => item.slice(0, 1)).join()}</div>
                    }
                </div>
                <div className={styles.meta}>
                    <p>{formatDate(article.data[router.locale]?.date, router.locale)}</p>
                    <p>{author?.data[router.locale]?.location}</p>
                </div>
                <p className={styles.name}>{author?.data[router.locale]?.name}</p>
                <p className={styles.code}>{article.views} <FormattedMessage id='common.viewsShort'/></p>
            </div>
            {
                article.data[router.locale]?.audioFile[0]?.path &&
                <ArticleAudio title={article.data[router.locale]?.audioTitle} file={article.data[router.locale]?.audioFile[0]?.path}/>
            }
        </div>
    );
};

AuthorBlock.propTypes = {
    author: PropTypes.object,
    article: PropTypes.object
};

export default AuthorBlock;
