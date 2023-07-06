import passport from 'passport';

const postSignup = passport.authenticate('local-signup', {
        successRedirect: '/',
        failureRedirect: '/signup',
        failureFlash: true
    }
);

const postSignin = passport.authenticate('local-signin', {
    successRedirect: '/',
    failureRedirect: '/signin',
    failureFlash: true
});

export default {
    postSignin,
    postSignup
};