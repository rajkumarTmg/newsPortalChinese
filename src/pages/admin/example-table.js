import React, { useState, useEffect } from 'react';

import omit from 'ramda/src/omit';

import CircularProgress from '@material-ui/core/CircularProgress';
import CloseIcon from '@material-ui/icons/Close';
import CheckIcon from '@material-ui/icons/Check';
import Modal from '@material-ui/core/Modal';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';

import AdminTable from '../../apps/admin/components/AdminTable';
import ExampleForm from '../../apps/admin/components/ExampleForm';

import getExamples from '../../apps/admin/services/getExamples';
import deleteExamples from '../../apps/admin/services/deleteExamples';

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
    const [data, setData] = useState([]);
    const [formOpened, setFormOpened] = useState(false);
    const [editableItem, setEditableItem] = useState(null);

    useEffect(() => {
        getExamples()
            .then(data => {
                setData(data);
                setLoading(false);
            });
    }, []);

    const handleFormDone = () => {
        getExamples()
            .then(data => {
                setData(data);
            })
            .then(handleCloseForm);
    };

    const handleItemsDelete = ids => {
        deleteExamples(ids)
            .then(() => {
                getExamples()
                    .then(data => {
                        setData(data);
                    });
            });
    };

    const handleFormOpen = item => () => {
        setFormOpened(true);
        setEditableItem(item);
    };

    const handleItemClone = item => () => {
        setFormOpened(true);
        setEditableItem(omit(['id'], item));
    };

    const handleCloseForm = () => {
        setFormOpened(false);
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
        <AdminTable
            headerRows={headerRows}
            tableCells={tableCells}
            values={data}
            headerText='Примеры'
            onDelete={handleItemsDelete}
            onClone={handleItemClone}
            onFormOpen={handleFormOpen}
            // onSort={() => {}} // if you need a sortable table
        />
        <Modal open={formOpened} onClose={handleCloseForm} className={classes.modal} disableEnforceFocus>
            <Paper className={classes.modalContent}>
                <ExampleForm item={editableItem} onDone={handleFormDone}/>
            </Paper>
        </Modal>
    </div>;
};

export default ExampleTablePage;
