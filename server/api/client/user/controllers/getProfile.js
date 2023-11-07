import {
    OKAY_STATUS_CODE,
    SERVER_ERROR_STATUS_CODE
} from '../../../../constants';

import getUserInfo from '../utils/getUserInfo';

export default (req, res) => {
    try {
        res.status(OKAY_STATUS_CODE).send({
            user: getUserInfo(res.locals.user)
        });
    } catch (e) {
        res.status(SERVER_ERROR_STATUS_CODE).end();
    }
};
