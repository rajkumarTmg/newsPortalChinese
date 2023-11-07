import {
    MONGODB_DUPLICATE_CODE,
    NOT_FOUND_STATUS_CODE,
    OKAY_STATUS_CODE,
    SERVER_ERROR_STATUS_CODE
} from '../../../../constants';

import getCategories from '../../../client/article/queries/getCategories';
import saveCategory from '../../../client/article/queries/saveCategory';
import { DEFAULT_LOCALE } from '../../../../../src/apps/client/constants';

export default async function (req, res) {
    try {
        const category = req.body;
        const now = Date.now();

        const categories = await getCategories();

        if (categories.find(item => item.data[DEFAULT_LOCALE].alias === category[DEFAULT_LOCALE].alias)) {
            return res.status(NOT_FOUND_STATUS_CODE).send({ code: 'duplication' });
        }

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
