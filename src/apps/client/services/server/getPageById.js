import request from 'superagent';
import base from '../base';

export default function ({ locale, id }) {
    return base(
        request
            .get('/api/client/page/id')
            .query({ locale: locale, id: id })

    )
        .then(page => page);
}
