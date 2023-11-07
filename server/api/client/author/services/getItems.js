import { OKAY_STATUS_CODE, SERVER_ERROR_STATUS_CODE } from '../../../../constants';

import getItems from '../queries/getItems';

export default function (req, res) {
    const { locale } = req.query;
    try {
        getItems(locale)
            .then(items => {
                res.status(OKAY_STATUS_CODE).send(items);
            })
            .catch(() => {
                res.status(SERVER_ERROR_STATUS_CODE).end();
            });
    } catch (e) {
        res.status(SERVER_ERROR_STATUS_CODE).end();
    }
}
