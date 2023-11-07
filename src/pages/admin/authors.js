import React, { useState, useEffect } from 'react';

import omit from 'ramda/src/omit';

import CircularProgress from '@material-ui/core/CircularProgress';
import Modal from '@material-ui/core/Modal';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';

import AdminTable from '../../apps/admin/components/AdminTable';
import AuthorForm from '../../apps/admin/components/AuthorForm';

import getAuthors from '../../apps/admin/services/getAuthors';
import deleteAuthors from '../../apps/admin/services/deleteAuthors';

import { DEFAULT_LOCALE, LOCALES } from '../../apps/client/constants';
import CloseIcon from '@material-ui/icons/Close';
import IconButton from '@material-ui/core/IconButton';
import DialogTitle from '@material-ui/core/DialogTitle';
import { FormattedMessage } from 'react-intl';
import DialogActions from '@material-ui/core/DialogActions';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';

const headerRows = [
    { id: 'name', label: 'Name' },
    { id: 'avatar', label: 'Photo' }
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
    columnPhoto: {
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
    },
    columnPhotoImg: {
        width: '100px',
        height: 'auto'
    }
}));

const AuthorsTablePage = () => {
    const classes = useStyles();
    const [loading, setLoading] = useState(true);
    const [warning, setWarning] = useState(false);
    const [data, setData] = useState([]);
    const [formOpened, setFormOpened] = useState(false);
    const [editableItem, setEditableItem] = useState(null);

    useEffect(() => {
        getAuthors()
            .then(data => {
                setData(data);
                setLoading(false);
            });
    }, []);

    const handleFormDone = () => {
        getAuthors()
            .then(data => {
                setData(data);
            })
            .then(handleCloseForm);
    };

    const handleItemsDelete = ids => {
        deleteAuthors(ids)
            .then(() => {
                getAuthors()
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

        const data = {};
        LOCALES.forEach((locale) => {
            data[locale] = {
                ...item.data[locale],
                name: `${item.data[locale].name} (copy)`
            };
        });

        setEditableItem(omit(['_id'], {
            ...item,
            data: data
        }));
    };

    const handleCloseForm = () => {
        setFormOpened(false);
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
        { prop: item => <div className={classes.columnName}>{item.data[DEFAULT_LOCALE].name}</div> },
        {
            prop: item => <div className={classes.columnPhoto}>
                {
                    item.data[DEFAULT_LOCALE].avatar[0]?.path &&
                    <img className={classes.columnPhotoImg} src={item.data[DEFAULT_LOCALE].avatar[0].path} alt={item.data[DEFAULT_LOCALE].name}/>
                }
            </div>
        }
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
            headerText='Authors'
            onDelete={handleItemsDelete}
            onClone={handleItemClone}
            onFormOpen={handleFormOpen}
            noActions={true}
            // onSort={() => {}} // if you need a sortable table
        />
        <Modal open={formOpened} onClose={handleOpenWarning} className={classes.modal} disableEnforceFocus>
            <Paper className={classes.modalContent}>
                <AuthorForm item={editableItem} onDone={handleFormDone}/>
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

export default AuthorsTablePage;
