import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

import omit from 'ramda/src/omit';

import CircularProgress from '@material-ui/core/CircularProgress';
import Modal from '@material-ui/core/Modal';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';

import AdminVoteTable from '../../apps/admin/components/AdminVoteTable';
import VotesForm from '../../apps/admin/components/VotesForm';

import getVoteItems from '../../apps/admin/services/votes/getVoteItems';
import deleteVote from '../../apps/admin/services/votes/deleteVote';

import { DEFAULT_LOCALE } from '../../apps/client/constants';
import { PAGES_KEYS } from '../../apps/admin/constants/constants';
import CloseIcon from '@material-ui/icons/Close';
import IconButton from '@material-ui/core/IconButton';
import { Box, Tab, Tabs } from '@material-ui/core';
import PropTypes from 'prop-types';
import VotesCompletedForm from '../../apps/admin/components/VotesCompletedForm';
import DialogTitle from '@material-ui/core/DialogTitle';
import { FormattedMessage } from 'react-intl';
import DialogActions from '@material-ui/core/DialogActions';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import CheckIcon from '@material-ui/icons/Check';

const headerRows = [
    { id: 'name', label: 'Name' },
    { id: 'description', label: 'Description' },
    { id: 'date', label: 'End Date' },
    { id: 'priority', label: 'Selected Locations' },
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
        maxWidth: '200px',
        whiteSpace: 'nowrap',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        '@media (max-width:750px)': {
            maxWidth: '100px'
        },
        '@media (max-width:340px)': {
            maxWidth: '80px'
        }
    },
    columnDescription: {
        maxWidth: '400px',
        display: 'block',
        '& p': {
            whiteSpace: 'nowrap',
            overflow: 'hidden',
            textOverflow: 'ellipsis'
        },
        '@media (max-width:850px)': {
            maxWidth: '100px'
        },
        '@media (max-width:400px)': {
            maxWidth: '50px'
        }
    }
}));

const VoteTable = ({ completed }) => {
    const classes = useStyles();
    const [loading, setLoading] = useState(true);
    const [warning, setWarning] = useState(false);
    const [data, setData] = useState([]);
    const [formOpened, setFormOpened] = useState(false);
    const [editableItem, setEditableItem] = useState(null);
    const router = useRouter();

    useEffect(() => {
        getVoteItems({ completed })
            .then(data => {
                setData(data);
                setLoading(false);
            });
    }, []);

    const handleFormDone = () => {
        getVoteItems({ completed })
            .then(data => {
                setData(data);
            })
            .then(handleCloseForm);
    };

    const handleItemsDelete = ids => {
        deleteVote(ids)
            .then(() => {
                getVoteItems({ completed })
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
        { prop: item => <div className={classes.columnName}>{item.data[DEFAULT_LOCALE].title}</div> },
        {
            prop: item => <div className={classes.columnDescription} dangerouslySetInnerHTML={{ __html: item.data[DEFAULT_LOCALE].editor }}/>
        },
        {
            prop: item => {
                const date = new Date(item.data[DEFAULT_LOCALE].date);
                return <div className={classes.columnName}>{date.toLocaleDateString('en-US')}</div>;
            }
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
        <AdminVoteTable
            headerRows={headerRows}
            tableCells={tableCells}
            values={data}
            headerText='Votes'
            onDelete={handleItemsDelete}
            onClone={handleItemClone}
            onFormOpen={handleFormOpen}
            noActions={true}
            voteCompleted={completed}
        />
        <Modal open={formOpened} onClose={handleOpenWarning} className={classes.modal} disableEnforceFocus>
            <Paper className={classes.modalContent}>
                {
                    !completed
                        ? <VotesForm item={editableItem} onDone={handleFormDone}/>
                        : <VotesCompletedForm item={editableItem} onDone={handleFormDone}/>
                }
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

VoteTable.propTypes = {
    completed: PropTypes.bool
};

const VotesPage = () => {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Box sx={{ width: '100%', color: 'background.paper' }}>
            <Tabs value={value} onChange={handleChange} centered>
                <Tab label="Current Votes"/>
                <Tab label="Completed Votes" />
            </Tabs>
            {
                value === 0 && <VoteTable completed={false}/>
            }
            {
                value === 1 && <VoteTable completed={true}/>
            }
        </Box>
    );
};

export default VotesPage;
