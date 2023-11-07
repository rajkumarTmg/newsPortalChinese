import express from 'express';

import adminAuthentication from '../../../middlewares/adminAuthentication';

import upload from './services/upload';

const router = express.Router();

router.use(adminAuthentication);

router.route('/upload')
    .post(upload);

export default router;
