import React, { useState } from 'react';
import styles from './index.module.scss';
import { useRouter } from 'next/router';
import classNames from 'classnames';
import Link from 'next/link';
import PropTypes from 'prop-types';
// IMAGES
import HomeIconSVG from '../../../../../../public/images/svg/home.svg';
import { useIntl } from 'react-intl';
import Socials from '../../Socials';
import { OverlayScrollbarsComponent } from 'overlayscrollbars-react';

const Categories = ({ categories, activeCategory }) => {
    const router = useRouter();
    const [expanded, setExpanded] = useState([]);
    const intl = useIntl();

    const handleExpand = (id) => (event) => {
        event.preventDefault();

        if (expanded.includes(id)) {
            setExpanded([...expanded.filter(item => item !== id)]);
        } else {
            setExpanded([...expanded, id]);
        }
    };

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
                        {categories.map((category) =>
                            <React.Fragment key={category?._id}>
                                <div className={classNames(styles.category, {
                                    [styles.active]: activeCategory?._id === category._id
                                })}>
                                    <Link href={`/categories/${category.data[router.locale]?.alias}`}>
                                        <a className={styles.link}>
                                            {category.data[router.locale]?.name}
                                        </a>
                                    </Link>
                                    {!!category?.subcategories?.length && <span onClick={handleExpand(category._id)}></span>}
                                </div>
                                {!!category?.subcategories?.length &&
                            <div
                                className={classNames(styles.subcategories, {
                                    [styles.expandedNot]: !expanded.includes(category._id)
                                })}
                                style={{
                                    maxHeight: `${category?.subcategories?.length * 70}px`
                                }}
                            >
                                {
                                    category?.subcategories?.map((subcategoryItem) => (
                                        <Link
                                            key={subcategoryItem?._id}
                                            href={`/categories/${category?.data[router.locale]?.alias}/${subcategoryItem.data[router.locale]?.alias}`}
                                        >
                                            <a className={styles.subCategory}>
                                                {subcategoryItem.data[router.locale]?.name}
                                            </a>
                                        </Link>
                                    ))
                                }
                            </div>
                                }
                            </React.Fragment>
                        )}
                        <React.Fragment>
                            <Link href={`/multimedia/${activeCategory?.data[router.locale]?.alias}`}>
                                <a className={styles.category}>
                                    {intl.formatMessage({ id: 'category.multimedia' })}
                                </a>
                            </Link>
                        </React.Fragment>
                    </OverlayScrollbarsComponent>
                </div>
            </div>
            <div className={styles.socials}>
                <div className={styles.stickyHelper}></div>
                <div className={styles.socialsWrapper}>
                    <Socials url={`/categories/${activeCategory?.data[router.locale]?.alias}`}/>
                </div>
            </div>
        </div>
    );
};

Categories.propTypes = {
    categories: PropTypes.array,
    activeCategory: PropTypes.string
};

export default Categories;
