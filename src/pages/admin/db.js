import React, { useState } from 'react';

import { makeStyles } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import CloudUploadIcon from '@material-ui/core/SvgIcon/SvgIcon';

import compose from 'ramda/src/compose';
import split from 'ramda/src/split';
import last from 'ramda/src/last';

import downloadDb from '../../apps/admin/services/downloadDb';
import downloadFiles from '../../apps/admin/services/downloadFiles';
import uploadDb from '../../apps/admin/services/uploadDb';
import uploadFiles from '../../apps/admin/services/uploadFiles';

const useStyles = makeStyles(theme => ({
    root: {
        padding: '20px'
    },
    button: {
        marginRight: '10px'
    },
    uploadInput: {
        display: 'none'
    },
    uploadIcon: {
        marginLeft: theme.spacing(1),
        width: '30px',
        height: '19px',
        color: 'black'
    },
    buttonBlocks: {
        display: 'flex'
    },
    uploadButton: {
        marginTop: '10px'
    },
    buttonBlock: {
        marginRight: '20px',
        display: 'flex',
        flexDirection: 'column'
    },
    uploadSection: {
        marginTop: '20px'
    },
    fileName: {
        marginTop: '10px'
    }
}));

const DatabasePage = () => {
    const classes = useStyles();
    const [db, setDb] = useState(null);
    const [files, setFiles] = useState(null);

    const handleDownloadDb = () => {
        downloadDb()
            .then(url => {
                const link = document.createElement('a');
                const fileName = compose(
                    last,
                    split('/')
                )(url);

                link.style = 'display: none';
                link.href = url;
                link.download = fileName;
                document.body.appendChild(link);
                link.click();
                setTimeout(() => {
                    // For Firefox it is necessary to delay revoking the ObjectURL
                    document.body.removeChild(link);
                    window.URL.revokeObjectURL(url);
                }, 100);
            });
    };

    const handleDownloadFiles = () => {
        downloadFiles()
            .then(url => {
                const link = document.createElement('a');
                const fileName = compose(
                    last,
                    split('/')
                )(url);

                link.style = 'display: none';
                link.href = url;
                link.download = fileName;
                document.body.appendChild(link);
                link.click();
                setTimeout(() => {
                    // For Firefox it is necessary to delay revoking the ObjectURL
                    document.body.removeChild(link);
                    window.URL.revokeObjectURL(url);
                }, 100);
            });
    };

    const handleUploadDb = () => {
        const formData = new FormData();

        formData.append('db', db);

        return uploadDb(formData)
            .then(() => {
                setDb(null);
            });
    };

    const handleUploadFiles = () => {
        const formData = new FormData();

        formData.append('files', files);

        return uploadFiles(formData)
            .then(() => {
                setFiles(null);
            });
    };

    const handleDbUpload = event => {
        const db = event.target.files[0];

        event.target.value = '';

        setDb(db);
    };

    const handleFilesUpload = event => {
        const files = event.target.files[0];

        event.target.value = '';

        setFiles(files);
    };

    return <section className={classes.root}>
        <div>
            <Typography variant='h6'>Download</Typography>
            <Button
                onClick={handleDownloadDb}
                className={classes.button}
                variant='contained'
                color='primary'
            >
                Download Database
            </Button>
            <Button
                onClick={handleDownloadFiles}
                className={classes.button}
                variant='contained'
                color='primary'
            >
                Download Files
            </Button>
        </div>
        <div className={classes.uploadSection}>
            <Typography variant='h6'>Upload</Typography>
            <div className={classes.buttonBlocks}>
                <div className={classes.buttonBlock}>
                    <label>
                        <input
                            className={classes.uploadInput}
                            type='file'
                            accept=".gz"
                            onChange={handleDbUpload}
                        />
                        <Button variant='contained' component='span' color='default'>
                            Upload
                            <CloudUploadIcon className={classes.uploadIcon} />
                        </Button>
                    </label>
                    {db && <Typography className={classes.fileName}>{db.name}</Typography>}
                    <Button
                        onClick={handleUploadDb}
                        className={classes.uploadButton}
                        variant='contained'
                        color='primary'
                        disabled={!db}
                    >
                        Upload Database
                    </Button>
                </div>
                <div className={classes.buttonBlock}>
                    <label>
                        <input
                            className={classes.uploadInput}
                            type='file'
                            accept=".tar"
                            onChange={handleFilesUpload}
                        />
                        <Button variant='contained' component='span' color='default'>
                            Upload
                            <CloudUploadIcon className={classes.uploadIcon} />
                        </Button>
                    </label>
                    {files && <Typography className={classes.fileName}>{files.name}</Typography>}
                    <Button
                        onClick={handleUploadFiles}
                        className={classes.uploadButton}
                        variant='contained'
                        color='primary'
                        disabled={!files}
                    >
                        Upload Files
                    </Button>
                </div>
            </div>
        </div>
    </section>;
};

export default DatabasePage;
