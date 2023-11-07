import { OKAY_STATUS_CODE, SERVER_ERROR_STATUS_CODE } from '../../../../constants';

import getItems from '../../../client/exampleWithCategoriesApi/queries/getItems';
import deleteItems from '../../../client/exampleWithCategoriesApi/queries/deleteItems';

export default function (req, res) {
    try {
        const { ids } = req.body;

        return deleteItems(ids)
            .then(() => {
                return getItems()
                    .then(items => {
                        res.status(OKAY_STATUS_CODE).send(items);
                    });
            })
            .catch(() => {
                res.status(SERVER_ERROR_STATUS_CODE).end();
            });
    } catch (e) {
        res.status(SERVER_ERROR_STATUS_CODE).end();
    }
}
