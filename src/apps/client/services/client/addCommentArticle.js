import request from 'superagent';
import base from '../base';

export default function (token, id, userId, payload) {
    return base(
        request
            .post('/api/client/user/comment/article')
            .query({ articleId: id, userId: userId })
            .send(payload)
            .set('Authorization', `Bearer ${token}`)
    );
}
