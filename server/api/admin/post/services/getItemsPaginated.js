import { OKAY_STATUS_CODE, SERVER_ERROR_STATUS_CODE } from '../../../../constants';

import getItemsPaginatedBasic from '../../../client/post/queries/getItemsPaginatedBasic';

export default function (req, res) {
    const { page, size, sort, categoryId, subcategoryId, search, dateStart, dateEnd } = req.query;
    try {
        getItemsPaginatedBasic(page, size, sort, categoryId, subcategoryId, search, dateStart, dateEnd, true)
            .then(items => {
                res.status(OKAY_STATUS_CODE).send({ paginatedResults: items[0].paginatedResults, totalCount: items[0].totalCount[0]?.count || 0 });
            })
            .catch(() => {
                res.status(SERVER_ERROR_STATUS_CODE).end();
            });
    } catch (e) {
        res.status(SERVER_ERROR_STATUS_CODE).end();
    }
}
