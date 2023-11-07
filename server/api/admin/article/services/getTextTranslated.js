import { OKAY_STATUS_CODE, SERVER_ERROR_STATUS_CODE } from '../../../../constants';

import getTextTranslated from '../../../client/article/queries/getTextTranslated';

export default function (req, res) {
    const { texts } = req.body;

    try {
        getTextTranslated(texts)
            .then(translationsResult => {
                res.status(OKAY_STATUS_CODE).send({ translations: translationsResult });
            })
            .catch(() => {
                res.status(SERVER_ERROR_STATUS_CODE).end();
            });
    } catch (e) {
        res.status(SERVER_ERROR_STATUS_CODE).end();
    }
}
