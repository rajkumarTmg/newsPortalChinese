import PropTypes from 'prop-types';
import { useIntl } from 'react-intl';
// STYLES
import classNames from 'classnames';
import styles from './index.module.scss';

const Input = ({ type, theme, placeholder, title, value, handleChange, name, required, error, isError, onBlur }) => {
    const intl = useIntl();

    const handleInputChange = (event) => {
        handleChange(name, event.target.value);
    };

    return <div className={classNames(styles.root, {
        [styles[type]]: type,
        [styles[theme]]: theme,
        [styles[required]]: required,
        [styles.errorField]: isError
    })}>
        {
            title &&
            <div className={styles.title}>{title}</div>
        }
        <input
            className={styles.input}
            type={type}
            placeholder={placeholder || intl.formatMessage({ id: 'form.placeholder' })}
            value={value}
            onChange={handleInputChange}
            onBlur={onBlur}
        />
        { isError && !!error && <div className={styles.error}>{error}</div> }
    </div>;
};

Input.propTypes = {
    type: PropTypes.string,
    theme: PropTypes.string,
    placeholder: PropTypes.string,
    title: PropTypes.string,
    value: PropTypes.string,
    handleChange: PropTypes.func,
    name: PropTypes.string,
    required: PropTypes.bool,
    error: PropTypes.string,
    isError: PropTypes.bool,
    onBlur: PropTypes.func
};

export default Input;
