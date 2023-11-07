import React, { useState, useEffect, useRef } from 'react';

import omit from 'ramda/src/omit';

import CircularProgress from '@material-ui/core/CircularProgress';
import CloseIcon from '@material-ui/icons/Close';
import CheckIcon from '@material-ui/icons/Check';
import Modal from '@material-ui/core/Modal';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';

import AdminTableWithSubcategory from '../../apps/admin/components/AdminTableWithSubcategoryPaginated';
import PostSubcategoryItemPhotoForm from '../../apps/admin/components/PostSubcategoryItemPhotoForm';
import PostSubcategoryItemVideoForm from '../../apps/admin/components/PostSubcategoryItemVideoForm';

import getPostItems from '../../apps/admin/services/post/getCategoriesItemsPaginated';
import getArticlesCategories from '../../apps/admin/services/article/getCategories';
import deletePostCategoriesItems from '../../apps/admin/services/post/deleteCategoriesItems';
import getArticlesSubcategories from '../../apps/admin/services/article/getSubcategories';

import getAuthors from '../../apps/admin/services/getAuthors';
import getPageByPageId from '../../apps/admin/services/getPageByPageId';

import { DEFAULT_LOCALE, LOCALES } from '../../apps/client/constants';
import debounce from 'lodash.debounce';
import IconButton from '@material-ui/core/IconButton';
import DialogTitle from '@material-ui/core/DialogTitle';
import { FormattedMessage } from 'react-intl';
import DialogActions from '@material-ui/core/DialogActions';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';

const headerRows = [
    { id: 'number', label: '№' },
    { id: 'name', label: 'Title' },
    { id: 'alias', label: 'Alias' },
    { id: 'author', label: 'Author' },
    { id: 'date', label: 'Date' },
    { id: 'hidden', label: 'Visible' }
];

const useStyles = makeStyles(theme => ({
    loader: {
        height: 'calc(100vh - 64px)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    modal: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative'
    },
    closeButton: {
        position: 'absolute',
        top: '20px',
        right: '20px',
        zIndex: '10'
    },
    modalContent: {
        position: 'absolute',
        width: '1200px',
        backgroundColor: theme.palette.background.paper,
        boxShadow: theme.shadows[5],
        padding: theme.spacing(4),
        outline: 'none',
        overflowY: 'auto',
        maxHeight: '100vh',
        '@media (max-width:1300px)': {
            width: '90%'
        }
    },
    warningContent: {
        paddingBottom: '0'
    },
    columnName: {
        maxWidth: '400px',
        whiteSpace: 'nowrap',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        '@media (max-width:1020px)': {
            maxWidth: '200px'
        },
        '@media (max-width:750px)': {
            maxWidth: '100px'
        },
        '@media (max-width:340px)': {
            maxWidth: '80px'
        }
    },
    columnAlias: {
        maxWidth: '200px',
        display: 'block',
        whiteSpace: 'nowrap',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        '@media (max-width:850px)': {
            maxWidth: '100px'
        },
        '@media (max-width:400px)': {
            maxWidth: '50px'
        }
    }
}));

const PAGE_ID = 'main';

