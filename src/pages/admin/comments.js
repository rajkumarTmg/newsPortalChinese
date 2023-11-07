import React, { useState, useEffect, useRef, useMemo } from 'react';

import CircularProgress from '@material-ui/core/CircularProgress';
import { makeStyles } from '@material-ui/core/styles';

import getCommentsArticle from '../../apps/admin/services/article/getComments';
import deleteArticleComments from '../../apps/admin/services/article/deleteArticleComments';
import approveArticleComments from '../../apps/admin/services/article/approveArticleComments';

import getCommentsPost from '../../apps/admin/services/post/getComments';
import deletePostComments from '../../apps/admin/services/post/deletePostComments';
import approvePostComments from '../../apps/admin/services/post/approvePostComments';
import { DEFAULT_LOCALE } from '../../apps/client/constants';
import debounce from 'lodash.debounce';
import AdminTable from '../../apps/admin/components/AdminTablePaginated';

import { Box, Tab, Tabs } from '@material-ui/core';
import Paper from '@material-ui/core/Paper';
import CommentForm from '../../apps/admin/components/CommentForm';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Modal from '@material-ui/core/Modal';
import DialogTitle from '@material-ui/core/DialogTitle';
import { FormattedMessage } from 'react-intl';
import DialogActions from '@material-ui/core/DialogActions';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';

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
    columnText: {
        maxWidth: '600px',
        '@media (max-width:1020px)': {
            maxWidth: '400px'
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
    },
    columnPhotoImg: {
        maxWidth: '100%',
        height: 'auto'
    }
}));

