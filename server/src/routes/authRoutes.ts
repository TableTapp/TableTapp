import express from 'express';
import authController from '../controllers/auth';
import auth from '../middleware/auth';

const router = express.Router();

router.post('/signup', authController.postSignup);
router.post('/signin', authController.postSignin);
router.post('/signout', authController.postSignout);
router.get('/access', auth.getAccessToken);

export = router;