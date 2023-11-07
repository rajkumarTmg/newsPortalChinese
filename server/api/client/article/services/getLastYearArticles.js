import { OKAY_STATUS_CODE, SERVER_ERROR_STATUS_CODE } from '../../../../constants';
import getItems from '../queries/getItems';

import subMonths from 'date-fns/subMonths';

export default function (req, res) {
    try {
        const oneYearAgo = +subMonths(new Date(), 6);

        getItems()
            .then(items => {
                const itemsByLastYear = items.reduce((results, item) => {
                    if (item.createdAt < oneYearAgo) return results;

                    results.push({
                        _id: item._id,
                        alias: item.data.en.alias
                    });

                    return results;
                }, []);

                res.status(OKAY_STATUS_CODE).send(itemsByLastYear);
            })
            .catch(() => {
                res.status(SERVER_ERROR_STATUS_CODE).end();
            });
    } catch (e) {
        res.status(SERVER_ERROR_STATUS_CODE).end();
    }
}
