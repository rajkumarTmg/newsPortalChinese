import {
    OKAY_STATUS_CODE,
    NOT_FOUND_STATUS_CODE,
    SERVER_ERROR_STATUS_CODE,
    MONGODB_DUPLICATE_CODE
} from '../../../../constants';

import editItem from '../../../client/author/queries/editItem';

export default function (req, res) {
    try {
        const item = req.body;
        const { id } = req.params;
        const now = Date.now();

        editItem(id, { data: item, updatedAt: now })
            .then(item => {
                res.status(OKAY_STATUS_CODE).send(item);
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
