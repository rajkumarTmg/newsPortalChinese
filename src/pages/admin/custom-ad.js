import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';

import omit from 'ramda/src/omit';

import CircularProgress from '@material-ui/core/CircularProgress';
import Modal from '@material-ui/core/Modal';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';

import CustomAdTable from '../../apps/admin/components/CustomAdTable';
import CustomAdForm from '../../apps/admin/components/CustomAdForm';

import getCommercialItems from '../../apps/admin/services/commercial/getCommercialItems';
import deleteExamples from '../../apps/admin/services/commercial/deleteCommercial';
import { PAGES_KEYS } from '../../apps/admin/constants/constants';
import CloseIcon from '@material-ui/icons/Close';
import IconButton from '@material-ui/core/IconButton';
import DialogTitle from '@material-ui/core/DialogTitle';
import { FormattedMessage } from 'react-intl';
import DialogActions from '@material-ui/core/DialogActions';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import { DEFAULT_LOCALE } from '../../apps/client/constants';
import CheckIcon from '@material-ui/icons/Check';

const headerRows = [
    { id: 'name', label: 'Name' },
    { id: 'link', label: 'Link' },
    { id: 'photos', label: 'Photos' },
    { id: 'pages', label: 'Locations' },
    { id: 'showAll', label: 'Show Everywhere' },
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
    columnLink: {
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
    columnPhotos: {
        display: 'flex',
        flexWrap: 'wrap',
        width: '300px'
    },
    columnPhoto: {
        padding: '5px'
    }
}));

const CustomCommercialTable = () => {
    const router = useRouter();
    const classes = useStyles();
    const [loading, setLoading] = useState(true);
    const [warning, setWarning] = useState(false);
    const [data, setData] = useState([]);
    const [formOpened, setFormOpened] = useState(false);
    const [editableItem, setEditableItem] = useState(null);

    useEffect(() => {
        getCommercialItems()
            .then(data => {
                setData(data);
                setLoading(false);
            });
    }, []);

    const handleFormDone = () => {
        getCommercialItems()
            .then(data => {
                setData(data);
            })
            .then(handleCloseForm);
    };

    const handleItemsDelete = ids => {
        deleteExamples(ids)
            .then(() => {
                getCommercialItems()
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
        setEditableItem(omit(['_id'], item));
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
        { prop: item => <div className={classes.columnName}>{item.data[router.locale]?.name}</div> },
        {
            prop: item => <a className={classes.columnAlias} target="_blank" href={item.data[router.locale]?.link} rel="noreferrer">
                {item.data[router.locale]?.link}
            </a>
        },
        {
            prop: item =>
                <div className={classes.columnPhotos}>
                    {item.data[router.locale]?.photos.map(({ id, path }) =>
                        <div key={id} className={classes.columnPhoto}>
                            <Image width={100} height={50} src={path} objectFit='cover'/>
                        </div>) }
                </div>
        },
        {
            prop: item => <div>
                {item.data[router.locale]?.priorities.map((pageItem) => <p key={pageItem.article}>{
                    PAGES_KEYS[
                        pageItem[router.locale]?.page
                    ]
                }</p>)}
            </div>
        },
        { prop: item => item.data[DEFAULT_LOCALE].showAll ? <CheckIcon/> : <CloseIcon/> },
        { prop: item => item.data[DEFAULT_LOCALE].hidden ? <CloseIcon/> : <CheckIcon/> }
    ];

    if (loading) {
        return <div className={classes.loader}>
            <CircularProgress/>
        </div>;
    }

    return <div>
        <CustomAdTable
            headerRows={headerRows}
            tableCells={tableCells}
            values={data}
            headerText='Advertising blocks'
            onDelete={handleItemsDelete}
            onClone={handleItemClone}
            onFormOpen={handleFormOpen}
            noActions={true}
            // onSort={() => {}} // if you need a sortable table
        />
        <Modal open={formOpened} onClose={handleOpenWarning} className={classes.modal} disableEnforceFocus>
            <Paper className={classes.modalContent}>
                <CustomAdForm item={editableItem} onDone={handleFormDone}/>
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

export default CustomCommercialTable;
