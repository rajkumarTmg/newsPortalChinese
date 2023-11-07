import { OKAY_STATUS_CODE, SERVER_ERROR_STATUS_CODE } from '../../../../constants';
import getItemsPaginated from '../queries/getItemsPaginated';

export default function (req, res) {
    const { locale, page, size, sort, categoryId, excludeId } = req.query;
    try {
        getItemsPaginated(page, size, sort, locale, categoryId, excludeId)
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
