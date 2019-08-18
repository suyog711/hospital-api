var router = require('express').Router();
var hospController = require('./controllers/hospital.ctrl');

router.route('/')
    .get(hospController.getAllHospital)
    .post(hospController.createNewHospital)

router.route('/:id')
    .get(hospController.getHospitalById)
    .put(hospController.updateHospital)

module.exports = router;