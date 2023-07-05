import passportLocal from 'passport-local';
import User from '../models/User';

const LocalStrategy = passportLocal.Strategy;

module.exports = (passport: any) => {
    passport.use("local-signup", new LocalStrategy({
        usernameField : 'username',
        passwordField : 'password',
        passReqToCallback : true
    },
    async (req, username, password, done) => {
        try {
            const userExists = await User.findOne({ Username: username });
            if (userExists) {
                return done(null, false);
            }
            const user = await User.create({
                Username: username,
                Password: password,
                Name: req.body.name
            });
            return done(null, user);
        } catch (error) {
            done(error);
        }
    }));

    passport.use("local-signin", new LocalStrategy({ 
        usernameField: "username" 
    }, 
    async (username, password, done) => {
        try {
            const user = await User.findOne({ Username: username });
            if (!user) return done(null, false, { message: `Username ${username} not found.` });
            const isMatch = await user.matchPassword(password);
            if (!isMatch)
                return done(null, false, { message: "Invalid username or password." });
            return done(null, user);
        } catch (error) {
            return done(error, false);
        }
    }));

    passport.serializeUser((user: any, done: any) => {
        done(null, user.id);
    });

    passport.deserializeUser((id: any, done: any) => {
        User.findById(id, (err: NativeError, user: any) => {
            done(err, user);
        });
    });

};

// const initSignup = (passport: any) => { passport.use("local-signup", new LocalStrategy({
//         usernameField : 'username',
//         passwordField : 'password',
//         passReqToCallback : true
//     },
//     async (req, username, password, done) => {
//         try {
//             const userExists = await User.findOne({ Username: username });
//             if (userExists) {
//                 return done(null, false);
//             }
//             const user = await User.create({
//                 Username: username,
//                 Password: password,
//                 Name: req.body.name
//             });
//             return done(null, user);
//         } catch (error) {
//             done(error);
//         }
//     }
// ))};

// const initSignin = (passport: any) => { passport.use("local-signin", new LocalStrategy(
//     { usernameField: "username" }, async (username, password, done) => {
//         console.log("HELLO");
//         try {
//             const user = await User.findOne({ Username: username });
//             if (!user) return done(null, false, { message: `Username ${username} not found.` });
//             const isMatch = await user.matchPassword(password);
//             if (!isMatch)
//                 return done(null, false, { message: "Invalid username or password." });
//             return done(null, user);
//         } catch (error) {
//             return done(error, false);
//         }
//     }
// ))};

// const serializeUser = (passport: any) => { 
//     passport.serializeUser((user: any, done: any) => done(null, user.id));
// };

// const deserializeUser = (passport: any) => { 
//     passport.deserializeUser((id: any, done: any) => {
//         User.findById(id, (err: NativeError, user: any) => done(err, user));
//     });
// };

// const initPassport = (passport: any) => {
//     initSignin(passport);
//     initSignup(passport);
//     serializeUser(passport);
//     deserializeUser(passport);
// };

// const passportConfig = {
//     initPassport,
// };
  
// export default passportConfig;