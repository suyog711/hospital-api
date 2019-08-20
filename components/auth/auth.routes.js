var router = require('express').Router();
var userController = require('./controllers/auth.ctrl');

router.route('/login')
    .post(userController.login)

router.route('/register')
    .post(userController.register)

module.exports = router;