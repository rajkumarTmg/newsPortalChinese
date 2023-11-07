import PropTypes from 'prop-types';
import { useIntl } from 'react-intl';
// STYLES
import classNames from 'classnames';
import styles from './index.module.scss';
import formatDate from '../../../utils/formatDate';
import { getYear, getMonth, format } from 'date-fns';
import { useRouter } from 'next/router';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const currentYear = new Date().getFullYear();
const YEARS = [];
for (let year = 1900; year <= currentYear; year++) {
    YEARS.push(year);
}

const MONTHS = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
];

const DateField = ({ theme, placeholder, title, value, handleChange, name, nameDate, required }) => {
    const intl = useIntl();
    const router = useRouter();

    const handleInputChange = (date) => {
        const birthdate = format(date, 'yyyy-MM-dd');
        const birthdateTimestamp = date.getTime();
        handleChange(birthdate, birthdateTimestamp);
    };

    return <div className={classNames(styles.root, {
        [styles[theme]]: theme,
        [styles[required]]: required
    })}>
        {
            title &&
            <div className={styles.title}>{title}</div>
        }
        <div className={styles.inputsWrapper}>
            <DatePicker
                className={styles.inputDate}
                renderCustomHeader={({
                    date,
                    changeYear,
                    changeMonth,
                    decreaseMonth,
                    increaseMonth,
                    prevMonthButtonDisabled,
                    nextMonthButtonDisabled
                }) => (
                    <div
                        style={{
                            margin: 10,
                            display: 'flex',
                            justifyContent: 'center'
                        }}
                    >
                        <button onClick={decreaseMonth} disabled={prevMonthButtonDisabled}>
                            {'<'}
                        </button>
                        <select
                            value={getYear(date)}
                            onChange={({ target: { value } }) => changeYear(value)}
                        >
                            {YEARS.map((option) => (
                                <option key={option} value={option}>
                                    {option}
                                </option>
                            ))}
                        </select>

                        <select
                            value={MONTHS[getMonth(date)]}
                            onChange={({ target: { value } }) =>
                                changeMonth(MONTHS.indexOf(value))
                            }
                        >
                            {MONTHS.map((option) => (
                                <option key={option} value={option}>
                                    {option}
                                </option>
                            ))}
                        </select>

                        <button onClick={increaseMonth} disabled={nextMonthButtonDisabled}>
                            {'>'}
                        </button>
                    </div>
                )}
                selected={value}
                onChange={handleInputChange}
            />
            <input
                className={styles.input}
                type={'text'}
                placeholder={placeholder || intl.formatMessage({ id: 'form.placeholder' })}
                value={formatDate(value, router.locale)}
                readOnly={true}
            />
        </div>
    </div>;
};

DateField.propTypes = {
    theme: PropTypes.string,
    placeholder: PropTypes.string,
    title: PropTypes.string,
    value: PropTypes.string,
    handleChange: PropTypes.func,
    name: PropTypes.string,
    nameDate: PropTypes.string,
    required: PropTypes.bool
};

export default DateField;
