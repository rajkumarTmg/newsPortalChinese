import setAuthors from '../../store/actions/setAuthors';
import request from 'superagent';
import base from '../base';

export default function ({ locale }) {
    return base(
        request
            .get('/api/client/author/')
            .query({ locale: locale })

    )
        .then(authors => {
            return {
                actions: [setAuthors(authors)]
            };
        })
        .catch(() => {
            return {
                actions: [setAuthors([])]
            };
        });
}
