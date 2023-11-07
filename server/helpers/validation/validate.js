import keys from 'ramda/src/keys';

export default (fieldsObj, fieldsValidatorsMap) => {
    return keys(fieldsValidatorsMap)
        .reduce((isValid, key) => {
            if (!isValid) {
                return false;
            }

            const value = fieldsObj[key];
            const validators = fieldsValidatorsMap[key] || [];

            return validators.reduce((isValid, validator) => {
                if (!isValid) {
                    return false;
                }

                return validator(value, fieldsObj);
            }, true);
        }, true);
};
