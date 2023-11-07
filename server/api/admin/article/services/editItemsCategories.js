import {
    OKAY_STATUS_CODE,
    SERVER_ERROR_STATUS_CODE
} from '../../../../constants';

import editItemsCategories from '../../../client/article/queries/editItemsCategories';

export default function (req, res) {
    try {
        const { ids, categoryId, subcategoryId } = req.body;

        if (!ids || !categoryId) {
            return res.status(SERVER_ERROR_STATUS_CODE).end();
        }

        editItemsCategories(ids, categoryId, subcategoryId)
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