const ArticlesComments = () => {
    const classes = useStyles();
    const [loading] = useState(false);
    const [warning, setWarning] = useState(false);
    const [formOpened, setFormOpened] = useState(false);
    const [editableItem, setEditableItem] = useState(null);
    const [items, setItems] = useState([]);
    const [count, setCount] = useState(0);
    const [search, setSearch] = useState('');
    const [dateStart, setDateStart] = useState('');
    const [dateEnd, setDateEnd] = useState('');
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
    const DAY_MILISECONDS = 24 * 60 * 60 * 1000;

    useEffect(() => {
        handleFetchOptionsDebounced?.current(search);
    }, [search]);

    const handleSetSearchQuery = (search) => {
        setRequestOptions({
            ...requestOptions,
            search: search
        });
    };

    const handleFetchOptionsDebounced = useRef(debounce(handleSetSearchQuery, 200));

    const handleInputChange = (event) => {
        setSearch(event.target.value);
    };

    useMemo(() => {
        setRequestOptions({
            ...requestOptions,
            ...(dateStart
                ? { dateStart: new Date(dateStart).getTime() }
                : { dateStart: '' }),
            ...(dateEnd
                // eslint-disable-next-line max-len
                ? { dateEnd: new Date(dateEnd).getTime() + DAY_MILISECONDS } // to include articles created during the 24 hours of selected day (timestamp time is 00:00)
                : { dateEnd: '' })
        });
    }, [dateStart, dateEnd]);

    const handleDateStartChange = (event) => {
        setDateStart(event.target.value);
    };

    const handleDateEndChange = (event) => {
        setDateEnd(event.target.value);
    };

    useEffect(() => {
        getCommentsArticle({ ...requestOptions }).then((items) => {
            setItems(items.paginatedResults);
            setCount(items.totalCount);
        });
    }, [requestOptions]);

    const handleItemDelete = (comments) => {
        const ids = comments.reduce((resultArray, item) => {
            if (!resultArray.filter((commentItem) => commentItem.articleId === item.object._id).length) {
                resultArray = [...resultArray, { articleId: item.object._id, commentsIds: [item.comment._id] }];
            } else {
                const index = resultArray.findIndex((commentItem) => commentItem.articleId === item.object._id);
                resultArray[index] = { ...resultArray[index], commentsIds: [...resultArray[index].commentsIds, item.comment._id] };
            }

            return resultArray;
        }, []);

        deleteArticleComments(ids)
            .then(() => {
                Promise.all([
                    getCommentsArticle({ ...requestOptions })
                ])
                    .then(([items]) => {
                        setItems(items.paginatedResults);
                        setCount(items.totalCount);
                    });
            });
    };

    const handleItemApprove = (comments) => {
        const ids = comments.reduce((resultArray, item) => {
            if (!resultArray.filter((commentItem) => commentItem.articleId === item.object._id).length) {
                resultArray = [...resultArray, { articleId: item.object._id, commentsIds: [item.comment._id] }];
            } else {
                const index = resultArray.findIndex((commentItem) => commentItem.articleId === item.object._id);
                resultArray[index] = { ...resultArray[index], commentsIds: [...resultArray[index].commentsIds, item.comment._id] };
            }

            return resultArray;
        }, []);

        approveArticleComments(ids)
            .then(() => {
                Promise.all([
                    getCommentsArticle({ ...requestOptions })
                ])
                    .then(([items]) => {
                        setItems(items.paginatedResults);
                        setCount(items.totalCount);
                    });
            });
    };

    const handleFormOpen = item => () => {
        setFormOpened(true);
        setEditableItem(item);
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

    const handleFormDone = () => {
        getCommentsArticle({ ...requestOptions })
            .then(items => {
                setItems(items.paginatedResults);
                setCount(items.totalCount);
            })
            .then(handleCloseForm);
    };

    const tableCells = [
        { prop: item => <div className={classes.columnName}>{item.comment.userName}</div> },
        { prop: item => <div className={classes.columnText}>{item.comment.text}</div> },
        {
            prop: item => {
                const date = new Date(item.comment.createdAt);
                return <div className={classes.columnName}>{date.toLocaleDateString('en-US')}</div>;
            }
        },
        { prop: item => <div className={classes.columnName}>{item.object.data[DEFAULT_LOCALE].title}</div> },
        {
            prop: item => <a className={classes.columnAlias} target="_blank" href={`/${item.object.alias}`} rel="noreferrer">
                {`/${item.object.alias}`}
            </a>
        }
    ];

    const headerRows = [
        { id: 'name', label: 'Name' },
        { id: 'comment', label: 'Comment' },
        { id: 'date', label: 'Date' },
        { id: 'articleName', label: 'Article Title' },
        { id: 'articleLink', label: 'Article Link' }
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
            values={items}
            headerText='Article Comments'
            onDelete={handleItemDelete}
            onApprove={handleItemApprove}
            isComment={true}
            onFormOpen={handleFormOpen}
            setRequestOptions={setRequestOptions}
            requestOptions={requestOptions}
            count={count}
            search={search}
            handleSearchChange={handleInputChange}
            dateStart={dateStart}
            handleDateStartChange={handleDateStartChange}
            dateEnd={dateEnd}
            handleDateEndChange={handleDateEndChange}
            // onSort={() => {}} // if you need a sortable table
        />
        <Modal open={formOpened} onClose={handleOpenWarning} className={classes.modal} disableEnforceFocus>
            <Paper className={classes.modalContent}>
                <CommentForm item={editableItem} onDone={handleFormDone} isArticleComment={true}/>
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

const PostsComments = () => {
    const classes = useStyles();
    const [loading] = useState(false);
    const [warning, setWarning] = useState(false);
    const [formOpened, setFormOpened] = useState(false);
    const [editableItem, setEditableItem] = useState(null);
    const [items, setItems] = useState([]);
    const [count, setCount] = useState(0);
    const [search, setSearch] = useState('');
    const [dateStart, setDateStart] = useState('');
    const [dateEnd, setDateEnd] = useState('');
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
    const DAY_MILISECONDS = 24 * 60 * 60 * 1000;

    useEffect(() => {
        handleFetchOptionsDebounced?.current(search);
    }, [search]);

    const handleSetSearchQuery = (search) => {
        setRequestOptions({
            ...requestOptions,
            search: search
        });
    };

    const handleFetchOptionsDebounced = useRef(debounce(handleSetSearchQuery, 200));

    const handleInputChange = (event) => {
        setSearch(event.target.value);
    };

    useMemo(() => {
        setRequestOptions({
            ...requestOptions,
            ...(dateStart
                ? { dateStart: new Date(dateStart).getTime() }
                : { dateStart: '' }),
            ...(dateEnd
                // eslint-disable-next-line max-len
                ? { dateEnd: new Date(dateEnd).getTime() + DAY_MILISECONDS } // to include articles created during the 24 hours of selected day (timestamp time is 00:00)
                : { dateEnd: '' })
        });
    }, [dateStart, dateEnd]);

    const handleDateStartChange = (event) => {
        setDateStart(event.target.value);
    };

    const handleDateEndChange = (event) => {
        setDateEnd(event.target.value);
    };

    useEffect(() => {
        getCommentsPost({ ...requestOptions }).then((items) => {
            setItems(items.paginatedResults);
            setCount(items.totalCount);
        });
    }, [requestOptions]);

    const handleItemDelete = (comments) => {
        const ids = comments.reduce((resultArray, item) => {
            if (!resultArray.filter((commentItem) => commentItem.postId === item.object._id).length) {
                resultArray = [...resultArray, { postId: item.object._id, commentsIds: [item.comment._id] }];
            } else {
                const index = resultArray.findIndex((commentItem) => commentItem.postId === item.object._id);
                resultArray[index] = { ...resultArray[index], commentsIds: [...resultArray[index].commentsIds, item.comment._id] };
            }

            return resultArray;
        }, []);

        deletePostComments(ids)
            .then(() => {
                Promise.all([
                    getCommentsPost({ ...requestOptions })
                ])
                    .then(([items]) => {
                        setItems(items.paginatedResults);
                        setCount(items.totalCount);
                    });
            });
    };

    const handleItemApprove = (comments) => {
        const ids = comments.reduce((resultArray, item) => {
            if (!resultArray.filter((commentItem) => commentItem.postId === item.object._id).length) {
                resultArray = [...resultArray, { postId: item.object._id, commentsIds: [item.comment._id] }];
            } else {
                const index = resultArray.findIndex((commentItem) => commentItem.postId === item.object._id);
                resultArray[index] = { ...resultArray[index], commentsIds: [...resultArray[index].commentsIds, item.comment._id] };
            }

            return resultArray;
        }, []);

        approvePostComments(ids)
            .then(() => {
                Promise.all([
                    getCommentsPost({ ...requestOptions })
                ])
                    .then(([items]) => {
                        setItems(items.paginatedResults);
                        setCount(items.totalCount);
                    });
            });
    };

    const handleFormOpen = item => () => {
        setFormOpened(true);
        setEditableItem(item);
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

    const handleFormDone = () => {
        getCommentsPost({ ...requestOptions })
            .then(items => {
                setItems(items.paginatedResults);
                setCount(items.totalCount);
            })
            .then(handleCloseForm);
    };

    const tableCells = [
        { prop: item => <div className={classes.columnName}>{item.comment.userName}</div> },
        { prop: item => <div className={classes.columnText}>{item.comment.text}</div> },
        {
            prop: item => {
                const date = new Date(item.comment.createdAt);
                return <div className={classes.columnName}>{date.toLocaleDateString('en-US')}</div>;
            }
        },
        { prop: item => <div className={classes.columnName}>{item.object.data[DEFAULT_LOCALE].title}</div> },
        {
            prop: item => <a className={classes.columnAlias} target="_blank" href={`/posts/${item.object.alias}`} rel="noreferrer">
                {`/posts/${item.object.alias}`}
            </a>
        }
    ];

    const headerRows = [
        { id: 'name', label: 'Name' },
        { id: 'comment', label: 'Comment' },
        { id: 'date', label: 'Date' },
        { id: 'postName', label: 'Post Title' },
        { id: 'postLink', label: 'Post Link' }
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
            values={items}
            headerText='Post Comments'
            onDelete={handleItemDelete}
            onApprove={handleItemApprove}
            isComment={true}
            onFormOpen={handleFormOpen}
            setRequestOptions={setRequestOptions}
            requestOptions={requestOptions}
            count={count}
            search={search}
            handleSearchChange={handleInputChange}
            dateStart={dateStart}
            handleDateStartChange={handleDateStartChange}
            dateEnd={dateEnd}
            handleDateEndChange={handleDateEndChange}
            // onSort={() => {}} // if you need a sortable table
        />
        <Modal open={formOpened} onClose={handleOpenWarning} className={classes.modal} disableEnforceFocus>
            <Paper className={classes.modalContent}>
                <CommentForm item={editableItem} onDone={handleFormDone}/>
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

const CommentsPage = () => {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Box sx={{ width: '100%', color: 'background.paper' }}>
            <Tabs value={value} onChange={handleChange} centered>
                <Tab label="Articles Comments"/>
                <Tab label="Posts Comments" />
            </Tabs>
            {
                value === 0 && <ArticlesComments/>
            }
            {
                value === 1 && <PostsComments/>
            }
        </Box>
    );
};

export default CommentsPage;
