import express from 'express';

import adminAuthentication from '../../../middlewares/adminAuthentication';

import getPageByPageId from './services/getPageByPageId';
import updatePage from './services/updatePage';

const router = express.Router();

router.use(adminAuthentication);

router.route('/:pageId')
    .get(getPageByPageId)
    .post(updatePage);

export default router;
