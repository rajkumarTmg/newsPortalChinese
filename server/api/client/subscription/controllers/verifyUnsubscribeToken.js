import {
    OKAY_STATUS_CODE,
    BAD_REQUEST_STATUS_CODE,
    SERVER_ERROR_STATUS_CODE,
    TOKENS_TYPES,
    FORBIDDEN_STATUS_CODE
} from '../../../../constants';
import { verifyToken } from '../../../../helpers/token';

import deleteSubscription from '../queries/deleteSubscription';

export default (req, res) => {
    try {
        const { token } = req.body;

        verifyToken(token)
            .then(({ _id, tokenType }) => {
                if (tokenType !== TOKENS_TYPES.subscriptionVerifyUnsubscribe) {
                    return res.status(FORBIDDEN_STATUS_CODE).end();
                }
                deleteSubscription(_id)
                    .then(() => {
                        return res.status(OKAY_STATUS_CODE).end();
                    });
            })
            .catch(() => {
                res.status(BAD_REQUEST_STATUS_CODE).end();
            });
    } catch (e) {
        res.status(SERVER_ERROR_STATUS_CODE).end();
    }
};
