import { OKAY_STATUS_CODE, SERVER_ERROR_STATUS_CODE } from '../../../../constants';
import getItemsPaginatedByType from '../queries/getItemsPaginatedByType';

export default function (req, res) {
    const { locale, page, size, sort, categoryId, subcategoryId, excludeArticleIds, type, featured } = req.query;
    try {
        getItemsPaginatedByType(page, size, sort, locale, categoryId, subcategoryId, excludeArticleIds, type, featured)
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
