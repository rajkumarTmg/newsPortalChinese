import React, { useState, useRef, useEffect, useMemo } from 'react';
import styles from './index.module.scss';
import classNames from 'classnames';
import { useIntl } from 'react-intl';
import SearchTabletIconSVG from '../../../../../../public/images/svg/searchTablet.svg';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import debounce from 'lodash.debounce';
import { useRouter } from 'next/router';
import { useWindowSize } from '../../../utils/useWindowSize';

const Search = () => {
    const router = useRouter();
    const isSearchPage = useMemo(() => router.pathname === '/search', [router.pathname]);
    const inputRef = useRef();
    const [value, setValue] = useState(router.query?.query || '');
    const [isInputVisible, setInputVisible] = useState(isSearchPage);
    const intl = useIntl();
    const { width } = useWindowSize();
    const mobileWidth = 768;
    const isMobile = useMemo(() => width <= mobileWidth, [width]);

    const handleChange = (e) => {
        setValue(e.target.value);
    };

    useEffect(() => {
        if (isInputVisible) {
            inputRef.current.focus();
        }
    }, [isInputVisible]);

    const handleVisible = () => {
        setInputVisible(prev => !prev);
    };

    const handleClose = () => {
        setInputVisible(false);
    };

    useEffect(() => {
        if (!router.isReady) return;

        if (!value && !!router.query?.query) {
            setValue(router.query?.query);
        }
    }, [router.query]);

    const handleSetSearchQuery = ({ query, isSearchPage }) => {
        if (!isSearchPage) {
            if (query) {
                router.push({ pathname: '/search', query: { query } });
            }
        } else {
            router.push({
                pathname: '/search',
                query: { query }
            },
            undefined, { shallow: true });
        }
    };

    useEffect(() => {
        if (router.pathname !== '/search' && value) {
            setValue('');
        }
    }, [router.pathname]);

    useEffect(() => {
        if (isMobile) {
            handleFetchOptionsDebounced.current({ query: value, isSearchPage: router.pathname === '/search' });
        }
    }, [value, router.pathname, isMobile]);

    const handleFetchOptionsDebounced = useRef(debounce(handleSetSearchQuery, 200));

    return (
        <ClickAwayListener onClickAway={handleClose}>
            <form className={styles.search}>
                <input value={value} ref={inputRef} onChange={handleChange} className={classNames(
                    styles.input, {
                        [styles.visible]: isInputVisible
                    }
                )} placeholder={intl.formatMessage({ id: 'header.search' })}/>
                <div className={styles.icon} onClick={handleVisible}>
                    <SearchTabletIconSVG/>
                </div>
            </form>
        </ClickAwayListener>
    );
};

export default Search;
