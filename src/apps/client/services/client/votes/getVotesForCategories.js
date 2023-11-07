import request from 'superagent';
import base from '../../base';

export default function (context) {
    const category = context?.slug;
    const subcategory = context?.subcategory;
    const userId = context?.userId;
    const locale = context?.locale;
    const page = context?.page ||
        (context?.resolvedUrl?.includes('/categories/')
            ? (subcategory ? 'subCategoryPage' : 'categoryPage')
            : (context?.resolvedUrl?.includes('/multimedia/') && 'multimediaPage'));

    return base(
        request
            .get('/api/client/votesApi/getVotesForCategories')
            .query({ page: page, category: category, subcategory: subcategory, userId: userId, locale: locale })
    )
        .then(votes => {
            return {
                props: {
                    votes
                }
            };
        })
        .catch(() => {
            return {
                props: {
                    votes: []
                }
            };
        });
}
