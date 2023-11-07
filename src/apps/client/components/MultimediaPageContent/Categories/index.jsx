import React from 'react';
import styles from './index.module.scss';
import { useRouter } from 'next/router';
import classNames from 'classnames';
import Link from 'next/link';
import PropTypes from 'prop-types';
// IMAGES
import HomeIconSVG from '../../../../../../public/images/svg/home.svg';

const Categories = ({ categories, category }) => {
    const router = useRouter();
    // const [expanded, setExpanded] = useState([]);

    // eslint-disable-next-line no-lone-blocks
    { /*
    const handleExpand = (id) => (event) => {
        event.preventDefault();

        if (expanded.includes(id)) {
            setExpanded([...expanded.filter(item => item !== id)]);
        } else {
            setExpanded([...expanded, id]);
        }
    };
    */ }

    return (
        <div className={styles.root}>
            <div className={styles.list}>
                <Link href='/'>
                    <a className={styles.homeIcon}>
                        <HomeIconSVG/>
                    </a>
                </Link>
                {categories.map((categoryItem) =>
                    <React.Fragment key={categoryItem?._id}>
                        <div className={classNames(styles.category, {
                            [styles.active]: category?._id === categoryItem._id
                        })}>
                            <Link href={`/multimedia/${categoryItem.data[router.locale]?.alias}`}>
                                <a className={styles.link}>
                                    {categoryItem.data[router.locale]?.name}
                                </a>
                            </Link>
                            {/*
                                {!!categoryItem?.subcategories?.length && <span onClick={handleExpand(categoryItem._id)}></span>}
                                */}
                        </div>
                        {/*
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
                                    categoryItem?.subcategories?.map((subcategoryItem, index) => (
                                        <Link key={index}
                                            href={`/multimedia/${categoryItem.data[router.locale]?.alias}/${subcategoryItem.data[router.locale]?.alias}`}
                                        >
                                            <a className={classNames(styles.subCategory)}>
                                                {subcategoryItem.data[router.locale]?.name}
                                            </a>
                                        </Link>
                                    ))
                                }
                            </div>
                        }
                        */}
                    </React.Fragment>
                )}
            </div>
        </div>
    );
};

Categories.propTypes = {
    categories: PropTypes.array,
    category: PropTypes.object
};

export default Categories;
