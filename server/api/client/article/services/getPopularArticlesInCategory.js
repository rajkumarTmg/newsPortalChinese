import { OKAY_STATUS_CODE, SERVER_ERROR_STATUS_CODE } from '../../../../constants';
import getPopularItemsPaginatedInCategory from '../queries/getPopularItemsPaginatedInCategory';
import getCategoryByAlias from '../queries/getCategoryByAlias';

export default function (req, res) {
    const { locale, page, size, sort, categoryAlias } = req.query;

    try {
        getCategoryByAlias(categoryAlias).then((category) => {
            if (!category) {
                return res.status(SERVER_ERROR_STATUS_CODE).end();
            }
            getPopularItemsPaginatedInCategory(page, size, sort, locale, category?._id.toString())
                .then(items => {
                    res.status(OKAY_STATUS_CODE).send({ paginatedResults: items, totalCount: 0 });
                })
                .catch(() => {
                    res.status(SERVER_ERROR_STATUS_CODE).end();
                });
        })
            .catch(() => {
                res.status(SERVER_ERROR_STATUS_CODE).end();
            });
    } catch (e) {
        res.status(SERVER_ERROR_STATUS_CODE).end();
    }
}
