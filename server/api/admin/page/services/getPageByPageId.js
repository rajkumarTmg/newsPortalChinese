import { OKAY_STATUS_CODE, SERVER_ERROR_STATUS_CODE } from '../../../../constants';

import getPageByPageId from '../../../client/page/queries/getPageByPageId';

export default function (req, res) {
    try {
        const { pageId } = req.params;

        getPageByPageId(pageId)
            .then(page => {
                res.status(OKAY_STATUS_CODE).send(page || {});
            })
            .catch(() => {
                res.status(SERVER_ERROR_STATUS_CODE).end();
            });
    } catch (e) {
        res.status(SERVER_ERROR_STATUS_CODE).end();
    }
}
