import { OKAY_STATUS_CODE, SERVER_ERROR_STATUS_CODE } from '../../../../constants';
import getItemsPaginatedInSubcategory from '../queries/getItemsPaginatedInSubcategory';
import getCategoryByAlias from '../queries/getCategoryByAlias';
import getArticlesByIds from '../queries/getItemsByIds';

export default function (req, res) {
    const { locale, page, size, sort, categoryAlias, subcategoryAlias } = req.query;
    try {
        getCategoryByAlias(categoryAlias).then((category) => {
            if (!category) {
                return res.status(SERVER_ERROR_STATUS_CODE).end();
            }

            const subcategory = category?.subcategories?.find(subcategory => subcategory?.data[locale].alias === subcategoryAlias);

            if (!subcategory) {
                return res.status(SERVER_ERROR_STATUS_CODE).end();
            }

            Promise.all([
                // eslint-disable-next-line max-len
                getItemsPaginatedInSubcategory(page, size, sort, locale, category?._id.toString(), subcategory?._id.toString(), (subcategory?.data[locale].featured?.filter(item => !!item).join(',') || '')),
                !!subcategory?.data[locale].featured?.length && getArticlesByIds(subcategory?.data[locale].featured?.filter(item => !!item).join(',') || '')
            ])
                .then(([items, featured]) => {
                    // eslint-disable-next-line max-len
                    res.status(OKAY_STATUS_CODE).send({ subcategoryRecentArticles: { paginatedResults: items[0].paginatedResults, totalCount: items[0].totalCount[0]?.count || 0 }, subcategoryFeatured: featured || null });
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
