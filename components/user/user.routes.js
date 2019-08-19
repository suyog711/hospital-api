var router = require('express').Router();
var userController = require('./controller/user.ctrl');

router.route('/')
    .get(userController.getAllUser)

router.route('/:id')
    .get(userController.getUserById)
    .put(userController.updateUser)
    .delete(userController.deleteUser)

module.exports = router
