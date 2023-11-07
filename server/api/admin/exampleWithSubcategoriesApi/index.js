import express from 'express';

import adminAuthentication from '../../../middlewares/adminAuthentication';

import getItems from './services/getItems';
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

const router = express.Router();

router.use(adminAuthentication);

router.route('/')
    .get(getItems)
    .post(saveItem)
    .delete(deleteItem);

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

export default router;
