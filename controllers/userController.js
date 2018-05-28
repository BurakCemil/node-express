const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs'),
      jwt = require('jsonwebtoken');

const User = require('../models/User');

exports.register = (req, res) => {
  console.log(req.body);
  const hashedPassword = bcrypt.hashSync(req.body.password, 8);
  User.create({
    fullName : req.body.fullName,
    email : req.body.email,
    username: req.body.username,
    password : hashedPassword
  })
    .then(user => {
      return res.status(200).send({ user: user });
    })
    .catch(err => {
      console.log(err);
      return res.status(500).send("There was a problem registering the user.");
    });
};

exports.auth = (req, res) => {
  User.findOne(
    { 'username': req.body.username },
    '_id username fullName email password createdAt',
    (err, user) => {
      if (err) { return res.status(500).send(err); }
      if (!user) { return res.status(500).send("User cannot be found."); }

      // check password if user is found
      bcrypt.compare(req.body.password, user.password)
        .then(bcryptRes => {
          if (!bcryptRes) { return res.status(500).send("Wrong password.")}
          if (bcryptRes) {
            const token = jwt.sign({ id: user._id }, 'secret', {
              expiresIn: 86400 // expires in 24 hours
            });

            const userResponse = {
              _id: user._id,
              username: user.username,
              fullName: user.fullName,
              email: user.email,
              createdAt: user.createdAt
            };

            return res.status(200).send({ user: userResponse, token: token });
          }
        })
        .catch(bcryptErr => {
          return res.status(500).send("Something went wrong with bcrypt.");
        });
    });
};

exports.test = (req, res) => {
  return res.status(200).send({ test: true });
};
