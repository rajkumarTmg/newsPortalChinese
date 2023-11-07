import PropTypes from 'prop-types';
import { useIntl } from 'react-intl';
// STYLES
import classNames from 'classnames';
import styles from './index.module.scss';

const Phone = ({ theme, placeholder, title, value, handleChange, name, required, code }) => {
    const intl = useIntl();

    const handleInputChange = (event) => {
        let value = event.target.value;
        value = value.replace(/\D/g, '');
        const size = value.length;

        if (code) {
            if (size > 0) { value = '(' + value; }
            if (size > 3) { value = value.slice(0, 4) + ') ' + value.slice(4, 11); }
            if (size > 6) { value = value.slice(0, 9) + '-' + value.slice(9); }
        }

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
        <div className={styles.inputWrapper}>
            <input
                className={styles.input}
                type={'tel'}
                placeholder={placeholder || intl.formatMessage({ id: 'form.placeholder' })}
                value={value}
                onChange={handleInputChange}
            />
            {
                code && <div className={styles.code}>{code}</div>
            }
        </div>
    </div>;
};

Phone.propTypes = {
    theme: PropTypes.string,
    placeholder: PropTypes.string,
    title: PropTypes.string,
    value: PropTypes.string,
    handleChange: PropTypes.func,
    name: PropTypes.string,
    code: PropTypes.string,
    required: PropTypes.bool
};

export default Phone;
