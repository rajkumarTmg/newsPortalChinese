import { OKAY_STATUS_CODE, SERVER_ERROR_STATUS_CODE } from '../../../../constants';

import getCommercialForArticle from '../queries/getCommercialForArticle';

export default function (req, res) {
    try {
        getCommercialForArticle(req.query.page, req.query.articleId, req.query.category, req.query.subcategory)
            .then(items => {
                res.status(OKAY_STATUS_CODE).send(
                    items.sort((prev, next) => next.createdAt - prev.createdAt)
                );
            })
            .catch(() => {
                res.status(SERVER_ERROR_STATUS_CODE).end();
            });
    } catch (e) {
        res.status(SERVER_ERROR_STATUS_CODE).end();
    }
}
