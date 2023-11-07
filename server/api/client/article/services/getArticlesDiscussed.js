import { OKAY_STATUS_CODE, SERVER_ERROR_STATUS_CODE } from '../../../../constants';
import getItemsPaginatedDiscussed from '../queries/getItemsPaginatedDiscussed';

export default function (req, res) {
    const { page, size, locale, categoryId, subcategoryId, excludeArticleIds, period } = req.query;
    try {
        getItemsPaginatedDiscussed(page, size, locale, categoryId, subcategoryId, excludeArticleIds, period)
            .then(items => {
                res.status(OKAY_STATUS_CODE).send({ paginatedResults: items, totalCount: 0 });
            })
            .catch(() => {
                res.status(SERVER_ERROR_STATUS_CODE).end();
            });
    } catch (e) {
        res.status(SERVER_ERROR_STATUS_CODE).end();
    }
}
