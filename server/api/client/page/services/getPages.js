import { OKAY_STATUS_CODE, SERVER_ERROR_STATUS_CODE } from '../../../../constants';

import getPagesQuery from '../queries/getPages';

export default function getPages (req, res) {
    const { locale } = req.query;

    try {
        getPagesQuery(locale)
            .then((pages) => {
                res.status(OKAY_STATUS_CODE).send(pages);
            })
            .catch(() => {
                res.status(SERVER_ERROR_STATUS_CODE).end();
            });
    } catch (e) {
        res.status(SERVER_ERROR_STATUS_CODE).end();
    }
}
