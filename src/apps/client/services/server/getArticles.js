import request from 'superagent';
import base from '../base';

export default function ({ locale, page = 1, size = 30, sort = 'desc' }) {
    return base(
        request
            .get('/api/client/article/')
            .query({ locale: locale, page: page, size: size, sort: sort })

    )
        .then(articles => {
            return {
                props: {
                    articles
                }
            };
        })
        .catch(() => {
            return {
                props: {
                    articles: {
                        totalCount: 0,
                        paginatedResults: []
                    }
                }
            };
        });
}
