import {
    OKAY_STATUS_CODE,
    NOT_FOUND_STATUS_CODE,
    SERVER_ERROR_STATUS_CODE,
    MONGODB_DUPLICATE_CODE
} from '../../../../constants';

import getCategory from '../../../client/exampleWithSubcategoriesApi/queries/getCategory';
import editCategory from '../../../client/exampleWithSubcategoriesApi/queries/editCategory';

export default async function (req, res) {
    try {
        const subcategory = req.body;
        const { categoryId, id } = req.params;
        const now = Date.now();

        const { subcategories = [] } = await getCategory(categoryId);

        const newSubcategories = subcategories?.map(subc => {
            if (subc._id.toString() === id) {
                subc.data = subcategory;
                subc.updatedAt = now;
            }
            return subc;
        });

        editCategory(categoryId, { subcategories: newSubcategories, updatedAt: now })
            .then(({ subcategories }) => {
                res.status(OKAY_STATUS_CODE).send(subcategories);
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
