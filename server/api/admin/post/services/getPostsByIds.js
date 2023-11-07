import { OKAY_STATUS_CODE, SERVER_ERROR_STATUS_CODE } from '../../../../constants';
import getItemsByIds from '../../../client/post/queries/getItemsByIds';

export default function (req, res) {
    const { ids, locale, sort } = req.query;
    try {
        if (!ids.length) {
            res.status(OKAY_STATUS_CODE).send([]);
            return;
        }

        getItemsByIds(ids, locale, sort)
            .then(items => {
                res.status(OKAY_STATUS_CODE).send(items);
            })
            .catch(() => {
                res.status(SERVER_ERROR_STATUS_CODE).end();
            });
    } catch (e) {
        res.status(SERVER_ERROR_STATUS_CODE).end();
    }
}
