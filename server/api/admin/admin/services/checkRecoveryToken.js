import { OKAY_STATUS_CODE, FORBIDDEN_STATUS_CODE, SERVER_ERROR_STATUS_CODE, TOKENS_TYPES } from '../../../../constants';
import getAdminByEmail from '../queries/getAdminByEmail';

import { verifyToken } from '../../../../helpers/token';

export default function (req, res) {
    try {
        const { token, email } = req.query;

        if (!token || !email) {
            return res.status(FORBIDDEN_STATUS_CODE).end();
        }

        getAdminByEmail(email)
            .then((admin) => {
                if (!admin) {
                    return res.status(FORBIDDEN_STATUS_CODE).end();
                }

                return verifyToken(token)
                    .then(({ tokenType }) => {
                        if (tokenType !== TOKENS_TYPES.adminRestorePassword) {
                            return res.status(FORBIDDEN_STATUS_CODE).end();
                        }
                        res.status(OKAY_STATUS_CODE).end();
                    });
            })
            .catch(() => {
                res.status(FORBIDDEN_STATUS_CODE).end();
            });
    } catch (e) {
        res.status(SERVER_ERROR_STATUS_CODE).end();
    }
}
