import { OKAY_STATUS_CODE, SERVER_ERROR_STATUS_CODE } from '../../../../constants';

import getCategories from '../queries/getCategories';

export default function (req, res) {
    const { locale } = req.query;

    try {
        getCategories(locale)
            .then(categories => {
                res.status(OKAY_STATUS_CODE).send(categories);
            })
            .catch(() => {
                res.status(SERVER_ERROR_STATUS_CODE).end();
            });
    } catch (e) {
        res.status(SERVER_ERROR_STATUS_CODE).end();
    }
}
