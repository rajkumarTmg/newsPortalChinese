import React, { useEffect, useRef, useState } from 'react';
import styles from './index.module.scss';
import { useRouter } from 'next/router';
import classNames from 'classnames';
import Link from 'next/link';
import PropTypes from 'prop-types';
import Popper from '@material-ui/core/Popper';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
// IMAGES
import HomeIconSVG from '../../../../../../public/images/svg/home.svg';
import Socials from '../../Socials';
import { OverlayScrollbarsComponent } from 'overlayscrollbars-react';

const Categories = ({ categories, category, subcategory, article, handleShare }) => {
    const router = useRouter();
    const [expanded, setExpanded] = useState([]);
    const [mobileOpen, setMobileOpen] = useState(false);
    const anchorRef = useRef();

    useEffect(() => {
        setMobileOpen(false);
    }, [router.asPath]);

    const handleMobileMenuOpen = () => {
        setMobileOpen(true);
    };

    const handleMobileMenuClose = () => {
        setMobileOpen(false);
    };

    const handleExpand = (id) => (event) => {
        event?.preventDefault();

        if (expanded.includes(id)) {
            setExpanded([...expanded.filter(item => item !== id)]);
        } else {
            setExpanded([...expanded, id]);
        }
    };

    useEffect(() => {
        if (category && subcategory) {
            setExpanded([category._id]);
        }
    }, [category, subcategory]);

    return (
        <div className={styles.root}>
            <div className={styles.list}>
                <Link href='/'>
                    <a className={styles.homeIcon}>
                        <HomeIconSVG/>
                    </a>
                </Link>
                <div className={styles.categoriesWrapper}>
                    <OverlayScrollbarsComponent>
                        {categories.map((categoryItem) =>
                            <React.Fragment key={categoryItem?._id}>
                                <div className={classNames(styles.category, {
                                    [styles.active]: category?._id === categoryItem._id
                                })}>
                                    <Link href={`/categories/${categoryItem.data[router.locale]?.alias}`}>
                                        <a className={styles.link}>
                                            {categoryItem.data[router.locale]?.name}
                                        </a>
                                    </Link>
                                    {!!categoryItem?.subcategories?.length && <span onClick={handleExpand(categoryItem._id)}></span>}
                                </div>
                                {!!categoryItem?.subcategories?.length &&
                                    <div
                                        className={classNames(styles.subcategories, {
                                            [styles.expandedNot]: !expanded.includes(categoryItem._id)
                                        })}
                                        style={{
                                            maxHeight: `${categoryItem?.subcategories?.length * 70}px`
                                        }}
                                    >
                                        {
                                            categoryItem?.subcategories?.map((subcategoryItem) => (
                                                <Link
                                                    key={subcategoryItem?._id}
                                                    href={
                                                        `/categories/${categoryItem.data[router.locale]?.alias}/${subcategoryItem.data[router.locale]?.alias}`
                                                    }
                                                >
                                                    <a className={classNames(styles.subCategory, {
                                                        [styles.subActive]: category?._id === categoryItem._id && subcategory?._id === subcategoryItem._id
                                                    })}>
                                                        {subcategoryItem.data[router.locale]?.name}
                                                    </a>
                                                </Link>
                                            ))
                                        }
                                    </div>
                                }
                            </React.Fragment>
                        )}
                    </OverlayScrollbarsComponent>
                </div>
            </div>
            <div className={styles.listMobile}>
                <div className={styles.menuWrapper}>
                    <div className={styles.burger} onClick={handleMobileMenuOpen}>
                        <span className={styles.burgerLine}/>
                        <span className={styles.burgerLine}/>
                        <span className={styles.burgerLine}/>
                    </div>
                </div>
                <Popper
                    open={mobileOpen}
                    anchorEl={anchorRef.current}
                    role={undefined}
                    transition
                    disablePortal
                    className={styles.popper}
                >
                    <ClickAwayListener onClickAway={handleMobileMenuClose}>
                        <div className={styles.list}>
                            {categories.map((categoryItem) =>
                                <React.Fragment key={categoryItem?._id}>
                                    <Link href={`/categories/${categoryItem.data[router.locale]?.alias}`}>
                                        <a className={classNames(styles.category, {
                                            [styles.active]: category?._id === categoryItem._id
                                        })}>
                                            {categoryItem.data[router.locale]?.name}
                                            {!!categoryItem?.subcategories?.length && <span onClick={handleExpand(categoryItem._id)}></span>}
                                        </a>
                                    </Link>
                                    {!!categoryItem?.subcategories?.length &&
                                <div
                                    className={classNames(styles.subcategories, {
                                        [styles.expandedNot]: !expanded.includes(categoryItem._id)
                                    })}
                                    style={{
                                        maxHeight: `${categoryItem?.subcategories?.length * 70}px`
                                    }}
                                >
                                    {
                                        categoryItem?.subcategories?.map((subcategoryItem) => (
                                            <Link
                                                key={subcategoryItem?._id}
                                                href={`/categories/${categoryItem.data[router.locale]?.alias}/${subcategoryItem.data[router.locale]?.alias}`}
                                            >
                                                <a className={classNames(styles.subCategory, {
                                                    [styles.subActive]: category?._id === categoryItem._id && subcategory?._id === subcategoryItem._id
                                                })}>
                                                    {subcategoryItem.data[router.locale]?.name}
                                                </a>
                                            </Link>
                                        ))
                                    }
                                </div>
                                    }
                                </React.Fragment>
                            )}
                        </div>
                    </ClickAwayListener>
                </Popper>
            </div>
            <div className={styles.socials}>
                <div className={styles.stickyHelper}></div>
                <div className={styles.socialsWrapper} id='articleContent'>
                    <Socials url={`/${article?.data[router.locale]?.alias}`} onClose={handleShare} theme='articlePage'/>
                </div>
            </div>
        </div>
    );
};

Categories.propTypes = {
    categories: PropTypes.array,
    category: PropTypes.object,
    subcategory: PropTypes.object,
    article: PropTypes.object,
    handleShare: PropTypes.func
};

export default Categories;
