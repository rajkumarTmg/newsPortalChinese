import { OKAY_STATUS_CODE, SERVER_ERROR_STATUS_CODE } from '../../../../constants';

import getItems from '../queries/getItems';

export default function (req, res) {
    try {
        getItems()
            .then(items => {
                const availableItems = items
                    .filter(item => !item.data.hidden)
                    .sort((prev, next) => next.createdAt - prev.createdAt);

                res.status(OKAY_STATUS_CODE).send(availableItems);
            })
            .catch(() => {
                res.status(SERVER_ERROR_STATUS_CODE).end();
            });
    } catch (e) {
        res.status(SERVER_ERROR_STATUS_CODE).end();
    }
}
