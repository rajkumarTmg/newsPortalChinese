import { OKAY_STATUS_CODE, SERVER_ERROR_STATUS_CODE } from '../../../../constants';

import getCommercialForPages from '../queries/getCommercialForPages';

export default function (req, res) {
    try {
        getCommercialForPages(req.query.page)
            .then(items => {
                res.status(OKAY_STATUS_CODE).send(
                    items.sort((prev, next) => next.createdAt - prev.createdAt)
                );
            })
            .catch(() => {
                res.status(SERVER_ERROR_STATUS_CODE).end();
            });
    } catch (e) {
        res.status(SERVER_ERROR_STATUS_CODE).end();
    }
}
