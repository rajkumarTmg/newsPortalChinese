import express from 'express';

import saveSubscription from './controllers/saveSubscription';
import verifySubscriptionToken from './controllers/verifySubscriptionToken';

const router = express.Router();

router.route('/')
    .post(saveSubscription);

router.route('/verify/token')
    .post(verifySubscriptionToken);

export default router;
