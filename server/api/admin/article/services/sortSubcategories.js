import { OKAY_STATUS_CODE, SERVER_ERROR_STATUS_CODE } from '../../../../constants';

import getCategory from '../../../client/article/queries/getCategory';
import editCategory from '../../../client/article/queries/editCategory';

export default async function (req, res) {
    try {
        const { categoryId } = req.params;
        const { ids } = req.body;
        const now = Date.now();

        const { subcategories = [] } = await getCategory(categoryId);

        const newSubcategories = ids
            .map(id => subcategories?.find(({ _id }) => _id.toString() === id))
            .map((subc, i) => ({ ...subc, positionIndex: i }));

        editCategory(categoryId, { subcategories: newSubcategories, updatedAt: now })
            .then(({ subcategories }) => {
                res.status(OKAY_STATUS_CODE).send(subcategories);
            })
            .catch(() => {
                res.status(SERVER_ERROR_STATUS_CODE).end();
            });
    } catch (e) {
        res.status(SERVER_ERROR_STATUS_CODE).end();
    }
}
