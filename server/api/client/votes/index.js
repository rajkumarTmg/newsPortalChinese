import express from 'express';

import userAuthentication from '../../../middlewares/userAuthentication';

import getVotesForPages from './services/getVotesForPages';
import getVotesForCategories from './services/getVotesForCategories';
import getVotesForArticle from './services/getVotesForArticle';
import vote from './services/vote';

const router = express.Router();

router.route('/getVotesForPages')
    .get(getVotesForPages);

router.route('/getVotesForCategories')
    .get(getVotesForCategories);

router.route('/getVotesForArticle')
    .get(getVotesForArticle);

router.use(userAuthentication);

router.route('/')
    .post(vote);

export default router;
