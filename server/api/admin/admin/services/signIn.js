import md5 from 'md5';
import { OKAY_STATUS_CODE, FORBIDDEN_STATUS_CODE, SERVER_ERROR_STATUS_CODE, TOKENS_TYPES, TOKEN_EXPIRES_IN } from '../../../../constants';
import getAdminByLogin from '../queries/getAdminByLogin';

import { generateToken } from '../../../../helpers/token';

export default function (req, res) {
    try {
        const { login, password } = req.body;

        getAdminByLogin(login)
            .then(async admin => {
                if (!admin) {
                    return res.status(FORBIDDEN_STATUS_CODE).end();
                }

                if (admin.password !== md5(password)) {
                    return res.status(FORBIDDEN_STATUS_CODE).end();
                }

                const token = await generateToken({ _id: admin._id, tokenType: TOKENS_TYPES.adminAuthorization }, TOKEN_EXPIRES_IN.adminAuthorization);

                res.status(OKAY_STATUS_CODE).json({
                    token,
                    admin
                });
            })
            .catch(() => {
                res.status(FORBIDDEN_STATUS_CODE).end();
            });
    } catch (e) {
        res.status(SERVER_ERROR_STATUS_CODE).end();
    }
}
