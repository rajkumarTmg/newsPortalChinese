import {
    MONGODB_DUPLICATE_CODE,
    NOT_FOUND_STATUS_CODE,
    OKAY_STATUS_CODE,
    SERVER_ERROR_STATUS_CODE
} from '../../../../constants';

import saveItem from '../../../client/author/queries/saveItem';
import getItemByName from '../../../client/author/queries/getItemByName';

export default function (req, res) {
    try {
        const item = req.body;
        const now = Date.now();

        getItemByName(item['zh-cn'].name).then((result) => {
            if (!result.length) {
                saveItem({ data: item, createdAt: now, updatedAt: now })
                    .then(item => {
                        res.status(OKAY_STATUS_CODE).send(item);
                    })
                    .catch((err) => {
                        if (err.code === MONGODB_DUPLICATE_CODE) {
                            return res.status(NOT_FOUND_STATUS_CODE).send({ code: 'duplication' });
                        }

                        res.status(SERVER_ERROR_STATUS_CODE).end();
                    });
            } else {
                res.status(OKAY_STATUS_CODE).send(result[0]);
            }
        });
    } catch (e) {
        res.status(SERVER_ERROR_STATUS_CODE).end();
    }
}
