import { OKAY_STATUS_CODE, SERVER_ERROR_STATUS_CODE } from '../../../../constants';
import getItemId from '../queries/getItemId';

export default function (req, res) {
    const { locale, id } = req.query;

    try {
        getItemId(id, locale)
            .then(item => {
                res.status(OKAY_STATUS_CODE).send(item);
            })
            .catch(() => {
                res.status(SERVER_ERROR_STATUS_CODE).end();
            });
    } catch (e) {
        res.status(SERVER_ERROR_STATUS_CODE).end();
    }
}
