import request from 'superagent';
import base from '../base';

export default function (token, articleId, commentId, userId, drafted) {
    return base(
        request
            .put('/api/client/user/comment/like/article')
            .query({ articleId: articleId, commentId: commentId, userId: userId, drafted: !!drafted })
            .set('Authorization', `Bearer ${token}`)
    );
}
