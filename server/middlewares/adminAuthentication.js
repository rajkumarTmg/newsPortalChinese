import { verifyToken, getTokenFromAuthorization } from '../helpers/token';

import { FORBIDDEN_STATUS_CODE, TOKENS_TYPES } from '../constants';

import getAdmin from '../api/admin/admin/queries/getAdmin';

export default function (req, res, next) {
    const authorizationHeader = req.headers.authorization;
    const token = getTokenFromAuthorization(authorizationHeader);

    if (token) {
        verifyToken(token)
            .then(({ _id, tokenType }) => {
                if (tokenType !== TOKENS_TYPES.adminAuthorization) {
                    return res.status(FORBIDDEN_STATUS_CODE).end();
                }

                return getAdmin(_id)
                    .then(admin => {
                        if (!admin) {
                            return res.status(FORBIDDEN_STATUS_CODE).end();
                        }

                        res.locals.admin = admin;

                        next();
                    });
            })
            .catch(() => {
                return res.status(FORBIDDEN_STATUS_CODE).end();
            });
    } else {
        return res.status(FORBIDDEN_STATUS_CODE).end();
    }
}
