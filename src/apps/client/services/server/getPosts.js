import request from 'superagent';
import base from '../base';

export default function ({ locale, page = 1, size = 30, sort = 'asc' }) {
    return base(
        request
            .get('/api/client/post/')
            .query({ locale: locale, page: page, size: size, sort: sort })

    )
        .then(posts => {
            return {
                props: {
                    posts
                }
            };
        })
        .catch(() => {
            return {
                props: {
                    posts: {
                        totalCount: 0,
                        paginatedResults: []
                    }
                }
            };
        });
}
