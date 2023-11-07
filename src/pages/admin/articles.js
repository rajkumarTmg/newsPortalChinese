import React, { useState, useEffect, useRef } from 'react';

import omit from 'ramda/src/omit';

import CircularProgress from '@material-ui/core/CircularProgress';
import CloseIcon from '@material-ui/icons/Close';
import Modal from '@material-ui/core/Modal';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';

import AdminTableWithSubcategory from '../../apps/admin/components/AdminTableWithSubcategoryPaginated';
import ArticleSubcategoryItemForm from '../../apps/admin/components/ArticleSubcategoryItemForm';
import ArticleCategoryForm from '../../apps/admin/components/ArticleCategoryForm';
import ArticleSubcategoryForm from '../../apps/admin/components/ArticleSubcategoryForm';

import getArticlesItems from '../../apps/admin/services/article/getCategoriesItemsPaginated';
import getArticlesCategories from '../../apps/admin/services/article/getCategories';
import deleteArticlesCategoriesItems from '../../apps/admin/services/article/deleteCategoriesItems';
import deleteArticlesCategories from '../../apps/admin/services/article/deleteCategories';
import sortArticlesCategories from '../../apps/admin/services/article/sortCategories';
import getArticlesSubcategories from '../../apps/admin/services/article/getSubcategories';
import deleteArticlesSubcategories from '../../apps/admin/services/article/deleteSubcategories';
import sortArticlesSubcategories from '../../apps/admin/services/article/sortSubcategories';

import getAuthors from '../../apps/admin/services/getAuthors';
import getPageByPageId from '../../apps/admin/services/getPageByPageId';

import { DEFAULT_LOCALE, LOCALES } from '../../apps/client/constants';
import InsertLinkForm from '../../apps/admin/components/InsertLinkForm';
import saveAuthorUnique from '../../apps/admin/services/saveAuthorUnique';
import debounce from 'lodash.debounce';
import IconButton from '@material-ui/core/IconButton';
import { FILES_FOLDER } from '../../../server/constants';
import DialogTitle from '@material-ui/core/DialogTitle';
import { FormattedMessage } from 'react-intl';
import DialogActions from '@material-ui/core/DialogActions';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import classNames from 'classnames';
import CategorySelectorForm from '../../apps/admin/components/CategorySelectorForm';

const headerRows = [
    { id: 'number', label: '№' },
    { id: 'name', label: 'Title' },
    { id: 'alias', label: 'Alias' },
    { id: 'author', label: 'Author' },
    { id: 'date', label: 'Date' },
    { id: 'status', label: 'Status' }
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
    columnTitle: {
        fontSize: '1.1125rem',
        maxWidth: '600px',
        whiteSpace: 'nowrap',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        '@media (max-width:1020px)': {
            maxWidth: '300px'
        },
        '@media (max-width:750px)': {
            maxWidth: '200px'
        },
        '@media (max-width:340px)': {
            maxWidth: '100px'
        }
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
        maxWidth: '400px',
        display: 'block',
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
    statusLabel: {
        padding: '3px 10px',
        textTransform: 'capitalize',
        borderRadius: '5px',
        textAlign: 'center',
        maxWidth: '100px'
    },
    published: {
        background: '#99edc3'
    },
    private: {
        background: '#ffb3b3'
    },
    draft: {
        background: '#d3d3d3'
    }
}));

const PAGE_ID = 'main';

