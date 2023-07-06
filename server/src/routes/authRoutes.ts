import express from 'express';
import authController from '../controllers/auth';

const router = express.Router();

router.post('/signup', authController.postSignup);
router.post('/signin', authController.postSignin);
router.post('/signout', authController.postSignout);

export = router;