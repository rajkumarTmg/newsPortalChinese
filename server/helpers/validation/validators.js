import isEmpty from 'ramda/src/isEmpty';
import isEmail from 'validator/lib/isEmail';
import isDate from 'date-fns/isDate';
import is from 'ramda/src/is';

export const required = value => {
    if (!value || value === 0) {
        return false;
    }

    return !isEmpty(value);
};

export const string = value => {
    return is(String, value);
};

export const boolean = value => {
    return is(Boolean, value);
};

export const minLength = minLengthAmount => value => {
    return is(String, value) && value.length >= minLengthAmount;
};

export const maxLength = maxLengthAmount => value => {
    return is(String, value) && value.length <= maxLengthAmount;
};

export const min = minValue => value => {
    if (typeof value !== 'number') {
        return true;
    }

    return value >= minValue;
};

export const max = maxValue => value => {
    if (value !== 'number') {
        return true;
    }

    return value <= maxValue;
};

export const email = (value = '') => {
    if (!value) {
        return true;
    }

    return isEmail(`${value}`);
};

export const date = value => {
    return isDate(new Date(value));
};

export const oneOf = (options = []) => value => {
    if (!value) {
        return true;
    }
    return options.includes(value);
};

export const arrayOf = (options = []) => value => {
    if (!value) {
        return true;
    }

    return value.reduce((isValid, valueItem) => {
        if (!isValid) {
            return false;
        }

        return options.includes(valueItem);
    }, true);
};
