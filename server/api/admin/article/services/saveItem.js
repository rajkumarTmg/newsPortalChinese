import {
    NOT_FOUND_STATUS_CODE,
    OKAY_STATUS_CODE,
    SERVER_ERROR_STATUS_CODE
} from '../../../../constants';

import saveItem from '../../../client/article/queries/saveItem';
import isUnique from '../../../client/article/queries/isUnique';
import { DEFAULT_LOCALE } from '../../../../../src/apps/client/constants';

export default function (req, res) {
    try {
        const item = req.body;
        const now = Date.now();
        const itemToSave = { data: item, createdAt: now, updatedAt: now };

        isUnique(itemToSave)
            .then((count) => {
                if (count && item[DEFAULT_LOCALE].alias) {
                    return res.status(NOT_FOUND_STATUS_CODE).send({ code: 'duplication' });
                } else {
                    saveItem(itemToSave)
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
