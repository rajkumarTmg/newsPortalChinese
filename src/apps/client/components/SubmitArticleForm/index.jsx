import React, { useEffect, useRef, useState } from 'react';
import { useIntl } from 'react-intl';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
// COMPONENTS
import Input from '../Fields/InputField';
import Textarea from '../Fields/TextareaField';
import Phone from '../Fields/PhoneField';
import * as Yup from 'yup';
import { useFormik } from 'formik';
import Popover from '@material-ui/core/Popover';
import 'overlayscrollbars/css/OverlayScrollbars.css';
import { OverlayScrollbarsComponent } from 'overlayscrollbars-react';
// ACTIONS
import setSignUpPopup from '../../store/actions/setSignUpPopup';
import setSubmitArticlePopup from '../../store/actions/setSubmitArticlePopup';
import setSuccessPopup from '../../store/actions/setSuccessPopup';
import submitArticle from '../../services/client/submit';
// STYLES
import classNames from 'classnames';
import styles from './index.module.scss';
import InputFileField from '../Fields/InputFileField';
import Image from 'next/image';
import UploadPNG from '../../../../../public/images/ulpoad.png';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';

const SubmitArticle = ({ theme, isFooter }) => {
    const dispatch = useDispatch();
    const intl = useIntl();
    const [open, setOpen] = useState(false);
    const ref = useRef();

    const validationSchema = Yup.object({
        email: Yup.string().email(`${intl.formatMessage({ id: 'error.invalidEmail' })}`)
            .required(`${intl.formatMessage({ id: 'error.emailRequired' })}`),
        firstName: Yup.string().required(`${intl.formatMessage({ id: 'error.nameErrorValidation' })}`),
        lastName: Yup.string().required(`${intl.formatMessage({ id: 'error.surnameErrorValidation' })}`),
        comment: Yup.string().required(`${intl.formatMessage({ id: 'error.commentErrorValidation' })}`),
        files: Yup.mixed()
            .test('files', `${intl.formatMessage({ id: 'error.noFilesAttached' })}`, value => (!!(Array.from(value).length)))
    });

    const formik = useFormik({
        initialValues: {
            email: '',
            phone: '',
            firstName: '',
            lastName: '',
            comment: '',
            files: []
        },
        validateOnChange: false,
        validateOnBlur: false,
        validationSchema: validationSchema,
        onSubmit: (formValues, { resetForm }) => {
            const formData = new FormData();
            formData.append('values', JSON.stringify({
                email: formValues.email,
                firstName: formValues.firstName,
                lastName: formValues.lastName,
                phone: formValues.phone,
                comment: formValues.comment
            }));
            Array.from(formValues.files).forEach((file) => {
                formData.append('attached', file);
            });
            submitArticle(formData).then(() => {
                resetForm();
                handleClosePopup();
                dispatch(setSuccessPopup(true));
            });
        }
    });

    const handleInputChange = (name, value) => {
        formik.setFieldValue(name, value);

        if (formik.errors[name]) {
            formik.setErrors({ ...formik.errors, [name]: false });
        }
    };

    const handleClosePopup = () => {
        dispatch(setSubmitArticlePopup(false));
    };

    const handleOpenSignUpPopup = () => {
        dispatch(setSignUpPopup(true));
        dispatch(setSubmitArticlePopup(false));
    };

    useEffect(() => {
        function handleClickOutside (event) {
            if (ref.current && !ref.current.contains(event.target)) {
                handleCloseInnerPopup();
            }
        }
        // Bind the event listener
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            // Unbind the event listener on clean up
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [ref]);

    const handleFileChange = (value) => {
        formik.setFieldValue('files', value);

        if (formik.errors.files) {
            formik.setErrors({ ...formik.errors, files: false });
        }
    };

    const handleOpenInnerPopup = () => {
        setOpen(true);
    };

    const handleCloseInnerPopup = () => {
        setOpen(false);
    };

    const popupClassNames = classNames(styles.popup, {
        [styles.open]: open
    });

    useEffect(() => {
        if (!isFooter) {
            window.scrollTo(0, 0);
        }
    }, []);

    return <Popover
        open={true}
        anchorOrigin={{ horizontal: 'center', vertical: 'center' }}
        classes={{ paper: styles.paper, root: !isFooter ? styles.popover : undefined }}
        transitionDuration={{ appear: 0, enter: 0, exit: 100 }}
    >
        <div className={classNames(styles.root, {
            [styles[theme]]: theme,
            [styles.bgShort]: !isFooter
        })}>
            <div className={styles.background} onClick={handleClosePopup}/>
            <ClickAwayListener onClickAway={handleClosePopup}>
                <div className={styles.body}>
                    <div className={styles.title}>{intl.formatMessage({ id: 'form.submitTitle' })}</div>
                    <div className={styles.subtitle}>{intl.formatMessage({ id: 'form.submitSubtitle' })}</div>
                    <div className={styles.formWrapper}>
                        <OverlayScrollbarsComponent>
                            <form onSubmit={formik.handleSubmit} className={styles.form}>
                                <div className={styles.inputsContainer}>
                                    <div className={styles.inputWrapperDouble}>
                                        <Input
                                            placeholder={`${intl.formatMessage({ id: 'form.lastName' })}`}
                                            value={formik.values.lastName}
                                            type='text'
                                            theme='auth'
                                            handleChange={handleInputChange}
                                            onBlur={formik.handleBlur}
                                            name='lastName'
                                            error={formik.errors.lastName}
                                            isError={formik.errors.lastName}
                                        />
                                        <Input
                                            placeholder={`${intl.formatMessage({ id: 'form.firstName' })}`}
                                            value={formik.values.firstName}
                                            type='text'
                                            theme='auth'
                                            handleChange={handleInputChange}
                                            onBlur={formik.handleBlur}
                                            name='firstName'
                                            error={formik.errors.firstName}
                                            isError={formik.errors.firstName}
                                        />
                                    </div>
                                    <div className={styles.inputWrapper}>
                                        <Input
                                            placeholder={`${intl.formatMessage({ id: 'form.email' })}`}
                                            value={formik.values.email}
                                            theme='auth'
                                            handleChange={handleInputChange}
                                            onBlur={formik.handleBlur}
                                            name='email'
                                            error={formik.errors.email}
                                            isError={formik.errors.email}
                                        />
                                    </div>
                                    <div className={styles.inputWrapper}>
                                        <Phone
                                            placeholder={intl.formatMessage({ id: 'form.phone' })}
                                            value={formik.values.phone}
                                            type='tel'
                                            theme='auth'
                                            handleChange={handleInputChange}
                                            name='phone'
                                            code={''}
                                        />
                                    </div>
                                    <div className={styles.inputWrapper}>
                                        <Textarea
                                            placeholder={intl.formatMessage({ id: 'form.comment' })}
                                            value={formik.values.comment}
                                            type='text'
                                            theme='auth'
                                            handleChange={handleInputChange}
                                            onBlur={formik.handleBlur}
                                            name='comment'
                                            error={formik.errors.comment}
                                            isError={formik.errors.comment}
                                        />
                                    </div>
                                    <div className={classNames(styles.inputWrapper, styles.fileInputWrapper, {
                                        [styles.error]: formik.errors.files
                                    })}>
                                        <div className={styles.openFilePopup} onClick={handleOpenInnerPopup}>
                                            {intl.formatMessage({ id: 'submit.fileUploadButton' })}
                                            <span className={styles.fileUploadIcon}>
                                                <Image src={UploadPNG} layout='fill'/>
                                            </span>
                                        </div>
                                        { formik.errors.files && !!formik.errors.files && <div className={styles.errorText}>{formik.errors.files}</div> }
                                        <div className={styles.filesAdded}>
                                            {
                                                Array.from(formik.values.files).map((item, i) => <span key={i}>{item.name}</span>)
                                            }
                                        </div>
                                        <div className={popupClassNames} ref={ref}>
                                            <div className={styles.popupTitle}>{intl.formatMessage({ id: 'submit.fileUploadTitle' })}</div>
                                            <div className={styles.popupInput}>
                                                <InputFileField
                                                    value={formik.values.files}
                                                    handleChange={handleFileChange}
                                                    onBlur={formik.handleBlur}
                                                    multiple={true}
                                                    error={formik.errors.files}
                                                    isError={formik.errors.files}
                                                />
                                            </div>
                                            <div className={styles.submitButton} onClick={handleCloseInnerPopup}>
                                                {intl.formatMessage({ id: 'form.send' })}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className={styles.inputWrapperDoubleButtons}>
                                    <div className={styles.authorise} onClick={handleOpenSignUpPopup}>
                                        {intl.formatMessage({ id: 'form.register2' })}
                                    </div>
                                    <button type='submit' className={styles.submitButton}>
                                        {intl.formatMessage({ id: 'form.send' })}
                                    </button>
                                </div>
                            </form>
                        </OverlayScrollbarsComponent>
                    </div>
                    <div className={styles.close} onClick={handleClosePopup}>
                        {intl.formatMessage({ id: 'form.close' })}
                    </div>
                </div>
            </ClickAwayListener>
        </div>
    </Popover>;
};

SubmitArticle.propTypes = {
    theme: PropTypes.string,
    isFooter: PropTypes.bool
};

export default SubmitArticle;
