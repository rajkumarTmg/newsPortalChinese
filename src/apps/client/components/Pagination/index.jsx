import React, { useMemo } from 'react';
import styles from './index.module.scss';
import classnames from 'classnames';
import PropTypes from 'prop-types';
// IMAGES
import ArrowLeftBasicSVG from '../../../../../public/images/svg/arrowLeftBasic.svg';
import ArrowRightBasicSVG from '../../../../../public/images/svg/arrowRightBasic.svg';
import ArrowLeftMaxSVG from '../../../../../public/images/svg/arrowLeftMax.svg';
import ArrowRightMaxSVG from '../../../../../public/images/svg/arrowRightMax.svg';

const Pagination = ({ currentPage, maxPageLimit, minPageLimit, totalPages, handleChange, onPrevClick, onNextClick, onFirstClick, onLastClick }) => {
    const pages = useMemo(() => {
        const pagesArray = [];
        for (let i = 1; i <= totalPages; i++) {
            pagesArray.push(i);
        }
        return pagesArray;
    }, [totalPages]);

    const handlePrevClick = () => {
        onPrevClick();
    };

    const handleNextClick = () => {
        onNextClick();
    };

    const handlePageClick = (page) => () => {
        handleChange(page);
    };

    const pageNumbers = pages.map(page => {
        if (page <= maxPageLimit && page > minPageLimit) {
            return (
                <li key={page} onClick={handlePageClick(page)}
                    className={classnames(styles.page, {
                        [styles.activePage]: currentPage === page
                    })}>
                    {page}
                </li>
            );
        } else {
            return null;
        }
    }
    );

    return (
        <div className={styles.root}>
            <ul className={styles.pageNumbers}>
                <button className={styles.navButton} onClick={onFirstClick} disabled={currentPage === pages[0]}><ArrowLeftMaxSVG/></button>
                <button
                    className={classnames(styles.navButton, styles.prev)}
                    onClick={handlePrevClick} disabled={currentPage === pages[0]}
                >
                    <ArrowLeftBasicSVG/>
                </button>
                <div className={styles.ellipses}>
                    {
                        minPageLimit >= 1 && <li onClick={handlePrevClick}>&hellip;</li>
                    }
                </div>
                {pageNumbers}
                <div className={styles.ellipses}>
                    {
                        pages.length > maxPageLimit && <li onClick={handleNextClick}>&hellip;</li>
                    }
                </div>
                <button
                    className={classnames(styles.navButton, styles.next)}
                    onClick={handleNextClick}
                    disabled={currentPage === pages[pages.length - 1]}
                >
                    <ArrowRightBasicSVG/>
                </button>
                <button className={styles.navButton} onClick={onLastClick} disabled={currentPage === pages[pages.length - 1]}><ArrowRightMaxSVG/></button>

            </ul>
        </div>
    );
};

Pagination.propTypes = {
    currentPage: PropTypes.number,
    maxPageLimit: PropTypes.number,
    minPageLimit: PropTypes.number,
    totalPages: PropTypes.number,
    handleChange: PropTypes.func,
    onPrevClick: PropTypes.func,
    onNextClick: PropTypes.func,
    onFirstClick: PropTypes.func,
    onLastClick: PropTypes.func

};

export default Pagination;
