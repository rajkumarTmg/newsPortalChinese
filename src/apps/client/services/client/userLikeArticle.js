import request from 'superagent';
import base from '../base';

export default function (token, id, userId, drafted) {
    return base(
        request
            .put('/api/client/user/like/article')
            .query({ articleId: id, userId: userId, drafted: !!drafted })
            .set('Authorization', `Bearer ${token}`)
    );
}
