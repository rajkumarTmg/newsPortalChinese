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

                    const commentsModified = comments.list.filter((comment) => !commentsIds.filter(id => id === comment._id?.toString()).length);

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
