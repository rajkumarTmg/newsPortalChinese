import React from 'react';
import styles from './index.module.scss';
import LargeArticleCard from '../../LargeArticleCard';
import SmallArticleCard from '../../SmallArticleCard';
import Subscribe from '../Subscribe';
import PropTypes from 'prop-types';
import Link from 'next/link';
import { useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import formatDate from '../../../utils/formatDate';
import ArrowIconSVG from '../../../../../../public/images/svg/circleArrow.svg';
// IMAGES
import HomeIconSVG from '../../../../../../public/images/svg/home.svg';
import MoreIconSVG from '../../../../../../public/images/svg/more.svg';
import Lazy from '../../Lazy';
import { FormattedMessage } from 'react-intl';

const Introduction = ({ blockIntroductionArticles, commercialItem, category, subcategory }) => {
    const router = useRouter();
    const authors = useSelector(({ data }) => data.authors);
    const author = blockIntroductionArticles[1] && authors.find((author) => author._id === blockIntroductionArticles[1].data[router.locale]?.author);
    return (
        <div className={styles.root}>
            <div className={styles.homeIconContainer}>
                <Link href='/'>
                    <a className={styles.homeIcon}>
                        <HomeIconSVG/>
                    </a>
                </Link>
                <div className={styles.mainTitleWrapper}>
                    <h6 className={styles.mainTitle}>
                        <Link href={`/categories/${category?.data[router.locale]?.alias}`}>
                            <a className={styles.link}>
                                {category?.data[router.locale]?.name}
                            </a>
                        </Link>
                        <span className={styles.divider}>｜</span>
                        <span className={styles.secondTitle}>
                            <Link href={`/categories/${category?.data[router.locale]?.alias}/${subcategory?.data[router.locale]?.alias}`}>
                                <a className={styles.link}>
                                    {subcategory?.data[router.locale]?.name}
                                </a>
                            </Link>
                        </span>
                    </h6>
                    <span className={styles.line}/>
                    <span className={styles.line}/>
                    <span className={styles.line}/>
                    <span className={styles.line}/>
                    <span className={styles.line}/>
                </div>
            </div>
            {
                (!blockIntroductionArticles.length) &&
                <div className={styles.noContent}>
                    <FormattedMessage id='nocontent.title'/>
                </div>
            }
            <div className={styles.articles}>
                <div>
                    <div className={styles.largeArticleCard}>
                        {
                            blockIntroductionArticles[0] &&
                            <LargeArticleCard withStats={true} theme='subCategoryPage' article={blockIntroductionArticles[0]}/>
                        }
                    </div>
                </div>
                {
                    (!!blockIntroductionArticles.length) &&
                    <Subscribe/>
                }
                <div className={styles.ad}>
                    {
                        commercialItem
                            ? <a className={styles.commercialLink} href={commercialItem.link} target='_blank' rel="noreferrer">
                                <Lazy>
                                    <picture>
                                        <source srcSet={commercialItem.photos[0].pathWebp} type='image/webp' />
                                        <img src={commercialItem.photos[0].path} alt={commercialItem.name || 'commercial'} />
                                    </picture>
                                </Lazy>
                            </a>
                            : <div className={styles.placeholder}>{'AD'}</div>
                    }
                    {/* horizontal */}
                    <div className={styles.googleAd}>
                        <amp-ad width="100vw" height="320"
                            type="adsense"
                            data-ad-client="ca-pub-5094837188797246"
                            data-ad-slot="4141301580"
                            data-auto-format="rspv"
                            data-full-width="">
                            <div overflow=""></div>
                        </amp-ad>
                    </div>
                </div>
                <div>
                    {
                        blockIntroductionArticles[1] &&
                        <div className={styles.mediumArticle}>
                            <p className={styles.mediumArticleCategory}>
                                <Link href={`/categories/${category?.data[router.locale]?.alias}`}>
                                    <a className={styles.link}>{category?.data[router.locale]?.name}</a>
                                </Link>
                                {subcategory &&
                                    <span>
                                        <span className={styles.divider}>{' | '}</span>
                                        <Link href={`/categories/${category?.data[router.locale]?.alias}/${subcategory?.data[router.locale]?.alias}`}>
                                            <a className={styles.articleSubcategory}>{subcategory?.data[router.locale]?.name}</a>
                                        </Link>
                                    </span>
                                }
                            </p>
                            <Link href={`/${blockIntroductionArticles[1]?.data[router.locale]?.alias}`}>
                                <a className={styles.mediumArticleImage}>
                                    <Lazy>
                                        <picture>
                                            <source srcSet={blockIntroductionArticles[1].data[router.locale]?.avatar[0].pathWebp} type='image/webp' />
                                            <img src={blockIntroductionArticles[1].data[router.locale]?.avatar[0].path}
                                                alt={blockIntroductionArticles[1].data[router.locale]?.title} />
                                        </picture>
                                    </Lazy>
                                </a>
                            </Link>
                            <Link href={`/${blockIntroductionArticles[1]?.data[router.locale]?.alias}`}>
                                <a className={styles.mediumArticleTitle}>
                                    {blockIntroductionArticles[1].data[router.locale]?.title}
                                </a>
                            </Link>
                            <p className={styles.mediumArticleDate}>
                                <span className={styles.mediumArticleAuthor}> {author && author?.data[router.locale]?.name}</span>
                                {formatDate(blockIntroductionArticles[1].data[router.locale]?.date, router.locale)}
                            </p>
                            <p className={styles.mediumArticleDesc}>
                                <span dangerouslySetInnerHTML={{ __html: blockIntroductionArticles[1].data[router.locale]?.shortDescription }}></span>
                                <Link href={`/${blockIntroductionArticles[1]?.data[router.locale]?.alias}`}>
                                    <a className={styles.arrow}><MoreIconSVG/></a>
                                </Link>
                                <Link href={`/${blockIntroductionArticles[1]?.data[router.locale]?.alias}`}>
                                    <a className={styles.arrowIcon}>
                                        <ArrowIconSVG/>
                                    </a>
                                </Link>
                            </p>
                        </div>
                    }
                    <div className={styles.smallArticles}>
                        {blockIntroductionArticles.slice(2).map((article) => (
                            <div className={styles.smallArticle} key={article?._id}>
                                <SmallArticleCard
                                    theme='subCategoryPage'
                                    article={article}
                                    small={blockIntroductionArticles.slice(2).length < 2}
                                />
                            </div>
                        ))}

                    </div>
                </div>
            </div>
        </div>
    );
};

Introduction.propTypes = {
    blockIntroductionArticles: PropTypes.array,
    commercialItem: PropTypes.object,
    subcategory: PropTypes.object,
    category: PropTypes.object
};

export default Introduction;
