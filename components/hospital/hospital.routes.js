var router = require('express').Router();
var hospController = require('./controllers/hospital.ctrl');

router.route('/')
    .get(hospController.getAllHospital)
    .post(hospController.createNewHospital)

module.exports = router;