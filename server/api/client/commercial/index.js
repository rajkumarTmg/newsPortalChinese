import express from 'express';

import getItems from './services/getItems';
import getCommercialForPages from './services/getCommercialForPages';
import getCommercialForCategories from './services/getCommercialForCategories';
import getCommercialForArticle from './services/getCommercialForArticle';

const router = express.Router();

router.route('/')
    .get(getItems);

router.route('/getCommercialForPages')
    .get(getCommercialForPages);

router.route('/getCommercialForCategories')
    .get(getCommercialForCategories);

router.route('/getCommercialForArticle')
    .get(getCommercialForArticle);

export default router;
