import express from 'express';

import getCities from './services/getCities';

const router = express.Router();

router.route('/')
    .get(getCities);

export default router;
