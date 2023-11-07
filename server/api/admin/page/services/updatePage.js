import { OKAY_STATUS_CODE, SERVER_ERROR_STATUS_CODE } from '../../../../constants';

import savePage from '../../../client/page/queries/savePage';
import getPageByPageId from '../../../client/page/queries/getPageByPageId';
import editPage from '../../../client/page/queries/editPage';

export default function updatePage (req, res) {
    const page = req.body;
    const { pageId } = req.params;
    const now = Date.now();

    getPageByPageId(pageId)
        .then(oldPage => {
            (
                oldPage
                    ? editPage(pageId, {
                        updatedAt: now,
                        data: {
                            ...oldPage.data,
                            ...page
                        }
                    })
                    : savePage({ data: page, pageId, createdAt: now, updatedAt: now })
            )
                .then(page => {
                    res.status(OKAY_STATUS_CODE).send(page);
                })
                .catch(() => {
                    res.status(SERVER_ERROR_STATUS_CODE).end();
                });
        })
        .catch(() => {
            res.status(SERVER_ERROR_STATUS_CODE).end();
        });
}
