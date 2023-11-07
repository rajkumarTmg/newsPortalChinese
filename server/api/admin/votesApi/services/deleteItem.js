import { OKAY_STATUS_CODE, SERVER_ERROR_STATUS_CODE } from '../../../../constants';

import getItems from '../../../client/votes/queries/getItems';
import deleteItems from '../../../client/votes/queries/deleteItems';
import schedule from 'node-schedule';

export default function (req, res) {
    try {
        const { ids } = req.body;

        return deleteItems(ids)
            .then(() => {
                ids.forEach(id => {
                    const job = schedule.scheduledJobs[id.toString()];
                    if (job) {
                        job.cancel();
                    }
                });
                return getItems()
                    .then(items => {
                        res.status(OKAY_STATUS_CODE).send(items);
                    });
            })
            .catch(() => {
                res.status(SERVER_ERROR_STATUS_CODE).end();
            });
    } catch (e) {
        res.status(SERVER_ERROR_STATUS_CODE).end();
    }
}
