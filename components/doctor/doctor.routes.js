var router = require('express').Router();
var doctorController = require('./controllers/doctor.ctrl');

router.route('/')
    .get(doctorController.getAllDoctor)
    .post(doctorController.createDoctor)

router.route('/:doctorId')
    .get(doctorController.getDoctorById)
    .put(doctorController.updateDoctor)

router.route('/hospital/:hospitalId')
    .get(doctorController.getDoctorsOfHospital)

router.route('/department/:departmentId')
    .get(doctorController.getDoctorsOfDepartment)


router.route('/hospital/:hospitalId/department/:departmentId')
    .get(doctorController.getDoctorsOfHospitalDepartment)


module.exports = router;