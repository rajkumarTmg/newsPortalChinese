import md5 from 'md5';

import { OKAY_STATUS_CODE, FORBIDDEN_STATUS_CODE, SERVER_ERROR_STATUS_CODE, TOKENS_TYPES } from '../../../../constants';

import getAdminByEmail from '../queries/getAdminByEmail';
import changeCredentialsQuery from '../queries/changeCredentials';

import { verifyToken } from '../../../../helpers/token';

export default function (req, res) {
    try {
        const { recovery = {}, newCredentials = {} } = req.body;

        getAdminByEmail(recovery.email)
            .then((admin) => {
                if (!admin) {
                    return res.status(FORBIDDEN_STATUS_CODE).end();
                }

                verifyToken(recovery.token)
                    .then(({ tokenType }) => {
                        if (tokenType !== TOKENS_TYPES.adminRestorePassword) {
                            return res.status(FORBIDDEN_STATUS_CODE).end();
                        }
                        changeCredentialsQuery(admin._id, {
                            login: newCredentials.login,
                            password: md5(newCredentials.password),
                            email: newCredentials.email
                        })
                            .then(() => {
                                res.status(OKAY_STATUS_CODE).end();
                            })
                            .catch(() => {
                                res.status(SERVER_ERROR_STATUS_CODE).end();
                            });
                    });
            })
            .catch(() => {
                res.status(FORBIDDEN_STATUS_CODE).end();
            });
    } catch (e) {
        res.status(SERVER_ERROR_STATUS_CODE).end();
    }
}
