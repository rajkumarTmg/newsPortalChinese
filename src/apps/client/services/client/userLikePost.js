import request from 'superagent';
import base from '../base';

export default function (token, id, userId, drafted) {
    return base(
        request
            .put('/api/client/user/like/post')
            .query({ postId: id, userId: userId, drafted: !!drafted })
            .set('Authorization', `Bearer ${token}`)
    );
}
