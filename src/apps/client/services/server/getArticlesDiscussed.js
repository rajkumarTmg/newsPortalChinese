import request from 'superagent';
import base from '../base';

export default function ({ locale, page = 1, size = 8, period = 'week', categoryId, subcategoryId, excludeArticleIds }) {
    return base(
        request
            .get('/api/client/article/discussed')
            .query({
                locale: locale,
                page: page,
                size: size,
                categoryId: categoryId,
                subcategoryId: subcategoryId,
                excludeArticleIds: excludeArticleIds,
                period: period
            })

    )
        .then(articles => {
            return {
                props: {
                    articlesDiscussed: articles
                }
            };
        })
        .catch(() => {
            return {
                props: {
                    articlesDiscussed: {
                        totalCount: 0,
                        paginatedResults: []
                    }
                }
            };
        });
}
