import express from 'express';
import authController from '../controllers/authentication';

const router = express.Router();

router.post('/signup', authController.postSignup);
router.post('/signin', authController.postSignin);

export = router;