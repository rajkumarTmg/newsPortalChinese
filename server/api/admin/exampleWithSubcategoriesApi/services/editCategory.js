import {
    OKAY_STATUS_CODE,
    NOT_FOUND_STATUS_CODE,
    SERVER_ERROR_STATUS_CODE,
    MONGODB_DUPLICATE_CODE
} from '../../../../constants';

import editCategory from '../../../client/exampleWithSubcategoriesApi/queries/editCategory';

export default function (req, res) {
    try {
        const category = req.body;
        const { id } = req.params;
        const now = Date.now();

        editCategory(id, { data: category, updatedAt: now })
            .then(category => {
                res.status(OKAY_STATUS_CODE).send(category);
            })
            .catch((err) => {
                if (err.code === MONGODB_DUPLICATE_CODE) {
                    return res.status(NOT_FOUND_STATUS_CODE).send({ code: 'duplication' });
                }

                res.status(SERVER_ERROR_STATUS_CODE).end();
            });
    } catch (e) {
        res.status(SERVER_ERROR_STATUS_CODE).end();
    }
}
