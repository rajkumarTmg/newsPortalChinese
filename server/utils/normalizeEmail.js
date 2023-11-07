import normalizeEmail from 'validator/lib/normalizeEmail';
import trim from 'validator/lib/trim';

export default email => {
    if (!email) {
        return undefined;
    }
    return normalizeEmail(trim(email.toLowerCase()));
};
