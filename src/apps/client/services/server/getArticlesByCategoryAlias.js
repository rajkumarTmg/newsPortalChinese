import request from 'superagent';
import base from '../base';

export default function (context) {
    const locale = context?.locale;
    const page = 1;
    const size = 20;
    const sort = 'desk';
    const categoryAlias = (context?.params || context?.query)?.slug;

    return base(
        request
            .get('/api/client/article/getbycategoryalias')
            .query({
                locale: locale,
                page: page,
                size: size,
                sort: sort,
                categoryAlias: categoryAlias
            })

    )
        .then(articles => {
            return {
                props: {
                    articlesByCategory: articles
                }
            };
        })
        .catch(() => {
            return {
                props: {
                    articlesByCategory: {
                        totalCount: 0,
                        paginatedResults: []
                    }
                }
            };
        });
}
