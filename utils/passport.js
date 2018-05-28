const passport = require('passport'),
      jwt = require('jsonwebtoken'),
      bcrypt = require('bcryptjs'),
      BearerStrategy = require('passport-http-bearer').Strategy,
      User = require('../models/User');

passport.use(
  new BearerStrategy((token, cb) => {
    jwt.verify(token, 'secret', function(err, decoded) {
      if (err) return cb(err);
      User.findById(
        decoded.id,
        (err, user) => {
          if (err) { return cb(err); }
          cb(null, user);
        });
    });
  })
);

module.exports = passport;
