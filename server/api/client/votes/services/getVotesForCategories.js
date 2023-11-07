import { OKAY_STATUS_CODE, SERVER_ERROR_STATUS_CODE } from '../../../../constants';

import getVotesForCategories from '../queries/getVotesForCategories';
import getItemsWithAnswerInfo from '../utils/getItemsWithAnswerInfo';
import { DEFAULT_LOCALE } from '../../../../../src/apps/client/constants';

export default function (req, res) {
    try {
        getVotesForCategories(req.query.page, req.query.category, req.query.subcategory)
            .then(items => {
                if (req.query.userId) {
                    const itemsWithAnswerInfo = getItemsWithAnswerInfo(items, req.query.userId);
                    res.status(OKAY_STATUS_CODE).send(
                        itemsWithAnswerInfo.sort((prev, next) => prev.data[DEFAULT_LOCALE].date - next.data[DEFAULT_LOCALE].date)
                    );
                } else {
                    res.status(OKAY_STATUS_CODE).send(
                        items.sort((prev, next) => prev.data[DEFAULT_LOCALE].date - next.data[DEFAULT_LOCALE].date)
                    );
                }
            })
            .catch(() => {
                res.status(SERVER_ERROR_STATUS_CODE).end();
            });
    } catch (e) {
        res.status(SERVER_ERROR_STATUS_CODE).end();
    }
}
