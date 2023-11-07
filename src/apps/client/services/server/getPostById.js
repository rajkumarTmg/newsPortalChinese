import request from 'superagent';
import base from '../base';

export default function ({ locale, id }) {
    return base(
        request
            .get('/api/client/post/getbyid')
            .query({ locale: locale, id: id })

    )
        .then(post => {
            return post;
        });
}
