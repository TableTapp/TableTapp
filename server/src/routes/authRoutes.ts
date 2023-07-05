import express from 'express';
import passport from 'passport';
import authController from '../controllers/authController';

const router = express.Router();

router.post('/signup', passport.authenticate('local-signup', {
    successRedirect: '/',
    failureRedirect: '/signup',
    failureFlash: true
}));
router.post('/signin', authController.postSignin);

export = router;