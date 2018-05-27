const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
router.use(bodyParser.urlencoded({ extended: false }));
router.use(bodyParser.json());
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const User = require('./models/User');

router.post('/register', (req, res) => {
  console.log(req.body);
  const hashedPassword = bcrypt.hashSync(req.body.password, 8);
  User.create({
    first_name : req.body.firstName,
    last_name : req.body.lastName,
    email : req.body.email,
    password : hashedPassword
  })
    .then(user => {
      const token = jwt.sign({ id: user._id }, config.secret, {
        expiresIn: 86400 // expires in 24 hours
      });
      res.status(200).send({ auth: true, token: token, user: user });
    })
    .catch(err => {
      return res.status(500).send("There was a problem registering the user.")
    })
});

router.get('/test', (req, res) => {
  res.status(200).send({ test: true });
});

module.exports = router;
