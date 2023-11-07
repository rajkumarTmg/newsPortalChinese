import request from 'superagent';
import base from '../base';

export default function (context) {
    const page = 1;
    const size = 8;
    const sort = 'desk';
    const locale = context?.locale;
    const categoryAlias = (context?.params || context?.query)?.slug;
    return base(
        request
            .get('/api/client/article/getbycategory/popular')
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
                    popularArticlesInCategory: articles
                }
            };
        })
        .catch(() => {
            return {
                props: {
                    popularArticlesInCategory: {
                        totalCount: 0,
                        paginatedResults: []
                    }
                }
            };
        });
}
