import {
    MONGODB_DUPLICATE_CODE,
    NOT_FOUND_STATUS_CODE,
    OKAY_STATUS_CODE,
    SERVER_ERROR_STATUS_CODE
} from '../../../../constants';

import getCategories from '../../../client/exampleWithCategoriesApi/queries/getCategories';
import saveCategory from '../../../client/exampleWithCategoriesApi/queries/saveCategory';

export default async function (req, res) {
    try {
        const category = req.body;
        const now = Date.now();

        const categories = await getCategories();
        const maxPositionIndex = categories.reduce((result, category) => category.positionIndex <= result ? result : category.positionIndex, 0);

        saveCategory({ data: category, createdAt: now, updatedAt: now, positionIndex: maxPositionIndex + 1 })
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
