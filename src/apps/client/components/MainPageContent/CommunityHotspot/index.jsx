import React from 'react';
import styles from './index.module.scss';
import Image from 'next/image';
import PropTypes from 'prop-types';
import { useRouter } from 'next/router';
import { useSelector } from 'react-redux';
import Link from 'next/link';
import Lazy from '../../Lazy';
// IMAGES
import ArrowSimpleShortIconSVG from '../../../../../../public/images/svg/arrowSimpleShort.svg';
import AuthorPNG from '../../../../../../public/images/NSC-Author-Book.png';
import AuthorWebp from '../../../../../../public/images/NSC-Author-Book.webp';
import { FormattedMessage } from 'react-intl';

const CommunityHotspot = ({ article, otherArticles }) => {
    const router = useRouter();
    const authors = useSelector(({ data }) => data.authors);

    return (
        <div className={styles.root}>
            <div className={styles.titleWrapper}>
                <p className={styles.title}>
                    <FormattedMessage id='mainPage.sidebarTitleDiscussed'/>
                </p>
                <div className={styles.lines}>
                    <span/>
                    <span/>
                    <span/>
                    <span/>
                    <span/>
                </div>
            </div>
            <Link href={`/${article?.data[router.locale]?.alias}`}>
                <div className={styles.hotspotImage}>
                    <Lazy>
                        <picture>
                            <source srcSet={article?.data[router.locale]?.avatar[0].pathWebp} type='image/webp' />
                            <img src={article?.data[router.locale]?.avatar[0].path} alt={article?.data[router.locale]?.title} />
                        </picture>
                    </Lazy>
                </div>
            </Link>
            <div className={styles.list}>
                {otherArticles.map((article) => {
                    const author = article && authors.find((author) => author._id === article.data[router.locale]?.author);

                    return <Link href={`/${article.data[router.locale]?.alias}`} key={article._id.toString()}>
                        <div className={styles.listItem} >
                            {
                                author &&
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
                            }
                            <div className={styles.rightSide}>
                                <div className={styles.top}>
                                    <span className={styles.author}>{author?.data[router.locale]?.name}</span>
                                    {
                                        author?.data[router.locale]?.location &&
                                    <span className={styles.country}>- {author?.data[router.locale]?.location}</span>
                                    }
                                </div>
                                <p className={styles.text}>
                                    <span dangerouslySetInnerHTML={{ __html: article.data[router.locale]?.shortDescription }}></span>
                                    <span className={styles.arrow}><ArrowSimpleShortIconSVG/></span>
                                </p>
                                <div className={styles.bottom}>
                                    <span className={styles.line}/>
                                    <Image src='/images/plus.png' width={16} height={16}/>
                                </div>
                            </div>
                        </div>
                    </Link>;
                })}
            </div>
        </div>
    );
};

CommunityHotspot.propTypes = {
    article: PropTypes.object,
    otherArticles: PropTypes.array
};

export default CommunityHotspot;
