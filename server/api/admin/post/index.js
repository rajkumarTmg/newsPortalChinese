import express from 'express';

import adminAuthentication from '../../../middlewares/adminAuthentication';

import getItems from './services/getItems';
import getItemsPaginated from './services/getItemsPaginated';
import saveItem from './services/saveItem';
import editItem from './services/editItem';
import deleteItem from './services/deleteItem';
import getPostsByName from './services/getPostsByName';
import getPostsByIds from './services/getPostsByIds';
import deleteComments from './services/deletePostComments';
import approveComments from './services/approvePostComments';
import getComments from './services/getPostComments';
import editCommentItem from './services/editCommentItem';

const router = express.Router();

router.use(adminAuthentication);

router.route('/')
    .get(getItems)
    .post(saveItem)
    .delete(deleteItem);

router.route('/paginated')
    .get(getItemsPaginated);

router.route('/paginated/name')
    .get(getPostsByName);

router.route('/getbyids')
    .get(getPostsByIds);

router.route('/:id')
    .put(editItem);

router.route('/comments')
    .get(getComments);

router.route('/comments/delete')
    .put(deleteComments);

router.route('/comments/approve')
    .put(approveComments);

router.route('/comments/edit/:id/:commentId')
    .put(editCommentItem);

export default router;
