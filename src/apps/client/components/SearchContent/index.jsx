import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import styles from './index.module.scss';
import Other from './Other';
import { useSelector } from 'react-redux';
import UpSVG from '../../../../../public/images/svg/upPrimary.svg';
import Categories from '../MultimediaPost/Categories';

const SearchPageContent = ({ query }) => {
    const [search, setSearch] = useState(query);
    const categories = useSelector(({ data }) => data.categories);
    const authors = useSelector(({ data }) => data.authors);

    useEffect(() => {
        setSearch(query);
    }, [query]);

    return (
        <div className={styles.root}>
            <div className={styles.header}>
                <Categories categories={categories}/>
            </div>
            <Other categories={categories} authors={authors} query={search}/>
            <button className={styles.upButton}
                onClick={() => window.scrollTo({
                    top: 0,
                    behavior: 'smooth'
                })}
            ><UpSVG/></button>
        </div>
    );
};

SearchPageContent.propTypes = {
    query: PropTypes.string
};

export default SearchPageContent;
