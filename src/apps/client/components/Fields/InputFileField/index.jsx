import React, { useRef } from 'react';
// STYLES
import styles from './styles.module.scss';
import classNames from 'classnames';
// IMAGES
import PropTypes from 'prop-types';
import UploadPNG from '../../../../../../public/images/ulpoad.png';
import Image from 'next/image';

const AdminInput = ({ title, required, theme, handleChange, value, multiple, isError, error, onBlur }) => {
    const dropContainer = useRef(null);
    const fileInput = useRef(null);
    const rootClassNames = classNames(styles.inputWrapper, {
        [styles.required]: required,
        [styles[`${theme}`]]: theme
    });

    const handleDragOver = (event) => {
        event.preventDefault();
    };

    const handleDragEnter = (event) => {
        event.preventDefault();
    };

    const handleDrop = (event) => {
        event.preventDefault();
        fileInput.current.files = event.dataTransfer.files;
        handleChange(fileInput.current.files);
    };

    const handleFileChange = () => {
        handleChange(fileInput.current.files);
    };

    return (
        <div className={rootClassNames}>
            {
                title && <div className={styles.titleContainer}>
                    <span className={styles.title}>{title}</span>
                </div>
            }
            <div
                className={styles.input}
                ref={dropContainer}
                onDrop={handleDrop}
                onDragOver={handleDragOver}
                onDragEnter={handleDragEnter}
            >
                <label className={styles.addIcon} htmlFor='fileInput'>
                    <div className={styles.image}>
                        <Image src={UploadPNG} layout='fill'/>
                    </div>
                </label>
            </div>
            <input
                type="file"
                ref={fileInput}
                id='fileInput'
                className={styles.fileInput}
                accept=""
                onChange={handleFileChange}
                multiple={multiple}
                onBlur={onBlur}
            />
            <ol className={styles.values}>
                {
                    Array.from(value).map((file, i) => <li key={i}>{`${i + 1}. ${file.name}`}</li>)
                }
            </ol>
            {/* isError && !!error && <div className={styles.error}>{error}</div> */}
        </div>
    );
};

AdminInput.propTypes = {
    title: PropTypes.string,
    theme: PropTypes.string,
    required: PropTypes.bool,
    value: PropTypes.array,
    handleChange: PropTypes.func,
    multiple: PropTypes.bool,
    isError: PropTypes.bool,
    error: PropTypes.string,
    onBlur: PropTypes.func
};

export default AdminInput;
