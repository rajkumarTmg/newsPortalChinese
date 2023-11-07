import { OKAY_STATUS_CODE, SERVER_ERROR_STATUS_CODE } from '../../../../constants';

import getCategories from '../../../client/exampleWithSubcategoriesApi/queries/getCategories';

export default function (req, res) {
    try {
        getCategories()
            .then(categories => {
                res.status(OKAY_STATUS_CODE).send(
                    categories.sort((prev, next) => prev.positionIndex - next.positionIndex)
                );
            })
            .catch(() => {
                res.status(SERVER_ERROR_STATUS_CODE).end();
            });
    } catch (e) {
        res.status(SERVER_ERROR_STATUS_CODE).end();
    }
}
