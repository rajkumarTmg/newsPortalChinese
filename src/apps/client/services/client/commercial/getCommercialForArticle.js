import request from 'superagent';
import base from '../../base';

export default function ({ page, articleId, category, subcategory }) {
    return base(
        request
            .get('/api/client/commercial/getCommercialForArticle')
            .query(`page=${page}&articleId=${articleId}&category=${category}&subcategory=${subcategory}`)

    )
        .then(commercials => {
            return commercials
            ;
        });
}
