import { OKAY_STATUS_CODE, SERVER_ERROR_STATUS_CODE } from '../../../../constants';
import getItem from '../queries/getItem';

export default function (req, res) {
    const { locale, alias } = req.query;

    try {
        getItem(alias, locale)
            .then(item => {
                if (!item) {
                    res.status(SERVER_ERROR_STATUS_CODE).end();
                }
                res.status(OKAY_STATUS_CODE).send(item);
            })
            .catch(() => {
                res.status(SERVER_ERROR_STATUS_CODE).end();
            });
    } catch (e) {
        res.status(SERVER_ERROR_STATUS_CODE).end();
    }
}
