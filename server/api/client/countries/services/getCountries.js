import getCountriesQuery from '../queries/getCountries';

import { OKAY_STATUS_CODE, SERVER_ERROR_STATUS_CODE } from '../../../../constants';

export default function (req, res) {
    try {
        getCountriesQuery()
            .then(result => {
                return res.status(OKAY_STATUS_CODE).send(result.countries);
            })
            .catch(() => {
                res.status(SERVER_ERROR_STATUS_CODE).end();
            });
    } catch (e) {
        res.status(SERVER_ERROR_STATUS_CODE).end();
    }
}
