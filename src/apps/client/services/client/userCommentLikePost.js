import request from 'superagent';
import base from '../base';

export default function (token, postId, commentId, userId, drafted) {
    return base(
        request
            .put('/api/client/user/comment/like/post')
            .query({ postId: postId, commentId: commentId, userId: userId, drafted: !!drafted })
            .set('Authorization', `Bearer ${token}`)
    );
}
