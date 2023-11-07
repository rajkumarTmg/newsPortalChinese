import { OKAY_STATUS_CODE, SERVER_ERROR_STATUS_CODE } from '../../../../constants';

import editItem from '../../../client/article/queries/editItem';
import getItemsByIds from '../../../client/article/queries/getItemsByIds';

export default function (req, res) {
    const ids = req.body;
    try {
        const articlesIds = ids.map(item => item.articleId).join(',');
        getItemsByIds(articlesIds)
            .then((articles) => {
                Promise.all(articles.map((article) => {
                    const { comments } = article;
                    const commentsIds = ids.filter(item => item.articleId === article._id.toString())[0]?.commentsIds;
                    if (!commentsIds) {
                        res.status(SERVER_ERROR_STATUS_CODE).end();
                    }

                    const commentsModified = comments.list.filter((comment) => !commentsIds.filter(id => id === comment._id?.toString()).length);

                    return editItem(article._id,
                        {
                            comments: {
                                count: comments.count,
                                list: commentsModified
                            }
                        }
                    );
                }))
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
