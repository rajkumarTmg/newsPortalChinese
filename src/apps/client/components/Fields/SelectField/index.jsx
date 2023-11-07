import React from 'react';
import PropTypes from 'prop-types';
import { useIntl } from 'react-intl';
// STYLES
import classNames from 'classnames';
import styles from './index.module.scss';

const Select = ({ theme, placeholder, title, value, handleChange, name, required, options }) => {
    const intl = useIntl();

    const handleInputChange = (event) => {
        handleChange(name, event.target.value);
    };

    return <div className={classNames(styles.root, {
        [styles[theme]]: theme,
        [styles[required]]: required
    })}>
        {
            title &&
            <div className={styles.title}>{title}</div>
        }
        <div className={styles.inputWrapper}>
            <select
                className={styles.input}
                value={value}
                onChange={handleInputChange}
            >
                <option value="" selected>{placeholder || intl.formatMessage({ id: 'form.placeholder' })}</option>
                {
                    options.map((option, i) => (
                        <option key={i} value={option.id}>{option.name}</option>
                    ))
                }
            </select>
        </div>
    </div>;
};

Select.propTypes = {
    theme: PropTypes.string,
    placeholder: PropTypes.string,
    title: PropTypes.string,
    value: PropTypes.string,
    handleChange: PropTypes.func,
    name: PropTypes.string,
    required: PropTypes.bool,
    options: PropTypes.array
};

export default Select;
