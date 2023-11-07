import {
    OKAY_STATUS_CODE,
    BAD_REQUEST_STATUS_CODE,
    SERVER_ERROR_STATUS_CODE,
    TOKENS_TYPES,
    FORBIDDEN_STATUS_CODE
} from '../../../../constants';
import { verifyToken } from '../../../../helpers/token';

import md5 from 'md5';

import editUser from '../queries/editUser';

export default (req, res) => {
    try {
        const { token, password } = req.body;

        verifyToken(token)
            .then(({ _id, tokenType }) => {
                if (tokenType !== TOKENS_TYPES.userRestorePassword) {
                    return res.status(FORBIDDEN_STATUS_CODE).end();
                }
                editUser(_id, { password: md5(password) })
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
