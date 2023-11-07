import request from 'superagent';
import base from '../../base';

export default function (context) {
    const userId = context?.userId;
    const page = context?.page || 'mainPage';

    return base(
        request
            .get('/api/client/votesApi/getVotesForPages')
            .query({ page: page, userId: userId })
    )
        .then(votes => {
            return {
                props: {
                    votes
                }
            };
        })
        .catch(() => {
            return {
                props: {
                    votes: []
                }
            };
        });
}
