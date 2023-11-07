import request from 'superagent';
import base from '../base';

export default function (context) {
    const locale = context?.locale;
    const page = 1;
    const size = 14;
    const sort = 'desk';
    const categoryAlias = (context?.params || context?.query)?.slug;
    const subcategoryAlias = (context?.params || context?.query)?.subcategory;

    return base(
        request
            .get('/api/client/article/getbysubcategoryalias')
            .query({
                locale: locale,
                page: page,
                size: size,
                sort: sort,
                categoryAlias: categoryAlias,
                subcategoryAlias: subcategoryAlias
            })

    )
        .then((articles) => {
            return {
                props: {
                    articlesBySubcategory: articles.subcategoryRecentArticles,
                    articlesFeatured: articles.subcategoryFeatured
                }
            };
        })
        .catch(() => {
            return {
                props: {
                    articlesBySubcategory: { totalCount: 0, paginatedResults: [] },
                    articlesFeatured: []
                }
            };
        });
}
