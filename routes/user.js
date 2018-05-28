const express = require('express'),
      bodyParser = require('body-parser'),
      passport = require('passport');

const router = express.Router();
router.use(bodyParser.urlencoded({ extended: false }));
router.use(bodyParser.json());

const userController = require('../controllers/userController');

router.post('/register', userController.register);
router.post('/auth', userController.auth);
router.get('/test', passport.authenticate('bearer', { session: false }), userController.test);

module.exports = router;
