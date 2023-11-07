import setArticleCategories from '../../store/actions/setArticleCategories';
import request from 'superagent';
import base from '../base';

export default function ({ locale }) {
    return base(
        request
            .get('/api/client/article/category')
            .query({ locale: locale })

    )
        .then(categories => {
            return {
                actions: [setArticleCategories(categories)]
            };
        })
        .catch(() => {
            return {
                actions: [setArticleCategories([])]
            };
        });
}
