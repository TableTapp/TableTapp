import express from 'express';
import authController from '../controllers/authController';

const router = express.Router();

router.post('/signup', authController.postSignup);
router.post('/signin', authController.postSignin);

export = router;

// passport.authenticate('local-signup', {
//     successRedirect: '/',
//     failureRedirect: '/signup',
//     failureFlash: true
// })