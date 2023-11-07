import React, { useState, useEffect } from 'react';

import omit from 'ramda/src/omit';

import CircularProgress from '@material-ui/core/CircularProgress';
import CloseIcon from '@material-ui/icons/Close';
import CheckIcon from '@material-ui/icons/Check';
import Modal from '@material-ui/core/Modal';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';

import AdminTableWithCategories from '../../apps/admin/components/AdminTableWithCategories';
import ExampleCategoryItemForm from '../../apps/admin/components/ExampleCategoryItemForm';
import ExampleCategoryForm from '../../apps/admin/components/ExampleCategoryForm';

import getExamplesCategoriesItems from '../../apps/admin/services/getExamplesCategoriesItems';
import getExamplesCategories from '../../apps/admin/services/getExamplesCategories';
import deleteExamplesCategoriesItems from '../../apps/admin/services/deleteExamplesCategoriesItems';
import deleteExamplesCategories from '../../apps/admin/services/deleteExamplesCategories';
import sortExamplesCategories from '../../apps/admin/services/sortExamplesCategories';

import { DEFAULT_LOCALE } from '../../apps/client/constants';

const headerRows = [
    { id: 'name', label: 'Название' },
    { id: 'alias', label: 'Alias' },
    { id: 'active', label: 'Active' }
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
        alignItems: 'center'
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

const ExampleTablePage = () => {
    const classes = useStyles();
    const [loading, setLoading] = useState(true);
    const [categories, setCategories] = useState([]);
    const [items, setItems] = useState([]);
    const [formOpened, setFormOpened] = useState(false);
    const [categoryFormOpened, setCategoryFormOpened] = useState(false);
    const [editableItem, setEditableItem] = useState(null);

    useEffect(() => {
        Promise.all([
            getExamplesCategories(),
            getExamplesCategoriesItems()
        ])
            .then(([categories, items]) => {
                setCategories(categories);
                setItems(items);
                setLoading(false);
            });
    }, []);

    const handleFormDone = () => {
        Promise.all([
            getExamplesCategories(),
            getExamplesCategoriesItems()
        ])
            .then(([categories, items]) => {
                setCategories(categories);
                setItems(items);
            })
            .then(handleCloseForm);
    };

    const handleItemsDelete = ids => {
        deleteExamplesCategoriesItems(ids)
            .then(() => {
                Promise.all([
                    getExamplesCategories(),
                    getExamplesCategoriesItems()
                ])
                    .then(([categories, items]) => {
                        setCategories(categories);
                        setItems(items);
                    });
            });
    };

    const handleCategoriesDelete = ids => {
        deleteExamplesCategories(ids)
            .then(() => {
                Promise.all([
                    getExamplesCategories(),
                    getExamplesCategoriesItems()
                ])
                    .then(([categories, items]) => {
                        setCategories(categories);
                        setItems(items);
                    });
            });
    };

    const handleCategoriesSort = ids => {
        setCategories(ids.map(id => categories.find(category => category._id === id)));
        sortExamplesCategories(ids)
            .then(() => {
                Promise.all([
                    getExamplesCategories(),
                    getExamplesCategoriesItems()
                ])
                    .then(([categories, items]) => {
                        setCategories(categories);
                        setItems(items);
                    });
            });
    };

    const handleFormOpen = item => () => {
        setFormOpened(true);
        setEditableItem(item);
    };

    const handleCategoryFormOpen = item => () => {
        setCategoryFormOpened(true);
        setEditableItem(item);
    };

    const handleItemClone = item => () => {
        setFormOpened(true);
        setEditableItem(omit(['id'], item));
    };

    const handleCloseForm = () => {
        setFormOpened(false);
        setCategoryFormOpened(false);
        setEditableItem(null);
    };

    const tableCells = [
        { prop: item => <div className={classes.columnName}>{item.data[DEFAULT_LOCALE].name}</div> },
        {
            prop: item => <a className={classes.columnAlias} target="_blank" href={`/examples/${item.data.alias}`} rel="noreferrer">
                {`/examples/${item.data.alias}`}
            </a>
        },
        { prop: item => item.data.hidden ? <CloseIcon/> : <CheckIcon/> }
    ];

    if (loading) {
        return <div className={classes.loader}>
            <CircularProgress/>
        </div>;
    }

    return <div>
        <AdminTableWithCategories
            headerRows={headerRows}
            tableCells={tableCells}
            values={items}
            categories={categories}
            onDelete={handleItemsDelete}
            onClone={handleItemClone}
            onFormOpen={handleFormOpen}
            onCategoryFormOpen={handleCategoryFormOpen}
            onCategoriesDelete={handleCategoriesDelete}
            onCategoriesSort={handleCategoriesSort}
        />
        <Modal open={formOpened} onClose={handleCloseForm} className={classes.modal} disableEnforceFocus>
            <Paper className={classes.modalContent}>
                <ExampleCategoryItemForm item={editableItem} categories={categories} onDone={handleFormDone}/>
            </Paper>
        </Modal>
        <Modal open={categoryFormOpened} onClose={handleCloseForm} className={classes.modal} disableEnforceFocus>
            <Paper className={classes.modalContent}>
                <ExampleCategoryForm item={editableItem} onDone={handleFormDone}/>
            </Paper>
        </Modal>
    </div>;
};

export default ExampleTablePage;
