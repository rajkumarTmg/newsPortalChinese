import { OKAY_STATUS_CODE, SERVER_ERROR_STATUS_CODE } from '../../../../constants';

import getArticleZhen from '../../../client/article/queries/getArticleZhen';

export default function (req, res) {
    const { link } = req.query;
    try {
        getArticleZhen(link)
            .then(article => {
                res.status(OKAY_STATUS_CODE).send(article);
            })
            .catch(() => {
                res.status(SERVER_ERROR_STATUS_CODE).end();
            });
    } catch (e) {
        res.status(SERVER_ERROR_STATUS_CODE).end();
    }
}
