import request from 'superagent';
import base from '../base';

export default function (context) {
    const locale = context?.locale;
    const page = 1;
    const size = 5;
    const sort = 'desk';
    const type = 'photo';
    const articleAlias = (context?.params || context?.query)?.slug;

    return base(
        request
            .get('/api/client/post/getbyarticlealias')
            .query({
                locale: locale,
                page: page,
                size: size,
                sort: sort,
                type: type,
                articleAlias: articleAlias
            })

    )
        .then(posts => {
            return {
                props: {
                    photoPosts: posts
                }
            };
        })
        .catch(() => {
            return {
                props: {
                    photoPosts: {
                        totalCount: 0,
                        paginatedResults: []
                    }
                }
            };
        });
}
