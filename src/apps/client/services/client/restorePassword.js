import request from 'superagent';
import base from '../base';

export default function (payload) {
    return base(
        request
            .get('/api/client/user/forget')
            .query(payload)
    );
}
