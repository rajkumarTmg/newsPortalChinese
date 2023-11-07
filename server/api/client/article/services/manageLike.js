import { OKAY_STATUS_CODE, SERVER_ERROR_STATUS_CODE } from '../../../../constants';

import editItem from '../queries/editItem';
import getItemById from '../queries/getItemById';

export default function (req, res) {
    const { articleId, userId, drafted } = req.query;

    try {
        getItemById(articleId)
            .then((article) => {
                const { likes } = article;
                const likesModified = likes.list.filter((id) => id === userId).length
                    ? (drafted === 'true' ? likes.list : likes.list.filter((id) => id !== userId))
                    : [...likes.list, userId];

                editItem(articleId, { likes: { count: likesModified.length, list: likesModified } })
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
