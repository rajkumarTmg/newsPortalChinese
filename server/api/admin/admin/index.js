import express from 'express';

import adminAuthentication from '../../../middlewares/adminAuthentication';

import signIn from './services/signIn';
import getProfile from './services/getProfile';
import changeCredentials from './services/changeCredentials';
import recover from './services/recover';
import checkRecoveryToken from './services/checkRecoveryToken';
import changeRecoveryCredentials from './services/changeRecoveryCredentials';

const router = express.Router();

router.route('/sign-in')
    .post(signIn);

router.route('/recover')
    .get(recover);

router.route('/check-recovery-token')
    .get(checkRecoveryToken);

router.route('/recover-change')
    .post(changeRecoveryCredentials);

router.use(adminAuthentication);

router.route('/profile')
    .get(getProfile);

router.route('/change')
    .post(changeCredentials);

export default router;
