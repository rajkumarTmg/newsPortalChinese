import md5 from 'md5';

import { OKAY_STATUS_CODE, FORBIDDEN_STATUS_CODE, SERVER_ERROR_STATUS_CODE } from '../../../../constants';

import getAdminByLogin from '../queries/getAdminByLogin';
import changeCredentialsQuery from '../queries/changeCredentials';

export default function (req, res) {
    try {
        const { oldCredentials = {}, newCredentials = {} } = req.body;

        getAdminByLogin(oldCredentials.login)
            .then((admin) => {
                if (admin.password !== md5(oldCredentials.password)) {
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
            })
            .catch(() => {
                res.status(FORBIDDEN_STATUS_CODE).end();
            });
    } catch (e) {
        res.status(SERVER_ERROR_STATUS_CODE).end();
    }
}
