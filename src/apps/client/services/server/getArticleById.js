import request from 'superagent';
import base from '../base';

export default function ({ locale, id }) {
    return base(
        request
            .get('/api/client/article/getbyid')
            .query({ locale: locale, id: id })

    )
        .then(article => {
            return article;
        });
}
