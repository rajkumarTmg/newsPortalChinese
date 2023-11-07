import { OKAY_STATUS_CODE, SERVER_ERROR_STATUS_CODE } from '../../../../constants';

import getPageByPageId from '../queries/getPageByPageId';

export default function getPages (req, res) {
    const { id, locale } = req.query;

    try {
        getPageByPageId(id, locale)
            .then((page) => {
                res.status(OKAY_STATUS_CODE).send(page);
            })
            .catch(() => {
                res.status(SERVER_ERROR_STATUS_CODE).end();
            });
    } catch (e) {
        res.status(SERVER_ERROR_STATUS_CODE).end();
    }
}
