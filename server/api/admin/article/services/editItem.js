import {
    OKAY_STATUS_CODE,
    NOT_FOUND_STATUS_CODE,
    SERVER_ERROR_STATUS_CODE
} from '../../../../constants';

import editItem from '../../../client/article/queries/editItem';
import isUnique from '../../../client/article/queries/isUnique';

export default function (req, res) {
    try {
        const item = req.body;
        const { id } = req.params;
        const now = Date.now();
        const itemToSave = { data: item, updatedAt: now };

        isUnique(itemToSave, id)
            .then((count) => {
                if (count) {
                    return res.status(NOT_FOUND_STATUS_CODE).send({ code: 'duplication' });
                } else {
                    editItem(id, itemToSave)
                        .then(item => {
                            res.status(OKAY_STATUS_CODE).send(item);
                        })
                        .catch(() => {
                            res.status(SERVER_ERROR_STATUS_CODE).end();
                        });
                }
            })
            .catch(() => {
                res.status(SERVER_ERROR_STATUS_CODE).end();
            });
    } catch (e) {
        res.status(SERVER_ERROR_STATUS_CODE).end();
    }
}
