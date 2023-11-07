import { OKAY_STATUS_CODE, SERVER_ERROR_STATUS_CODE } from '../../../../constants';

import getItems from '../../../client/votes/queries/getItems';

export default function (req, res) {
    try {
        const { completed } = req.query;
        getItems(completed)
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
