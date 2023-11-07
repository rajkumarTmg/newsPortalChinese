import request from 'superagent';
import base from '../../base';

export default function (context) {
    const userId = context?.userId;
    const page = context?.page || 'articlePage';
    const articleId = context?.articleId;
    const category = context?.category;
    const subcategory = context?.subcategory;

    return base(
        request
            .get('/api/client/votesApi/getVotesForArticle')
            .query({ page: page, articleId, category, subcategory, userId: userId })
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
