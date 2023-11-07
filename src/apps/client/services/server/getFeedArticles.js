import request from 'superagent';
import base from '../base';

export default function ({ page = 1, size = 20, sort = 'desc' }) {
    return base(
        request
            .get('/api/client/article/feed')
            .query({ page: page, size: size, sort: sort })

    ).catch(() => {
    });
}
