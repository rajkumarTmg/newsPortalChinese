import { required, maxLength, string, date } from '../../../../helpers/validation/validators';

export const commentValidation = {
    userId: [required, string],
    userName: [required, string],
    text: [required, string, maxLength(5000)],
    createdAt: [required, date]
};
