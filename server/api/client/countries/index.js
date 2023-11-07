import express from 'express';

import getCountries from './services/getCountries';

const router = express.Router();

router.route('/')
    .get(getCountries);

export default router;
