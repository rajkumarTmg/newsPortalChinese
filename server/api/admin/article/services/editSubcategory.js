import {
    OKAY_STATUS_CODE,
    NOT_FOUND_STATUS_CODE,
    SERVER_ERROR_STATUS_CODE,
    MONGODB_DUPLICATE_CODE
} from '../../../../constants';

import getCategory from '../../../client/article/queries/getCategory';
import editCategory from '../../../client/article/queries/editCategory';
import { DEFAULT_LOCALE } from '../../../../../src/apps/client/constants';

export default async function (req, res) {
    try {
        const subcategory = req.body;
        const { categoryId, id } = req.params;
        const now = Date.now();

        const { subcategories = [] } = await getCategory(categoryId);
        const existingSubcategory = subcategories.find(item => item.data[DEFAULT_LOCALE].alias === subcategory[DEFAULT_LOCALE].alias);

        if (existingSubcategory && existingSubcategory._id.toString() !== id) {
            return res.status(NOT_FOUND_STATUS_CODE).send({ code: 'duplication' });
        }

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
