import {
    OKAY_STATUS_CODE,
    SERVER_ERROR_STATUS_CODE
} from '../../../../constants';

import editItem from '../../../client/post/queries/editItem';
import getItemById from '../../../client/post/queries/getItemById';

export default function (req, res) {
    try {
        const comment = req.body;
        const { id, commentId } = req.params;
        const now = Date.now();
        getItemById(id).then((post) => {
            const commentsModified = post.comments.list;
            const index = post.comments.list.findIndex((comment) => comment._id?.toString() === commentId);
            commentsModified[index] = {
                likes: commentsModified[index].likes,
                verified: commentsModified[index].verified,
                userId: commentsModified[index].userId,
                userName: commentsModified[index].userName,
                createdAt: commentsModified[index].createdAt,
                _id: commentsModified[index]._id,
                text: comment.text
            };

            editItem(id, {
                comments: {
                    count: post.comments.count,
                    list: commentsModified
                },
                updatedAt: now
            })
                .then(item => {
                    res.status(OKAY_STATUS_CODE).send(item);
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
