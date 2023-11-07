import getCitiesQuery from '../queries/getCities';

import { OKAY_STATUS_CODE, SERVER_ERROR_STATUS_CODE } from '../../../../constants';

export default function getCities (req, res) {
    try {
        const { country: countryId } = req.query;

        getCitiesQuery(countryId)
            .then(result => {
                return res.status(OKAY_STATUS_CODE).send(result ? result.cities : []);
            })
            .catch(() => {
                res.status(SERVER_ERROR_STATUS_CODE).end();
            });
    } catch (e) {
        res.status(SERVER_ERROR_STATUS_CODE).end();
    }
}
