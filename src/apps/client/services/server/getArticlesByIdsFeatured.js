import request from 'superagent';
import base from '../base';

export default function ({ locale }) {
    return base(
        request
            .get('/api/client/article/getbyidsfeatured')
            .query({ locale: locale })

    )
        .then(featured => {
            return {
                props: {
                    featuredArticles: featured.articles,
                    featuredPosts: featured.posts
                }
            };
        })
        .catch(() => {
            return {
                props: {
                    featuredArticles: [],
                    featuredPosts: []
                }
            };
        });
}
