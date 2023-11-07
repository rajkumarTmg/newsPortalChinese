import express from 'express';

import adminAuthentication from '../../../middlewares/adminAuthentication';

import getItems from './services/getItems';

const router = express.Router();

router.use(adminAuthentication);

router.route('/')
    .get(getItems);

export default router;
