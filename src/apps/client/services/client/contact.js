import request from 'superagent';
import base from '../base';

export default function (payload) {
    return base(
        request
            .post('/api/client/user/contact')
            .send(payload)
    )
        .catch(() => {});
}
