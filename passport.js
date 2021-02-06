/* eslint-disable import/named */
import passport from "passport";
import GithubStrategy from "passport-github";
import User from "./models/User";

import { githubLoginCallback } from "./controllers/userController";
import routes from "./routes";

passport.use(User.createStrategy());

passport.use(new GithubStrategy({
    clientID: process.env.GH_ID,
    clientSecret: process.env.GH_SECRET,
    callbackURL: `http://localhost:4000${routes.githubCallBack}`
    },
    githubLoginCallback
));

// old way
passport.serializeUser(function (user, done) {
    done(null, user.id);
});
    
passport.deserializeUser(function (user, done) {
    done(null, user);
});

// passport.serializeUser(User.serializeUser());
// passport.deserializeUser(User.deserializeUser());