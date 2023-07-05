import passport from 'passport';
import { NextFunction, Request, Response } from 'express';

const postSignup = (req: Request, res: Response, next: NextFunction) => { 
    passport.authenticate('local-signup', {
        successRedirect: '/',
        failureRedirect: '/signup',
        failureFlash: true
    }
)};

const postSignin = passport.authenticate('local-signin', {
    successRedirect: '/',
    failureRedirect: '/signin',
    failureFlash: true
});

export default {
    postSignin,
    postSignup
};