const ArticlesTablePage = () => {
    const classes = useStyles();
    const [loading, setLoading] = useState(true);
    const [warning, setWarning] = useState(false);
    const [articleWarning, setArticleWarning] = useState(false);
    const [activeCategory, setActiveCategory] = useState(null);
    const [activeSubcategory, setActiveSubcategory] = useState(null);
    const [categories, setCategories] = useState([]);
    const [subcategories, setSubcategories] = useState([]);
    const [authors, setAuthors] = useState([]);
    const [items, setItems] = useState([]);
    const [count, setCount] = useState(0);
    const [search, setSearch] = useState('');
    const [status, setStatus] = useState('');
    const [dateStart, setDateStart] = useState('');
    const [dateEnd, setDateEnd] = useState('');
    const [formOpened, setFormOpened] = useState(false);
    const [categoryFormOpened, setCategoryFormOpened] = useState(false);
    const [subcategoryFormOpened, setSubcategoryFormOpened] = useState(false);
    const [editableItem, setEditableItem] = useState(null);
    const [linkFormOpened, setLinkFormOpened] = useState(false);
    const [categorySelectorOpened, setCategorySelectorOpened] = useState(false);
    const [selected, setSelected] = useState(null);
    const [requestOptions, setRequestOptions] = useState({
        page: 1,
        size: 10,
        sort: 'desc',
        categoryId: null,
        subcategoryId: null,
        search: search,
        dateStart: null,
        dateEnd: null,
        status: status
    });
    const [isFieldsChanged, setFieldsChanged] = useState(false);
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

    const handleStatusChange = (event) => {
        setStatus(event.target.value);
    };

    useEffect(() => {
        setRequestOptions({
            ...requestOptions,
            ...(dateStart
                ? { dateStart: new Date(dateStart).getTime() }
                : { dateStart: '' }),
            ...(dateEnd
                // eslint-disable-next-line max-len
                ? { dateEnd: new Date(dateEnd).getTime() + DAY_MILISECONDS } // to include articles created during the 24 hours of selected day (timestamp time is 00:00)
                : { dateEnd: '' }),
            ...(status ? { status: status } : { status: '' }),
            page: 1
        });
    }, [dateStart, dateEnd, status]);

    const handleDateStartChange = (event) => {
        setDateStart(event.target.value);
    };

    const handleDateEndChange = (event) => {
        setDateEnd(event.target.value);
    };

    useEffect(() => {
        getArticlesItems({ ...requestOptions }).then((items) => {
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
            getArticlesItems({ ...requestOptions }),
            getPageByPageId(PAGE_ID)
        ])
            .then(([categories, subcategories, items, page]) => {
                setCategories(categories);
                setSubcategories(subcategories);
                setItems(items.paginatedResults);
                setCount(items.totalCount);
                setPage(page);
            })
            .then(() => {
                if (categoryFormOpened || subcategoryFormOpened || categorySelectorOpened) {
                    handleCloseForm();
                }
            });
    };

    const handleLinkFormDone = (result) => {
        const resultParsed = JSON.parse(result);
        const image = resultParsed.data.find((field) => field.name === 'image')?.data[0];
        const title = resultParsed.data.find((field) => field.name === 'title')?.data[0];
        const shortDescription = resultParsed.data.find((field) => field.name === 'shortDescription')?.data[0];
        let description = resultParsed.data.find((field) => field.name === 'description')?.data[0];

        if (description) {
            const descriptionSplitted = description.split('src="');
            descriptionSplitted.forEach((chunk, i) => {
                if (!i) {
                    return;
                }

                const chunkParsed = chunk.split('"');
                let url = chunkParsed[0];

                if (descriptionSplitted[i - 1]?.includes('<img class="image-body')) {
                    let imagePath = url && url.split('/').slice(-1)[0];
                    const isTail = imagePath.indexOf('?itok=');

                    if (isTail) {
                        imagePath = imagePath.slice(0, isTail);
                    }

                    // eslint-disable-next-line max-len
                    if (imagePath.length > 250) { // when downloading images with webscrapper, some of file names where shortened in order to keep the file valid on different OS. Here we shorten the links, too, so those files can be found in the files folder. See server/api/client/article/queries/getArticleZhen.js
                        const [name, extension] = imagePath.split('.');
                        const shortenedName = name.slice(0, 240);
                        imagePath = shortenedName + '.' + extension;
                    }
                    imagePath = encodeURI(imagePath);
                    url = `/${FILES_FOLDER}/${imagePath}`;
                    chunkParsed[0] = url;
                }

                descriptionSplitted[i] = chunkParsed.join('"');
            });
            description = descriptionSplitted.join('src="');
        }

        const author = resultParsed.data.find((field) => field.name === 'author')?.data[0];
        let date = resultParsed.data.find((field) => field.name === 'date')?.data[0];

        if (date) {
            const indexDay = date && date.indexOf('日');
            const day = indexDay && date.slice(indexDay - 2, indexDay);
            const indexMonth = date && date.indexOf('月');
            let month = indexMonth && date.slice(indexMonth - 2, indexMonth);
            month = parseInt(month, 10) - 1;
            const indexYear = date && date.indexOf('年');
            const year = indexYear && date.slice(indexYear - 4, indexYear);

            if (year && month && day) {
                date = new Date(year, month, day).valueOf();
            } else {
                date = new Date().valueOf();
            }
        }
        let imagePath = image && image.split('/').slice(-1)[0];

        const isTail = imagePath && imagePath.indexOf('?itok=');

        if (isTail) {
            imagePath = imagePath.slice(0, isTail);
        }
        if (imagePath?.length > 250) {
            const [name, extension] = imagePath.split('.');
            const shortenedName = name.slice(0, 240);
            imagePath = shortenedName + '.' + extension;
        }
        imagePath = imagePath && encodeURI(imagePath);

        const dataDefault = {
            title: '',
            shortDescription: '',
            description: '',
            author: '',
            date: date,
            avatar: image
                ? [{
                    path: `/${FILES_FOLDER}/${imagePath}`
                }]
                : [],
            category: activeCategory ? activeCategory._id : null,
            subcategory: activeSubcategory ? activeSubcategory._id : null,
            alias: '',
            seoTitle: '',
            seoDescription: '',
            seoKeywords: ''
        };

        const data = {
            ...dataDefault,
            title: title,
            shortDescription: shortDescription,
            description: description
        };

        if (author) {
            const authorData = {
                name: author,
                avatar: []
            };
            const newAuthor = {
                en: authorData,
                'zh-tw': authorData,
                'zh-cn': authorData
            };
            saveAuthorUnique(newAuthor).then((result) => {
                getAuthors().then((authors) => {
                    setAuthors(authors);
                    const item = {
                        data: {
                            en: { ...dataDefault, author: result._id },
                            'zh-tw': { ...dataDefault, author: result._id },
                            'zh-cn': { ...data, author: result._id }
                        }
                    };
                    setEditableItem(item);
                    setFormOpened(true);
                    setLinkFormOpened(false);
                });
            });
        } else {
            const item = {
                data: {
                    en: dataDefault,
                    'zh-tw': dataDefault,
                    'zh-cn': data
                }
            };
            setEditableItem(item);
            setFormOpened(true);
            setLinkFormOpened(false);
        }
    };

    const handleItemsDelete = ids => {
        deleteArticlesCategoriesItems(ids)
            .then(() => {
                Promise.all([
                    getArticlesCategories(),
                    getArticlesItems({ ...requestOptions })
                ])
                    .then(([categories, items]) => {
                        setCategories(categories);
                        setItems(items.paginatedResults);
                        setCount(items.totalCount);
                    });
            });
    };

    const handleCategoriesDelete = ids => {
        deleteArticlesCategories(ids)
            .then(() => {
                Promise.all([
                    getArticlesCategories(),
                    getArticlesItems({ ...requestOptions })
                ])
                    .then(([categories, items]) => {
                        setCategories(categories);
                        setItems(items.paginatedResults);
                        setCount(items.totalCount);
                    });
            });
    };

    const handleSubcategoriesDelete = (ids, categoryId) => {
        deleteArticlesSubcategories(ids, categoryId)
            .then(() => {
                Promise.all([
                    getArticlesCategories(),
                    getArticlesSubcategories(categoryId),
                    getArticlesItems({ ...requestOptions })
                ])
                    .then(([categories, subcategories, items]) => {
                        setCategories(categories);
                        setSubcategories(subcategories);
                        setItems(items.paginatedResults);
                        setCount(items.totalCount);
                    });
            });
    };

    const handleCategoriesSort = ids => {
        setCategories(ids.map(id => categories.find(category => category._id === id)));
        sortArticlesCategories(ids)
            .then(() => {
                Promise.all([
                    getArticlesCategories(),
                    getArticlesItems({ ...requestOptions })
                ])
                    .then(([categories, items]) => {
                        setCategories(categories);
                        setItems(items.paginatedResults);
                        setCount(items.totalCount);
                    });
            });
    };

    const handleSubcategoriesSort = (ids, categoryId) => {
        setSubcategories(ids.map(id => subcategories?.find(subcategory => subcategory._id === id)));
        sortArticlesSubcategories(ids, categoryId)
            .then(() => {
                Promise.all([
                    getArticlesCategories(),
                    getArticlesSubcategories(categoryId),
                    getArticlesItems({ ...requestOptions })
                ])
                    .then(([categories, subcategories, items]) => {
                        setCategories(categories);
                        setSubcategories(subcategories);
                        setItems(items.paginatedResults);
                        setCount(items.totalCount);
                    });
            });
    };

    const handleFormOpen = item => () => {
        setFormOpened(true);
        setEditableItem(item);
    };

    const handleCategoryFormOpen = item => (event) => {
        event.stopPropagation();
        setCategoryFormOpened(true);
        setEditableItem(item);
    };

    const handleSubcategoryFormOpen = item => (event) => {
        event.stopPropagation();
        setSubcategoryFormOpened(true);
        setEditableItem(item);
    };

    const onCategorySelectorOpen = selected => (event) => {
        event.stopPropagation();
        setCategorySelectorOpened(true);
        setSelected(selected);
    };

    const handleItemClone = item => () => {
        setFormOpened(true);

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
        setFormOpened(false);
        setCategoryFormOpened(false);
        setSubcategoryFormOpened(false);
        setLinkFormOpened(false);
        setCategorySelectorOpened(false);
        setSelected(null);
        setEditableItem(null);
        setFieldsChanged(false);
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

    const handleAddNewsClick = () => {
        setLinkFormOpened(true);
    };

    const handleArticleWarning = () => {
        if (isFieldsChanged) {
            setArticleWarning(true);
        } else {
            handleCloseForm();
        }
    };

    const handleArticleWarningAgree = () => {
        setArticleWarning(false);
        handleCloseForm();
    };

    const handleArticleWarningDisagree = () => {
        setArticleWarning(false);
    };

    const tableCells = [
        { prop: (item, index) => <div className={classes.columnName}>{count - (((requestOptions.page - 1) * requestOptions.size) + index)}</div> },
        { prop: item => <div className={classes.columnTitle}>{item.data[DEFAULT_LOCALE].title}</div> },
        {
            prop: item => item.data[DEFAULT_LOCALE].status !== 'draft' && <a
                className={classes.columnAlias}
                target="_blank"
                href={`${item.data[DEFAULT_LOCALE].status === 'private' ? '/preview' : ''}/${item.data[DEFAULT_LOCALE].alias}`}
                rel="noreferrer"
            >
                {`${item.data[DEFAULT_LOCALE].status === 'private' ? '/preview' : ''}/${item.data[DEFAULT_LOCALE].alias}`}
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
        {
            prop: item => <div className={classes.columnStatus}>
                <div className={classNames(classes.statusLabel, {
                    [classes[item.data[DEFAULT_LOCALE].status]]: item.data[DEFAULT_LOCALE].status
                })}>{item.data[DEFAULT_LOCALE].status}</div>
            </div>
        }
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
            onCategoryFormOpen={handleCategoryFormOpen}
            onCategoriesDelete={handleCategoriesDelete}
            onCategoriesSort={handleCategoriesSort}
            onSubcategoryFormOpen={handleSubcategoryFormOpen}
            onSubcategoriesDelete={handleSubcategoriesDelete}
            onSubcategoriesSort={handleSubcategoriesSort}
            setRequestOptions={setRequestOptions}
            requestOptions={requestOptions}
            count={count}
            handleAddNewsClick={handleAddNewsClick}
            search={search}
            handleSearchChange={handleInputChange}
            handleStatusChange={handleStatusChange}
            status={status}
            dateStart={dateStart}
            handleDateStartChange={handleDateStartChange}
            dateEnd={dateEnd}
            handleDateEndChange={handleDateEndChange}
            onCategorySelectorOpen={onCategorySelectorOpen}
        />
        <Modal open={formOpened} onClose={handleArticleWarning} className={classes.modal} disableEnforceFocus disableAutoFocus disablePortal>
            <Paper className={classes.modalContent}>
                <ArticleSubcategoryItemForm
                    item={editableItem}
                    categories={categories}
                    authors={authors}
                    activeSubcategory={activeSubcategory}
                    activeCategory={activeCategory}
                    onDone={handleFormDone}
                    setFieldsChanged={setFieldsChanged}
                    onClose={handleArticleWarning}
                    page={page}
                />
                <IconButton onClick={handleArticleWarning} className={classes.closeButton}>
                    <CloseIcon />
                </IconButton>
            </Paper>
        </Modal>
        <Modal open={categoryFormOpened} onClose={handleOpenWarning} className={classes.modal} disableEnforceFocus disableAutoFocus disablePortal>
            <Paper className={classes.modalContent}>
                <ArticleCategoryForm item={editableItem} onDone={handleFormDone}/>
                <IconButton onClick={handleOpenWarning} className={classes.closeButton}>
                    <CloseIcon />
                </IconButton>
            </Paper>
        </Modal>
        <Modal open={subcategoryFormOpened} onClose={handleOpenWarning} className={classes.modal} disableEnforceFocus disableAutoFocus disablePortal>
            <Paper className={classes.modalContent}>
                <ArticleSubcategoryForm activeCategory={activeCategory} item={editableItem} onDone={handleFormDone}/>
                <IconButton onClick={handleOpenWarning} className={classes.closeButton}>
                    <CloseIcon />
                </IconButton>
            </Paper>
        </Modal>
        <Modal open={linkFormOpened} onClose={handleOpenWarning} className={classes.modal} disableEnforceFocus disableAutoFocus disablePortal>
            <Paper className={classes.modalContent}>
                <InsertLinkForm onDone={handleLinkFormDone}/>
                <IconButton onClick={handleOpenWarning} className={classes.closeButton}>
                    <CloseIcon />
                </IconButton>
            </Paper>
        </Modal>
        <Modal open={categorySelectorOpened} onClose={handleOpenWarning} className={classes.modal} disableEnforceFocus disableAutoFocus disablePortal>
            <Paper className={classes.modalContent}>
                <CategorySelectorForm
                    onDone={handleFormDone}
                    activeCategory={activeCategory}
                    activeSubcategory={activeSubcategory}
                    categories={categories}
                    selected={selected}
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
        <Dialog
            open={articleWarning}
            onClose={handleArticleWarningDisagree}
        >
            <DialogTitle><FormattedMessage id='adminTable.dialogCloseArticleFormTitle'/>?</DialogTitle>
            <DialogActions>
                <Button onClick={handleArticleWarningDisagree} color='primary'>
                    <FormattedMessage id='no' />
                </Button>
                <Button onClick={handleArticleWarningAgree} color='primary' autoFocus>
                    <FormattedMessage id='yes' />
                </Button>
            </DialogActions>
        </Dialog>
    </div>;
};

export default ArticlesTablePage;
