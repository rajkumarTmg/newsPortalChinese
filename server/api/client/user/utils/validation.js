import { required, email, maxLength, string } from '../../../../helpers/validation/validators';

export const userValidation = {
    email: [required, email, string, maxLength(1000)],
    password: [required, string, maxLength(1000)],
    firstName: [required, string, maxLength(1000)],
    lastName: [required, string, maxLength(1000)],
    userName: [required, string, maxLength(1000)]
};
