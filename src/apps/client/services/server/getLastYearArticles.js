import request from 'superagent';
import base from '../base';

export default function () {
    return base(
        request
            .get('/api/client/article/last-year')

    );
}
