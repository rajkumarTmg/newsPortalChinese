import request from 'superagent';
import base from '../base';

export default function ({ firstName, lastName, email, phone, locale = 'en' }) {
    return base(
        request
            .post('/api/client/subscription')
            .send({ firstName, lastName, email, phone, locale })
    );
}
