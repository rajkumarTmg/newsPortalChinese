import request from 'superagent';
import base from '../../base';

export default function ({ page, category, subcategory }) {
    return base(
        request
            .get('/api/client/commercial/getCommercialForCategories')
            .query({ page: page, category: category, subcategory: subcategory })

    )
        .then(commercials => {
            return commercials
            ;
        });
}
