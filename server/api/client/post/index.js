import express from 'express';

import getPosts from './services/getPosts';
import getPostsInCategory from './services/getPostsInCategory';
import getPostsInCategoryByAlias from './services/getPostsInCategoryByAlias';
import getPostsByArticleAlias from './services/getPostsByArticleAlias';
import getPostsInSubcategory from './services/getPostsInSubcategory';
import getPostsByType from './services/getPostsByType';
import getPost from './services/getPost';
import getPostById from './services/getPostById';
import getPostsByIds from './services/getPostsByIds';
import manageView from './services/manageView';
import manageShare from './services/manageShare';

const router = express.Router();

router.route('/')
    .get(getPosts);

router.route('/getbycategory')
    .get(getPostsInCategory);

router.route('/getbycategoryalias')
    .get(getPostsInCategoryByAlias);

router.route('/getbysubcategory')
    .get(getPostsInSubcategory);

router.route('/getbyarticlealias')
    .get(getPostsByArticleAlias);

router.route('/getbytype')
    .get(getPostsByType);

router.route('/getbyids')
    .get(getPostsByIds);

router.route('/getbyalias')
    .get(getPost);

router.route('/getbyid')
    .get(getPostById);

router.route('/view')
    .put(manageView);

router.route('/share')
    .put(manageShare);

export default router;
