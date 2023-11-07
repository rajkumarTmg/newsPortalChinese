import request from 'superagent';
import base from '../base';

export default function (token) {
    return base(
        request
            .get('/api/client/user/profile')
            .set('Authorization', `Bearer ${token}`)
    )
        .then(result => result.user);
}
