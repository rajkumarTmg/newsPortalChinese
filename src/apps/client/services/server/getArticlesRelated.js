import request from 'superagent';
import base from '../base';

export default function ({ locale, page = 1, size = 10, sort = 'asc', categoryId, subcategoryId, excludeArticleIds, tags }) {
    return base(
        request
            .get('/api/client/article/getrelated')
            .query({
                locale: locale,
                page: page,
                size: size,
                sort: sort,
                tags: tags,
                categoryId: categoryId,
                subcategoryId: subcategoryId,
                excludeArticleIds: excludeArticleIds
            })

    )
        .then(articles => {
            return articles;
        });
}
