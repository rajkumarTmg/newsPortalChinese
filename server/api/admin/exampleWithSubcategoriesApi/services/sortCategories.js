import { OKAY_STATUS_CODE, SERVER_ERROR_STATUS_CODE } from '../../../../constants';

import editCategory from '../../../client/exampleWithSubcategoriesApi/queries/editCategory';

export default function (req, res) {
    try {
        Promise.all(req.body.map((id, i) => editCategory(id, { positionIndex: i })))
            .then(slide => {
                res.status(OKAY_STATUS_CODE).send(slide);
            })
            .catch(() => {
                res.status(SERVER_ERROR_STATUS_CODE).end();
            });
    } catch (e) {
        res.status(SERVER_ERROR_STATUS_CODE).end();
    }
}
