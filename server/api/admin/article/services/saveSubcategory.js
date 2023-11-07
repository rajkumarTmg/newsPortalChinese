import {
    MONGODB_DUPLICATE_CODE,
    NOT_FOUND_STATUS_CODE,
    OKAY_STATUS_CODE,
    SERVER_ERROR_STATUS_CODE
} from '../../../../constants';

import getCategory from '../../../client/article/queries/getCategory';
import editCategory from '../../../client/article/queries/editCategory';
import { DEFAULT_LOCALE } from '../../../../../src/apps/client/constants';

export default async function (req, res) {
    try {
        const subcategory = req.body;
        const { categoryId } = req.params;
        const now = Date.now();

        const { subcategories = [] } = await getCategory(categoryId);

        if (subcategories.find(item => item.data[DEFAULT_LOCALE].alias === subcategory[DEFAULT_LOCALE].alias)) {
            return res.status(NOT_FOUND_STATUS_CODE).send({ code: 'duplication' });
        }

        const maxPositionIndex = subcategories?.reduce((result, current) => current.positionIndex <= result ? result : current.positionIndex, 0);
        const newSubcategories = [...subcategories, { data: subcategory, createdAt: now, updatedAt: now, positionIndex: maxPositionIndex + 1 }];

        editCategory(categoryId, { subcategories: newSubcategories, updatedAt: now })
            .then((category) => {
                res.status(OKAY_STATUS_CODE).send(category?.subcategories);
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