const ArticlesTablePage = () => {
    const classes = useStyles();
    const [loading, setLoading] = useState(true);
    const [warning, setWarning] = useState(false);
    const [activeCategory, setActiveCategory] = useState(null);
    const [activeSubcategory, setActiveSubcategory] = useState(null);
    const [categories, setCategories] = useState([]);
    const [subcategories, setSubcategories] = useState([]);
    const [authors, setAuthors] = useState([]);
    const [items, setItems] = useState([]);
    const [count, setCount] = useState(0);
    const [search, setSearch] = useState('');
    const [dateStart, setDateStart] = useState('');
    const [dateEnd, setDateEnd] = useState('');
    const [photoFormOpened, setPhotoFormOpened] = useState(false);
    const [videoFormOpened, setVideoFormOpened] = useState(false);
    const [editableItem, setEditableItem] = useState(null);
    const [requestOptions, setRequestOptions] = useState({
        page: 1,
        size: 10,
        sort: 'desc',
        categoryId: null,
        subcategoryId: null,
        search: search,
        dateStart: null,
        dateEnd: null
    });
    const [page, setPage] = useState({});
    const DAY_MILISECONDS = 24 * 60 * 60 * 1000;

    useEffect(() => {
        handleFetchOptionsDebounced.current(search);
    }, [search]);

    const handleSetSearchQuery = (search) => {
        setRequestOptions({
            ...requestOptions,
            search: search,
            page: 1
        });
    };

    const handleFetchOptionsDebounced = useRef(debounce(handleSetSearchQuery, 200));

    const handleInputChange = (event) => {
        setSearch(event.target.value);
    };

    useEffect(() => {
        setRequestOptions({
            ...requestOptions,
            ...(dateStart
                ? { dateStart: new Date(dateStart).getTime() }
                : {}),
            ...(dateEnd
                // eslint-disable-next-line max-len
                ? { dateEnd: new Date(dateEnd).getTime() + DAY_MILISECONDS } // to include articles created during the 24 hours of selected day (timestamp time is 00:00)
                : {}),
            page: 1
        });
    }, [dateStart, dateEnd]);

    const handleDateStartChange = (event) => {
        setDateStart(event.target.value);
    };

    const handleDateEndChange = (event) => {
        setDateEnd(event.target.value);
    };

    useEffect(() => {
        getPostItems({ ...requestOptions }).then((items) => {
            setItems(items.paginatedResults);
            setCount(items.totalCount);
        });
    }, [requestOptions]);

    useEffect(() => {
        Promise.all([
            getArticlesCategories(),
            getAuthors(),
            getPageByPageId(PAGE_ID)
        ])
            .then(([categories, authors, page]) => {
                setCategories(categories);
                setAuthors(authors);
                setPage(page);
                setLoading(false);
            });
    }, []);

    useEffect(() => {
        if (activeCategory) {
            setSubcategories(activeCategory?.subcategories || []);
            setRequestOptions({ ...requestOptions, categoryId: activeCategory._id, page: 1 });
        } else {
            setSubcategories([]);
            setActiveSubcategory(null);
            setRequestOptions({ ...requestOptions, categoryId: null, subcategoryId: null, page: 1 });
        }
    }, [activeCategory]);

    useEffect(() => {
        if (activeSubcategory) {
            setRequestOptions({ ...requestOptions, subcategoryId: activeSubcategory._id, page: 1 });
        } else {
            setRequestOptions({ ...requestOptions, categoryId: null, subcategoryId: null, page: 1 });
        }
    }, [activeSubcategory]);

    const handleFormDone = () => {
        Promise.all([
            getArticlesCategories(),
            (activeCategory ? getArticlesSubcategories(activeCategory?._id) : () => []),
            getPostItems({ ...requestOptions }),
            getPageByPageId(PAGE_ID)
        ])
            .then(([categories, subcategories, items]) => {
                setCategories(categories);
                setSubcategories(subcategories);
                setItems(items.paginatedResults);
                setCount(items.totalCount);
                setPage(page);
            })
            .then(handleCloseForm);
    };

    const handleItemsDelete = ids => {
        deletePostCategoriesItems(ids)
            .then(() => {
                Promise.all([
                    getArticlesCategories(),
                    getPostItems({ ...requestOptions })
                ])
                    .then(([categories, items]) => {
                        setCategories(categories);
                        setItems(items.paginatedResults);
                        setCount(items.totalCount);
                    });
            });
    };

    const handleFormOpen = (item, category, subcategory, type) => () => {
        if (type === 'photo' || item.type === 'photo') {
            setPhotoFormOpened(true);
        } else {
            setVideoFormOpened(true);
        }

        setEditableItem(item);
    };

    const handleItemClone = item => () => {
        if (item.type === 'photo') {
            setPhotoFormOpened(true);
        } else {
            setVideoFormOpened(true);
        }

        const data = {};
        LOCALES.forEach((locale) => {
            data[locale] = {
                ...item.data[locale],
                alias: '',
                title: `${item.data[locale].title} (copy)`
            };
        });

        setEditableItem(omit(['_id'], {
            ...item,
            data: data
        }));
    };

    const handleCloseForm = () => {
        setPhotoFormOpened(false);
        setVideoFormOpened(false);

        setEditableItem(null);
    };

    const handleWarningAgree = () => {
        setWarning(false);
        handleCloseForm();
    };

    const handleWarningDisagree = () => {
        setWarning(false);
    };

    const handleOpenWarning = () => {
        setWarning(true);
    };

    const tableCells = [
        { prop: (item, index) => <div className={classes.columnName}>{count - (((requestOptions.page - 1) * requestOptions.size) + index)}</div> },
        { prop: item => <div className={classes.columnName}>{item.data[DEFAULT_LOCALE].title}</div> },
        {
            prop: item => <a className={classes.columnAlias} target="_blank" href={`/posts/${item.data[DEFAULT_LOCALE].alias}`} rel="noreferrer">
                {`/posts/${item.data[DEFAULT_LOCALE].alias}`}
            </a>
        },
        {
            prop: item => {
                const author = authors.find((author) => author._id === item.data[DEFAULT_LOCALE].author);
                return <div className={classes.columnName}>{author?.data[DEFAULT_LOCALE].name}</div>;
            }
        },
        {
            prop: item => {
                const date = new Date(item.data[DEFAULT_LOCALE].date);
                return <div className={classes.columnName}>{date.toLocaleDateString('en-US')}</div>;
            }
        },
        { prop: item => item.data[DEFAULT_LOCALE].hidden ? <CloseIcon/> : <CheckIcon/> }
    ];

    if (loading) {
        return <div className={classes.loader}>
            <CircularProgress/>
        </div>;
    }

    return <div>
        <AdminTableWithSubcategory
            headerRows={headerRows}
            tableCells={tableCells}
            values={items}
            activeCategory={activeCategory}
            setActiveCategory={setActiveCategory}
            activeSubcategory={activeSubcategory}
            setActiveSubcategory={setActiveSubcategory}
            categories={categories}
            subcategories={subcategories}
            onDelete={handleItemsDelete}
            onClone={handleItemClone}
            onFormOpen={handleFormOpen}
            setRequestOptions={setRequestOptions}
            requestOptions={requestOptions}
            count={count}
            readonly={true}
            isMultimedia={true}
            search={search}
            handleSearchChange={handleInputChange}
            dateStart={dateStart}
            handleDateStartChange={handleDateStartChange}
            dateEnd={dateEnd}
            handleDateEndChange={handleDateEndChange}
        />
        <Modal open={photoFormOpened} onClose={handleOpenWarning} className={classes.modal} disableEnforceFocus>
            <Paper className={classes.modalContent}>
                <PostSubcategoryItemPhotoForm
                    item={editableItem}
                    categories={categories}
                    authors={authors}
                    activeSubcategory={activeSubcategory}
                    activeCategory={activeCategory}
                    onDone={handleFormDone}
                />
                <IconButton onClick={handleOpenWarning} className={classes.closeButton}>
                    <CloseIcon />
                </IconButton>
            </Paper>
        </Modal>
        <Modal open={videoFormOpened} onClose={handleOpenWarning} className={classes.modal} disableEnforceFocus>
            <Paper className={classes.modalContent}>
                <PostSubcategoryItemVideoForm
                    item={editableItem}
                    categories={categories}
                    authors={authors}
                    activeSubcategory={activeSubcategory}
                    activeCategory={activeCategory}
                    onDone={handleFormDone}
                    page={page}
                />
                <IconButton onClick={handleOpenWarning} className={classes.closeButton}>
                    <CloseIcon />
                </IconButton>
            </Paper>
        </Modal>
        <Dialog
            open={warning}
            onClose={handleWarningDisagree}
        >
            <DialogTitle><FormattedMessage id='adminTable.dialogCloseFormTitle' /></DialogTitle>
            <DialogActions>
                <Button onClick={handleWarningDisagree} color='primary'>
                    <FormattedMessage id='no' />
                </Button>
                <Button onClick={handleWarningAgree} color='primary' autoFocus>
                    <FormattedMessage id='yes' />
                </Button>
            </DialogActions>
        </Dialog>
    </div>;
};

export default ArticlesTablePage;
