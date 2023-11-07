import { OKAY_STATUS_CODE, SERVER_ERROR_STATUS_CODE } from '../../../../constants';

import editItem from '../../../client/post/queries/editItem';
import getItemsByIds from '../../../client/post/queries/getItemsByIds';

export default function (req, res) {
    const ids = req.body;

    try {
        const postsIds = ids.map(item => item.postId).join(',');
        getItemsByIds(postsIds)
            .then((posts) => {
                Promise.all(posts.map((post) => {
                    const { comments } = post;
                    const commentsIds = ids.filter(item => item.postId === post._id.toString())[0]?.commentsIds;
                    if (!commentsIds) {
                        res.status(SERVER_ERROR_STATUS_CODE).end();
                    }

                    const commentsModified = comments.list;

                    commentsIds.forEach(id => {
                        const comment = comments.list.filter((comment) => comment._id?.toString() === id)[0];

                        if (!comment) {
                            return;
                        }

                        const index = comments.list.findIndex((comment) => comment._id?.toString() === id);
                        commentsModified[index] = {
                            _id: comment._id,
                            userId: comment.userId,
                            userName: comment.userName,
                            text: comment.text,
                            createdAt: comment.createdAt,
                            likes: comment.likes,
                            verified: true
                        };
                    });

                    return editItem(post._id,
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
