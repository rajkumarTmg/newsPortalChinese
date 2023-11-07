import { OKAY_STATUS_CODE, SERVER_ERROR_STATUS_CODE } from '../../../../constants';

import getCategory from '../../../client/article/queries/getCategory';

export default function (req, res) {
    try {
        const { categoryId } = req.params;

        getCategory(categoryId)
            .then(category => {
                const { subcategories = [] } = category;
                res.status(OKAY_STATUS_CODE).send(subcategories);
            })
            .catch(() => {
                res.status(SERVER_ERROR_STATUS_CODE).end();
            });
    } catch (e) {
        res.status(SERVER_ERROR_STATUS_CODE).end();
    }
}
