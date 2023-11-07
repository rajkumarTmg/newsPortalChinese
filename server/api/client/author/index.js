import express from 'express';

import getItems from './services/getItems';

const router = express.Router();

router.route('/')
    .get(getItems);

export default router;
