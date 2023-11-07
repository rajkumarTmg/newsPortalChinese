import { OKAY_STATUS_CODE, SERVER_ERROR_STATUS_CODE } from '../../../../constants';

import getCategories from '../../../client/exampleWithSubcategoriesApi/queries/getCategories';
import deleteCategories from '../../../client/exampleWithSubcategoriesApi/queries/deleteCategories';

export default function (req, res) {
    try {
        const { ids } = req.body;

        return deleteCategories(ids)
            .then(() => {
                return getCategories()
                    .then(categories => {
                        res.status(OKAY_STATUS_CODE).send(categories);
                    });
            })
            .catch(() => {
                res.status(SERVER_ERROR_STATUS_CODE).end();
            });
    } catch (e) {
        res.status(SERVER_ERROR_STATUS_CODE).end();
    }
}
