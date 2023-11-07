import {
    OKAY_STATUS_CODE,
    SERVER_ERROR_STATUS_CODE
} from '../../../../constants';
import getArticlesLiked from '../../article/queries/getItemsLiked';
import getPostsLiked from '../../post/queries/getItemsLiked';
import getCommentsLikedArticles from '../../article/queries/getCommentsLiked';
import getCommentsLikedPosts from '../../post/queries/getCommentsLiked';

export default (req, res) => {
    const { userId } = req.query;
    try {
        Promise.all([getArticlesLiked(userId), getPostsLiked(userId), getCommentsLikedArticles(userId), getCommentsLikedPosts(userId)])
            .then(([articles, posts, articlesComments, postsComments]) => {
                res.status(OKAY_STATUS_CODE).send({
                    articles,
                    posts,
                    articlesComments,
                    postsComments
                });
            })
            .catch(() => {
                res.status(SERVER_ERROR_STATUS_CODE).end();
            });
    } catch (e) {
        res.status(SERVER_ERROR_STATUS_CODE).end();
    }
};
