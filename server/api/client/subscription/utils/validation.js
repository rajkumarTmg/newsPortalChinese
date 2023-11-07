import { required, email, maxLength, string } from '../../../../helpers/validation/validators';

export const subscriptionValidation = {
    email: [required, email, string, maxLength(1000)]
};
