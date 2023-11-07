import request from 'superagent';
import base from '../../base';

export default function ({ voteId, variantId, token, locale = 'en', path }) {
    return base(
        request
            .post('/api/client/votesApi')
            .send({ voteId, variantId, locale, path })
            .set('Authorization', `Bearer ${token}`)

    )
        .then(vote => {
            return vote
            ;
        });
}
