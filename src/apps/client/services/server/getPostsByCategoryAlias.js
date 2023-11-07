import request from 'superagent';
import base from '../base';

export default function (context) {
    const locale = context?.locale;
    const page = 1;
    const size = 10;
    const sort = 'desk';
    const categoryAlias = (context?.params || context?.query)?.slug;

    return base(
        request
            .get('/api/client/post/getbycategoryalias')
            .query({
                locale: locale,
                page: page,
                size: size,
                sort: sort,
                categoryAlias: categoryAlias
            })

    )
        .then(posts => {
            return {
                props: {
                    postsByCategory: posts
                }
            };
        })
        .catch(() => {
            return {
                props: {
                    postsByCategory: {
                        totalCount: 0,
                        paginatedResults: []
                    }
                }
            };
        });
}
