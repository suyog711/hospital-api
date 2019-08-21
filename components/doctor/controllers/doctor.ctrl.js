var doctorQueries = require('./../queries/doctor.queries');

function getAllDoctor(req, res, next) {
    var condition = {};
    doctorQueries.find(condition)
        .then((doctor) => {
            res.status(200).json(doctor);
        })
        .catch((err) => {
            return next(err);
        })
};

function getDoctorById(req, res, next) {
    var condition = { _id: req.params.doctorId };
    doctorQueries.find(condition)
        .then((doctor) => {
            res.status(200).json(doctor);
        })
        .catch((err) => {
            return next(err);
        })
};

function getDoctorsOfHospital(req, res, next) {
    console.log(req.params.hospitalId);
    var condition = {
        hospitals: {
            "$elemMatch": {
                hospital: req.params.hospitalId
            }

        }
    };
    doctorQueries.find(condition)
        .then((doctor) => {
            res.status(200).json(doctor);
        })
        .catch((err) => {
            return next(err);
        })
};

function getDoctorsOfDepartment(req, res, next) {
    var condition = {
        hospitals: {
            "$elemMatch": {
                department: req.params.departmentId
            }
        }
    };
    doctorQueries.find(condition)
        .then((doctor) => {
            res.status(200).json(doctor);
        })
        .catch((err) => {
            return next(err);
        })
};

function getDoctorsOfHospitalDepartment(req, res, next) {
    var condition = {
        hospitals: {
            "$elemMatch": {
                hospital: req.params.hospitalId,
                department: req.params.departmentId
            }
        }
    };
    doctorQueries.find(condition)
        .then((doctor) => {
            res.status(200).json(doctor);
        })
        .catch((err) => {
            return next(err);
        })
};

function createDoctor(req, res, next) {
    var data = req.body;
    doctorQueries.create(data)
        .then((saved) => {
            res.status(200).json(saved);
        })
        .catch((err) => {
            return next(err);
        })
};

function updateDoctor(req, res, next) {
    var data = req.body;
    doctorQueries.update(req.params.doctorId, data)
        .then((updated) => {
            res.status(200).json(updated);
        })
        .catch((err) => {
            return next(err);
        })

};



module.exports = {
    getAllDoctor,
    getDoctorById,
    getDoctorsOfDepartment,
    getDoctorsOfHospital,
    getDoctorsOfHospitalDepartment,
    createDoctor,
    updateDoctor,
}