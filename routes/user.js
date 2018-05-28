const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
router.use(bodyParser.urlencoded({ extended: false }));
router.use(bodyParser.json());
const passport = require('passport');

const userController = require('../controllers/userController');
router.post('/register', userController.register);
router.post('/auth', userController.auth);
router.get('/test', passport.authenticate('bearer', { session: false }), userController.test);

module.exports = router;
