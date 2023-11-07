import { OKAY_STATUS_CODE, SERVER_ERROR_STATUS_CODE } from '../../../../constants';
import getItemsPaginatedSearch from '../queries/getItemsPaginatedSearch';

export default function (req, res) {
    const { locale, page, size, search, sort } = req.query;
    try {
        if (search) {
            getItemsPaginatedSearch(page, size, search, locale, sort)
                .then(items => {
                    res.status(OKAY_STATUS_CODE).send({ paginatedResults: items[0].paginatedResults, totalCount: items[0].totalCount[0]?.count || 0 });
                })
                .catch(() => {
                    res.status(SERVER_ERROR_STATUS_CODE).end();
                });
        } else {
            res.status(OKAY_STATUS_CODE).send({ totalCount: 0, paginatedResults: [] });
        }
    } catch (e) {
        res.status(SERVER_ERROR_STATUS_CODE).end();
    }
}
