import { OKAY_STATUS_CODE, SERVER_ERROR_STATUS_CODE } from '../../../../constants';
import getItemsPaginatedByKeywords from '../queries/getItemsPaginatedByKeywords';
import getItemsPaginatedInSubcategory from '../queries/getItemsPaginatedInSubcategory';

export default function (req, res) {
    const { locale, page, size, sort, categoryId, subcategoryId, excludeArticleIds, tags } = req.query;
    try {
        getItemsPaginatedByKeywords(page, size, sort, locale, excludeArticleIds, tags)
            .then(items => {
                const result = { paginatedResults: items[0].paginatedResults, totalCount: items[0].totalCount[0]?.count || 0 };
                if (result.totalCount < size || items[0].paginatedResults < size) {
                    const pageSubcategory = result.totalCount < size ? page : (page - Math.ceil(result.totalCount / size) || 1);
                    getItemsPaginatedInSubcategory(pageSubcategory, size, sort, locale, categoryId, subcategoryId, excludeArticleIds)
                        .then(itemsSub => {
                            const result = { paginatedResults: itemsSub[0].paginatedResults, totalCount: itemsSub[0].totalCount[0]?.count || 0 };
                            const itemsBySubcategory = result.paginatedResults
                                .filter(item => !items[0].paginatedResults.find(subitem => subitem._id.toString() === item._id.toString()));
                            const results = [...items[0].paginatedResults, ...itemsBySubcategory].slice(0, size);
                            res.status(OKAY_STATUS_CODE).send({
                                paginatedResults: results,
                                totalCount: (items[0].totalCount[0]?.count || 0) + (itemsSub[0].totalCount[0]?.count || 0)
                            });
                        });
                } else {
                    res.status(OKAY_STATUS_CODE).send(result);
                }
            })
            .catch(() => {
                res.status(SERVER_ERROR_STATUS_CODE).end();
            });
    } catch (e) {
        res.status(SERVER_ERROR_STATUS_CODE).end();
    }
}
