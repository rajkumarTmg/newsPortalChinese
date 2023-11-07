import request from 'superagent';
import base from '../base';

export default function (token, userId) {
    return base(
        request
            .get('/api/client/user/profile/news/liked')
            .query({ userId: userId })
            .set('Authorization', `Bearer ${token}`)
    )
        .then(likes => likes);
}
