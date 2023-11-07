import React, { useEffect, useRef, useState } from 'react';
import styles from './index.module.scss';
import { useRouter } from 'next/router';
import classNames from 'classnames';
import Link from 'next/link';
import PropTypes from 'prop-types';
import Popper from '@material-ui/core/Popper';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import LangSelect from '../../LangSelect';

const Categories = ({ categories, category, subcategory }) => {
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

    const handleMobileMenuClose = (event) => {
        event?.preventDefault();

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

    useEffect(() => {
        handleMobileMenuClose();
    }, [router.asPath]);

    return (
        <div className={styles.root}>
            <div className={styles.listMobile}>
                <div className={styles.currentLang}>
                    <LangSelect/>
                </div>
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
                                    <div className={classNames(styles.category, {
                                        [styles.active]: category?._id === categoryItem._id,
                                        [styles.expandedNot]: !expanded.includes(categoryItem._id)
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
        </div>
    );
};

Categories.propTypes = {
    categories: PropTypes.array,
    category: PropTypes.object,
    subcategory: PropTypes.object
};

export default Categories;
