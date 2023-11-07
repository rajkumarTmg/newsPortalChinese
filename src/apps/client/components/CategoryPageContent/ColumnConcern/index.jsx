import React from 'react';
import PropTypes from 'prop-types';
import { useIntl } from 'react-intl';
import { useRouter } from 'next/router';
// COMPONENTS
import Link from 'next/link';
import Poll from '../../Poll';
import Lazy from '../../Lazy';
// CONSTANTS
import { AD_PAGES_ALIASES } from '../../../../admin/constants/constants';
// UTILS
import formatDateRelative from '../../../utils/formatDateRelative';
// IMAGES
import ViewIconSVG from '../../../../../../public/images/svg/viewIcon.svg';
import ShareIconSVG from '../../../../../../public/images/svg/shareIcon.svg';
// STYLES
import styles from './index.module.scss';
import setSubscriptionPopup from '../../../store/actions/setSubscriptionPopup';
import { useDispatch } from 'react-redux';

const ColumnConcern = ({ articles, categories, category, commercialItem, commercialItem2, votes, handleVote }) => {
    const intl = useIntl();
    const router = useRouter();
    const dispatch = useDispatch();

    const handleOpenSubscriptionPopup = () => {
        dispatch(setSubscriptionPopup(true));
    };

    return (
        <div className={styles.root}>
            <div className={styles.ad}>
                {
                    commercialItem
                        ? <a className={styles.commercialLink} href={commercialItem.link} target='_blank' rel="noreferrer">
                            <Lazy>
                                <picture>
                                    <source srcSet={commercialItem.photosHorizontal[0].pathWebp} type='image/webp' />
                                    <img src={commercialItem.photosHorizontal[0].path} alt={commercialItem.name || 'commercial'} />
                                </picture>
                            </Lazy>
                        </a>
                        : <div className={styles.placeholder}>{'AD'}</div>
                }
                {/* horizontal */}
                <div className={styles.googleAdSmallDesktop}>
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
            <div className={styles.titleWrapper}>
                <div className={styles.containerLeft}>
                    <span className={styles.wholeLine}/>
                    <span className={styles.wholeLine}/>
                    <span className={styles.wholeLine}/>
                    <span className={styles.wholeLine}/>
                </div>
                <h6 className={styles.title}>
                    {intl.formatMessage({ id: 'common.column' })}
                </h6>
                <div className={styles.containerRight}>
                    <span className={styles.wholeLine}/>
                    <span className={styles.wholeLine}/>
                    <span className={styles.wholeLine}/>
                    <span className={styles.wholeLine}/>
                </div>
            </div>
            <div className={styles.articles}>
                {articles.map((article) => {
                    const category = article && categories.find((category) => category._id === article.data[router.locale]?.category);
                    const subcategory = article &&
                        article.data[router.locale]?.subcategory &&
                        category?.subcategories?.find((subcategory) => subcategory._id === article.data[router.locale]?.subcategory);
                    return (
                        <div className={styles.article} key={article?._id}>
                            <Link href={`/${article?.data[router.locale]?.alias}`}>
                                <a className={styles.articleImage}>
                                    <Lazy>
                                        <picture>
                                            <source srcSet={article.data[router.locale]?.avatar[0].pathWebp} type='image/webp' />
                                            <img src={article.data[router.locale]?.avatar[0].path} alt={article.data[router.locale]?.title} />
                                        </picture>
                                    </Lazy>
                                </a>
                            </Link>
                            <p className={styles.articleCategory}>
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
                            <Link href={`/${article?.data[router.locale]?.alias}`}>
                                <a className={styles.articleDesc}>
                                    {article.data[router.locale]?.title}
                                </a>
                            </Link>
                            <div className={styles.stats}>
                                <span>
                                    <ViewIconSVG width={20} height={16}/> {article.views?.toLocaleString() || 0}
                                </span>
                                <span>
                                    <ShareIconSVG width={15} height={16}/> {article.shares?.toLocaleString() || 0}
                                </span>
                                <span>{formatDateRelative(article.data[router.locale]?.date, router.locale)}</span>
                            </div>
                        </div>
                    );
                })}
            </div>
            <div className={styles.subLink} onClick={handleOpenSubscriptionPopup}>
                {intl.formatMessage({ id: 'mainPage.subscription' })}
            </div>
            <div className={styles.sideBar}>
                {!!votes.length &&
                    <div className={styles.poll}>
                        <Poll
                            page={AD_PAGES_ALIASES.categoryPage}
                            votes={votes}
                            handleVote={handleVote}
                            additionIdForLabel='categorySmallDesktop'
                        />
                    </div>
                }
                <div className={styles.sideAd}>
                    {
                        commercialItem2
                            ? <a className={styles.commercialLinkSide} href={commercialItem2.link} target='_blank' rel="noreferrer">
                                <picture>
                                    <source srcSet={commercialItem2.photosVertical[0].pathWebp} type='image/webp' />
                                    <img src={commercialItem2.photosVertical[0].path} alt={commercialItem2.name || 'commercial'} />
                                </picture>
                            </a>
                            : <div className={styles.placeholderSide}>{'AD'}</div>
                    }
                    {/* vertical */}
                    <div className={styles.googleAd}>
                        <amp-ad width="100vw" height="320"
                            type="adsense"
                            data-ad-client="ca-pub-5094837188797246"
                            data-ad-slot="3921809737"
                            data-auto-format="rspv"
                            data-full-width="">
                            <div overflow=""></div>
                        </amp-ad>
                    </div>
                </div>
            </div>
        </div>
    );
};

ColumnConcern.propTypes = {
    articles: PropTypes.array,
    category: PropTypes.object,
    categories: PropTypes.array,
    commercialItem: PropTypes.object,
    commercialItem2: PropTypes.object,
    votes: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
    handleVote: PropTypes.func

};

export default ColumnConcern;
