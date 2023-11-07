import { OKAY_STATUS_CODE, SERVER_ERROR_STATUS_CODE } from '../../../../constants';

export default function (req, res) {
    try {
        res.status(OKAY_STATUS_CODE).send({
            admin: res.locals.admin
        });
    } catch (e) {
        res.status(SERVER_ERROR_STATUS_CODE).end();
    }
}
