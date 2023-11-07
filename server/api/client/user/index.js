import express from 'express';

import getProfile from './controllers/getProfile';
import getLiked from './controllers/getLiked';
import signUp from './controllers/signUp';
import signIn from './controllers/signIn';
import contact from './controllers/contact';
import submit from './controllers/submit';
import forgetPassword from './controllers/forgetPassword';
import forgetPasswordToken from './controllers/forgetPasswordToken';
import verifyEmailToken from './controllers/verifyEmailToken';

import userAuthentication from '../../../middlewares/userAuthentication';
import manageLikeArticle from '../article/services/manageLike';
import manageLikePost from '../post/services/manageLike';
import addCommentArticle from '../article/services/addComment';
import addCommentPost from '../post/services/addComment';
import manageCommentLikeArticle from '../article/services/manageCommentLike';
import manageCommentLikePost from '../post/services/manageCommentLike';

const router = express.Router();

router.route('/signup')
    .post(signUp);

router.route('/signin')
    .post(signIn);

router.route('/contact')
    .post(contact);

router.route('/submit')
    .post(submit);

router.route('/forget')
    .get(forgetPassword);

router.route('/forget/token')
    .post(forgetPasswordToken);

router.route('/verify/token')
    .post(verifyEmailToken);

router.use(userAuthentication);

router.route('/profile')
    .get(getProfile);

router.route('/profile/news/liked')
    .get(getLiked);

router.route('/like/article')
    .put(manageLikeArticle);

router.route('/like/post')
    .put(manageLikePost);

router.route('/comment/article')
    .post(addCommentArticle);

router.route('/comment/post')
    .post(addCommentPost);

router.route('/comment/like/article')
    .put(manageCommentLikeArticle);

router.route('/comment/like/post')
    .put(manageCommentLikePost);

export default router;
