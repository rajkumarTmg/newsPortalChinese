import { verifyToken, getTokenFromAuthorization } from '../helpers/token';

import { FORBIDDEN_STATUS_CODE, TOKENS_TYPES } from '../constants';

import getUser from '../api/client/user/queries/getUser';

export default function (req, res, next) {
    const authorizationHeader = req.headers.authorization;
    const token = getTokenFromAuthorization(authorizationHeader);

    if (token) {
        verifyToken(token)
            .then(({ _id, tokenType }) => {
                if (tokenType !== TOKENS_TYPES.userAuthorization) {
                    return res.status(FORBIDDEN_STATUS_CODE).end();
                }

                return getUser(_id.toString())
                    .then(user => {
                        if (!user) {
                            return res.status(FORBIDDEN_STATUS_CODE).end();
                        }

                        res.locals.user = user;

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
