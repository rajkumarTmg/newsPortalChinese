import { OKAY_STATUS_CODE, SERVER_ERROR_STATUS_CODE } from '../../../../constants';
import getItemsPaginatedByName from '../../../client/post/queries/getItemsPaginatedByName';

export default function (req, res) {
    const { search, page, size, sort, categoryId, subcategoryId, excludeId, type, locale } = req.query;
    try {
        getItemsPaginatedByName(search, page, size, sort, categoryId, subcategoryId, excludeId, type, locale)
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
