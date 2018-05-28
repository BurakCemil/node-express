const passport = require('passport'),
      jwt = require('jsonwebtoken'),
      bcrypt = require('bcryptjs'),
      BearerStrategy = require('passport-http-bearer').Strategy,
      User = require('../models/User');

passport.use(new BearerStrategy(function (token, cb) {
  jwt.verify(token, secret, function(err, decoded) {
    if (err) return cb(err);
    var user = users[decoded.id];
    return cb(null, user ? user : false);
  });
}));

module.exports = passport;
