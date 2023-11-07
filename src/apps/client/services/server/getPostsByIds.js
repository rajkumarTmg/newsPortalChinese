import request from 'superagent';
import base from '../base';

export default function ({ locale, ids, sort }) {
    return base(
        request
            .get('/api/client/post/getbyids')
            .query({ locale: locale, ids: ids, sort: sort })

    )
        .then(post => {
            return post;
        });
}
