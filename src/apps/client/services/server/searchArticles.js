import request from 'superagent';
import base from '../base';

export default function ({ locale, page = 1, size = 10, sort = 'desk', search }) {
    return base(
        request
            .get('/api/client/article/search')
            .query({
                locale: locale,
                page: page,
                size: size,
                search: search,
                sort: sort
            })
    )
        .then(articles => {
            return articles;
        });
}
