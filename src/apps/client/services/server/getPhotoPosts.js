import request from 'superagent';
import base from '../base';

export default function ({ locale, page = 1, size = 50, sort = 'desc', type = 'photo', categoryId, subcategoryId, excludeArticleIds, featured }) {
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
