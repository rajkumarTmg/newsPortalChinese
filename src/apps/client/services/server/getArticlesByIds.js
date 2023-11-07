import request from 'superagent';
import base from '../base';

export default function ({ locale, ids, sort }) {
    if (!ids) {
        return [];
    }

    return base(
        request
            .get('/api/client/article/getbyids')
            .query({ locale: locale, ids: ids, sort: sort })

    )
        .then(article => {
            return article;
        });
}
