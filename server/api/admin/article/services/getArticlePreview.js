import { OKAY_STATUS_CODE, SERVER_ERROR_STATUS_CODE } from '../../../../constants';
import getPreviewByAlias from '../../../client/article/queries/getPreviewByAlias';

export default function (req, res) {
    const { locale, alias } = req.query;

    try {
        getPreviewByAlias(alias, locale)
            .then(item => {
                res.status(OKAY_STATUS_CODE).send(item);
            })
            .catch(() => {
                res.status(SERVER_ERROR_STATUS_CODE).end();
            });
    } catch (e) {
        res.status(SERVER_ERROR_STATUS_CODE).end();
    }
}
