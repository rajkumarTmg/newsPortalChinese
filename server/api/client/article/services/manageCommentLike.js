import { OKAY_STATUS_CODE, SERVER_ERROR_STATUS_CODE } from '../../../../constants';

import editItem from '../queries/editItem';
import getItemById from '../queries/getItemById';

export default function (req, res) {
    const { articleId, commentId, userId, drafted } = req.query;
    try {
        getItemById(articleId)
            .then((article) => {
                const { comments } = article;
                const comment = comments.list.filter((comment) => comment._id?.toString() === commentId)[0];

                if (!comment) {
                    res.status(SERVER_ERROR_STATUS_CODE).end();
                }

                const likesModified = comment.likes.list.filter((id) => id === userId).length
                    ? (drafted === 'true' ? comment.likes.list : comment.likes.list.filter((id) => id !== userId))
                    : [...comment.likes.list, userId];
                const commentsModified = comments.list;

                const index = comments.list.findIndex((comment) => comment._id?.toString() === commentId);
                commentsModified[index] = {
                    _id: comment._id,
                    userId: comment.userId,
                    userName: comment.userName,
                    text: comment.text,
                    createdAt: comment.createdAt,
                    likes: { count: likesModified.length, list: likesModified }
                };

                editItem(articleId,
                    {
                        comments: {
                            count: comments.count,
                            list: commentsModified
                        }
                    }
                )
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
