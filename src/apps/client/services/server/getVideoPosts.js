import request from 'superagent';
import base from '../base';

export default function ({ locale, page = 1, size = 30, sort = 'desc', type = 'video', categoryId, subcategoryId, excludeArticleIds, featured }) {
    return base(
        request
            .get('/api/client/post/getbytype')
            .query({
                locale: locale,
                page: page,
                size: size,
                sort: sort,
                categoryId: categoryId,
                subcategoryId: subcategoryId,
                excludeArticleIds: excludeArticleIds,
                type: type,
                featured: featured
            })

    )
        .then(posts => {
            return {
                props: {
                    videoPosts: posts
                }
            };
        })
        .catch(() => {
            return {
                props: {
                    videoPosts: {
                        totalCount: 0,
                        paginatedResults: []
                    }
                }
            };
        });
}
