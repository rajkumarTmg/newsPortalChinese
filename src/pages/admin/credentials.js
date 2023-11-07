import React, { useState, useCallback } from 'react';

import classNames from 'classnames';

import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import SnackbarContent from '@material-ui/core/SnackbarContent';
import Snackbar from '@material-ui/core/Snackbar';

import NewCredentialsForm from '../../apps/admin/components/NewCredentialsForm';

import { useDispatch } from 'react-redux';
import setAuthenticated from '../../apps/admin/store/actions/setAuthenticated';

import { makeStyles } from '@material-ui/core/styles';
import { useRouter } from 'next/router';

import signIn from '../../apps/admin/services/signIn';
import { ADMIN_PANEL_URL, TOKEN_LOCAL_STORAGE_NAME } from '../../apps/admin/constants/constants';
import { Alert } from '@material-ui/lab';

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: 'calc(100vh - 64px)'
    },
    container: {
        width: '500px',
        marginTop: '-40px'
    },
    content: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    form: {
        width: '400px'
    },
    error: {
        backgroundColor: theme.palette.error.dark
    },
    icon: {
        fontSize: 20
    },
    iconVariant: {
        opacity: 0.9,
        marginRight: theme.spacing.unit
    },
    message: {
        display: 'flex',
        alignItems: 'center',
        padding: '0'
    },
    margin: {
        margin: theme.spacing(1),
        padding: '0',
        minWidth: 'unset',
        background: 'transparent'
    }
}));

const steps = [
    'Authentication',
    'Changing Credentials'
];

const Credentials = () => {
    const classes = useStyles();
    const router = useRouter();
    const dispatch = useDispatch();
    const [authentication, setAuthentication] = useState({});
    const [user, setUser] = useState({});
    const [activeStep, setActiveStep] = useState(0);
    const [authFailed, setAuthFailed] = useState(false);
    const handleHideFailMessage = useCallback(() => {
        setAuthFailed(false);
    }, []);
    const handleAuthenticationSubmit = useCallback(event => {
        event.preventDefault();

        const { login, password } = authentication;

        const credentials = {
            login: login.trim(),
            password: password.trim()
        };

        signIn(credentials)
            .then(({ admin }) => {
                setUser({
                    login: admin.login,
                    email: admin.email
                });
                setActiveStep(1);
            })
            .catch(() => {
                setAuthentication({
                    login,
                    password: ''
                });
                setAuthFailed(true);
            });
    }, [authentication]);

    const handleNewCredentialsDone = useCallback(() => {
        localStorage.setItem(TOKEN_LOCAL_STORAGE_NAME, '');
        dispatch(setAuthenticated(false));

        router.push(ADMIN_PANEL_URL);
    }, []);

    const handleAuthenticationChange = useCallback(credential => event => {
        setAuthentication(authentication => ({ ...authentication, [credential]: event.target.value }));
    }, []);

    const getContentByStep = activeStep => {
        switch (activeStep) {
        case 0:
            return renderAuthenticationForm();
        case 1:
            return <NewCredentialsForm
                type='authentication'
                initial={{
                    email: user.email,
                    login: user.login
                }}
                authentication={authentication}
                onDone={handleNewCredentialsDone}
            />;
        }
    };

    const renderAuthenticationForm = () => {
        return <div>
            <form className={classes.form} onSubmit={handleAuthenticationSubmit}>
                <TextField
                    label='Login'
                    value={authentication.login}
                    onChange={handleAuthenticationChange('login')}
                    margin='normal'
                    variant='outlined'
                    fullWidth
                    InputLabelProps={{
                        shrink: !!authentication.login
                    }}
                    required
                />
                <TextField
                    label='Password'
                    value={authentication.password}
                    onChange={handleAuthenticationChange('password')}
                    margin='normal'
                    variant='outlined'
                    fullWidth
                    required
                    InputLabelProps={{
                        shrink: !!authentication.password
                    }}
                    type='password'
                />
                <Button variant='contained' color='primary' type='submit' fullWidth>
                    Submit
                </Button>
            </form>
            <Snackbar
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'right'
                }}
                onClose={handleHideFailMessage}
                open={authFailed}
                autoHideDuration={null}
            >
                <SnackbarContent
                    className={classNames(classes.error, classes.margin)}
                    classes={{ message: classes.message }}
                    message={
                        <span id='client-snackbar' className={classes.message}>
                            <Alert onClose={handleHideFailMessage} severity="error">
                                Invalid username or password
                            </Alert>
                        </span>
                    }
                />
            </Snackbar>
        </div>;
    };

    return <div className={classes.root}>
        <div className={classes.container}>
            <Stepper nonLinear activeStep={activeStep}>
                {steps.map((label, index) => (
                    <Step key={label}>
                        <StepLabel completed={index < activeStep}>
                            {label}
                        </StepLabel>
                    </Step>
                ))}
            </Stepper>
            <div className={classes.content}>
                {getContentByStep(activeStep)}
            </div>
        </div>
    </div>;
};

export default Credentials;
