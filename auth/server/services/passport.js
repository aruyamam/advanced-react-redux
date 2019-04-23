const passport = require('passport');
const JwtStrategy = require('passport-jwt').Strategy;
const { ExtractJwt } = require('passport-jwt');
const User = require('../models/user');
const config = require('../config');

// Setup options for JWT Strategy
const jwtOptions = {
   jwtFromRequest: ExtractJwt.fromHeader('authorization'),
   secretOrKey: config.secret
};

// Create JWT strategy
const jwtLogin = new JwtStrategy(jwtOptions, async function(payload, done) {
   // See if the user ID in the payload exists in our database
   // If it does, call 'done' with that other
   // otherwise, call done without a user object
   try {
      const user = await User.findById(payload.sub);

      if (user) {
         done(null, user);
      } else {
         done(null, false);
      }
   } catch (err) {
      return done(err, false);
   }
});

// Tell passport to use this strategy
passport.use(jwtLogin);
