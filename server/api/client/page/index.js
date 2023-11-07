import express from 'express';

import getPages from './services/getPages';
import getPageById from './services/getPageById';
import getWeather from './services/getWeather';

const router = express.Router();

router.route('/')
    .get(getPages);

router.route('/id')
    .get(getPageById);

router.route('/weather')
    .get(getWeather);

export default router;
