import React from 'react';
import ArticleAudio from '../../../ArticleAudio';
import styles from './index.module.scss';
import PropTypes from 'prop-types';
import { useRouter } from 'next/router';
import formatDate from '../../../../utils/formatDate';
import Lazy from '../../../Lazy';
import AuthorWebp from '../../../../../../../public/images/NSC-Author-Book.webp';
import AuthorPNG from '../../../../../../../public/images/NSC-Author-Book.png';

const Author = ({ author, article, handleFontSizeClick }) => {
    const router = useRouter();

    return (
        <div className={styles.root}>
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
                        // : <div className={styles.defaultAvatar}>{author?.data[router.locale]?.name.split(' ').map((item) => item.slice(0, 1)).join()}</div>
                }
            </div>
            <div className={styles.nameWrapper}>
                <p className={styles.name}>{author?.data[router.locale]?.name}</p>
                <p className={styles.date}>{formatDate(article.data[router.locale]?.date, router.locale)}</p>
            </div>
            <div className={styles.audio}>
                {
                    article.data[router.locale]?.audioFile[0]?.path &&
                    <ArticleAudio file={article.data[router.locale]?.audioFile[0]?.path}/>
                }
            </div>
            <div className={styles.letters} onClick={handleFontSizeClick}>
                <span>A</span>
                <span>A</span>
            </div>
        </div>
    );
};

Author.propTypes = {
    author: PropTypes.object,
    article: PropTypes.object,
    handleFontSizeClick: PropTypes.func
};

export default Author;
