import request from 'superagent';
import base from '../../base';

export default function ({ page }) {
    return base(
        request
            .get('/api/client/commercial/getCommercialForPages')
            .query(`page=${page}`)

    )
        .then(commercials => {
            return commercials
            ;
        });
}
