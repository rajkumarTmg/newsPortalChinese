import React, { useEffect, useMemo, useRef, useState } from 'react';
import styles from './index.module.scss';
import classNames from 'classnames';
import { useRouter } from 'next/router';
import debounce from 'lodash.debounce';
// IMAGES
import SearchTabletIconSVG from '../../../../../../public/images/svg/searchTablet.svg';
import { useIntl } from 'react-intl';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import { useWindowSize } from '../../../utils/useWindowSize';

const SearchInput = () => {
    const router = useRouter();
    const isSearchPage = useMemo(() => router.pathname === '/search', [router.pathname]);
    const [value, setValue] = useState(router.query?.query || '');
    const [isOpen, setOpen] = useState(isSearchPage);
    const intl = useIntl();
    const inputRef = useRef();
    const { width } = useWindowSize();
    const mobileWidth = 768;
    const isMobile = useMemo(() => width <= mobileWidth, [width]);

    const handleChangeValue = (e) => {
        setValue(e.target.value);
    };

    const handleClose = () => {
        setOpen(false);
    };

    useEffect(() => {
        if (!router.isReady) return;

        if (!value && !!router.query?.query) {
            setValue(router.query?.query);
        }
    }, [router.query]);

    useEffect(() => {
        if (isOpen) {
            inputRef.current.focus();
        }
    }, [isOpen]);

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
        if (!isMobile) {
            handleFetchOptionsDebounced.current({ query: value, isSearchPage: router.pathname === '/search' });
        }
    }, [value, router.pathname, isMobile]);

    const handleFetchOptionsDebounced = useRef(debounce(handleSetSearchQuery, 200));

    return (
        <ClickAwayListener onClickAway={handleClose}>
            <form className={classNames(styles.inputWrapper, {
                [styles.open]: isOpen
            })}>
                <input
                    className={styles.input}
                    value={value}
                    onChange={handleChangeValue}
                    placeholder={intl.formatMessage({ id: 'header.search' })}
                    ref={inputRef}
                />
                <label className={styles.label} onClick={() => setOpen(prev => !prev)}>
                    <div className={styles.icon}><SearchTabletIconSVG/></div>
                </label>
            </form>
        </ClickAwayListener>
    );
};

export default SearchInput;
