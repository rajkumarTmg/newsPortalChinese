import express from 'express';

import getArticles from './services/getArticles';
import getArticlesInCategory from './services/getArticlesInCategory';
import getArticlesInCategoryByAlias from './services/getArticlesInCategoryByAlias';
import getPopularArticlesInCategory from './services/getPopularArticlesInCategory';
import getArticlesRelated from './services/getArticlesRelated';
import getArticlesInSubcategory from './services/getArticlesInSubcategory';
import getArticlesInSubcategoryByAlias from './services/getArticlesInSubcategoryByAlias';
import getCategories from './services/getCategories';
import getArticle from './services/getArticle';
import getArticleById from './services/getArticleById';
import getArticlesByIds from './services/getArticlesByIds';
import getArticlesByIdsFeatured from './services/getArticlesByIdsFeatured';
import getArticlesSearched from './services/getArticlesSearched';
import getArticlesDiscussed from './services/getArticlesDiscussed';
import getArticlesFeed from './services/getArticlesFeed';
import manageView from './services/manageView';
import manageShare from './services/manageShare';
import getLastYearArticles from './services/getLastYearArticles';

const router = express.Router();

router.route('/')
    .get(getArticles);

router.route('/getbycategory')
    .get(getArticlesInCategory);

router.route('/getbycategoryalias')
    .get(getArticlesInCategoryByAlias);

router.route('/getbycategory/popular')
    .get(getPopularArticlesInCategory);

router.route('/getbysubcategory')
    .get(getArticlesInSubcategory);

router.route('/getbysubcategoryalias')
    .get(getArticlesInSubcategoryByAlias);

router.route('/getrelated')
    .get(getArticlesRelated);

router.route('/getbyalias')
    .get(getArticle);

router.route('/getbyid')
    .get(getArticleById);

router.route('/getbyids')
    .get(getArticlesByIds);

router.route('/getbyidsfeatured')
    .get(getArticlesByIdsFeatured);

router.route('/category')
    .get(getCategories);

router.route('/search')
    .get(getArticlesSearched);

router.route('/discussed')
    .get(getArticlesDiscussed);

router.route('/feed')
    .get(getArticlesFeed);

router.route('/view')
    .put(manageView);

router.route('/share')
    .put(manageShare);

router.route('/last-year')
    .get(getLastYearArticles);

export default router;
