import express from 'express';

import adminAuthentication from '../../../middlewares/adminAuthentication';

import getItems from './services/getItems';
import getItemsPaginated from './services/getItemsPaginated';
import saveItem from './services/saveItem';
import editItem from './services/editItem';
import deleteItem from './services/deleteItem';

import getCategories from './services/getCategories';
import saveCategory from './services/saveCategory';
import deleteCategory from './services/deleteCategory';
import editCategory from './services/editCategory';
import sortCategories from './services/sortCategories';

import getSubcategories from './services/getSubcategories';
import saveSubcategory from './services/saveSubcategory';
import deleteSubcategory from './services/deleteSubcategory';
import editSubcategory from './services/editSubcategory';
import sortSubcategories from './services/sortSubcategories';
import searchArticles from './services/searchArticles';
import getArticlesByName from './services/getArticlesByName';
import getArticleZhen from './services/getArticleZhen';
import getArticlesByIds from './services/getArticlesByIds';
import getComments from './services/getArticleComments';
import deleteComments from './services/deleteArticleComments';
import approveComments from './services/approveArticleComments';
import editCommentItem from './services/editCommentItem';
import getArticlePreview from './services/getArticlePreview';

import getTextTranslated from './services/getTextTranslated';
import editItemsCategories from './services/editItemsCategories';

const router = express.Router();

router.route('/getArticlePreview').get(getArticlePreview);

router.use(adminAuthentication);

router.route('/')
    .get(getItems)
    .post(saveItem)
    .delete(deleteItem);

router.route('/paginated')
    .get(getItemsPaginated);

router.route('/paginated/name')
    .get(getArticlesByName);

router.route('/:id')
    .put(editItem);

router.route('/category')
    .get(getCategories)
    .post(saveCategory)
    .delete(deleteCategory);

router.route('/category/sort')
    .post(sortCategories);

router.route('/category/:id')
    .put(editCategory);

router.route('/subcategory/:categoryId')
    .get(getSubcategories)
    .post(saveSubcategory)
    .delete(deleteSubcategory);

router.route('/subcategory/:categoryId/sort')
    .post(sortSubcategories);

router.route('/subcategory/:categoryId/:id')
    .put(editSubcategory);

router.route('/searchArticle').get(searchArticles);

router.route('/zhengjian')
    .get(getArticleZhen);

router.route('/getbyids')
    .get(getArticlesByIds);

router.route('/comments')
    .get(getComments);

router.route('/comments/delete')
    .put(deleteComments);

router.route('/comments/approve')
    .put(approveComments);

router.route('/comments/edit/:id/:commentId')
    .put(editCommentItem);

router.route('/translate')
    .post(getTextTranslated);

router.route('/updateCategory')
    .post(editItemsCategories);

export default router;
