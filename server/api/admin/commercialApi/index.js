import express from 'express';

import adminAuthentication from '../../../middlewares/adminAuthentication';

import getItems from './services/getItems';
import saveItem from './services/saveItem';
import editItem from './services/editItem';
import deleteItem from './services/deleteItem';

const router = express.Router();

router.use(adminAuthentication);

router.route('/')
    .get(getItems)
    .post(saveItem)
    .delete(deleteItem);

router.route('/:id')
    .put(editItem);

export default router;
