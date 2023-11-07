import React from 'react';
import PropTypes from 'prop-types';
import { useIntl } from 'react-intl';
// STYLES
import classNames from 'classnames';
import styles from './index.module.scss';
import Autocomplete from '@material-ui/lab/Autocomplete';
import TextField from '@material-ui/core/TextField';

const AutocompleteField = ({ theme, placeholder, title, value, handleChange, name, required, options }) => {
    const intl = useIntl();

    const handleInputChange = (event, value) => {
        handleChange(name, value);
    };

    return <div className={classNames(styles.root, {
        [styles[theme]]: theme,
        [styles[required]]: required
    })}>
        {
            title &&
            <div className={styles.title}>{title}</div>
        }
        <Autocomplete
            value={value}
            onChange={handleInputChange}
            options={options}
            getOptionLabel={(option) => option.label}
            renderInput={(params) => <TextField
                {...params}
                label={''}
                InputProps={{ ...params.InputProps, disableUnderline: true }}
                placeholder={placeholder || intl.formatMessage({ id: 'form.placeholder' })}
            />}
            classes={{
                input: styles.input,
                root: styles.autocomplete,
                listbox: styles.listbox,
                popper: styles.popper,
                focused: styles.focused
            }}
        ></Autocomplete>
    </div>;
};

AutocompleteField.propTypes = {
    theme: PropTypes.string,
    placeholder: PropTypes.string,
    title: PropTypes.string,
    value: PropTypes.string,
    handleChange: PropTypes.func,
    name: PropTypes.string,
    required: PropTypes.bool,
    options: PropTypes.array
};

export default AutocompleteField;
