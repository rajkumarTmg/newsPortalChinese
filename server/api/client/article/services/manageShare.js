import { OKAY_STATUS_CODE, SERVER_ERROR_STATUS_CODE } from '../../../../constants';

import editItem from '../queries/editItem';
import getItemById from '../queries/getItemById';

export default function (req, res) {
    const { articleId } = req.query;
    try {
        getItemById(articleId)
            .then((article) => {
                const { shares } = article;

                editItem(articleId, { shares: shares + 1 })
                    .then(() => {
                        res.status(OKAY_STATUS_CODE).send();
                    })
                    .catch(() => {
                        res.status(SERVER_ERROR_STATUS_CODE).end();
                    });
            });
    } catch (e) {
        res.status(SERVER_ERROR_STATUS_CODE).end();
    }
}
