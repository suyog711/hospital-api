var hospitalQuery = require('./../queries/hospital.query');
var deptQuery = require('./../../department/queries/department.query');

function getAllHospital(req, res, next) {
    var condition = {};
    hospitalQuery.find(condition)
        .then((hosp) => {
            res.status(200).json(hosp);
        })
        .catch((err) => {
            return next(err);
        })
};

function getHospitalById(req, res, next) {
    var condition = { _id: req.params.id };
    hospitalQuery.find(condition)
        .then((hosp) => {
            res.status(200).json(hosp)
        })
        .catch((err) => {
            return next(err)
        })
}

function createNewHospital(req, res, next) {
    var data = req.body;
    deptQuery.addDeptToHospital(data)
        .then((newHospital) => {
            return hospitalQuery.insert(newHospital)
        })
        .then((created) => {
            res.status(200).json(created);
        })
        .catch((err) => {
            return next(err);
        })
}

function updateHospital(req, res, next) {
    var data = req.body;
    deptQuery.addDeptToHospital(data)
        .then((updatedHospital) => {
            return hospitalQuery.update(req.params.id, updatedHospital)
        })
        .then((updated) => {
            res.status(200).json(updated);
        })
        .catch((err) => {
            return next(err);
        })
}

module.exports = {
    getAllHospital,
    getHospitalById,
    createNewHospital,
    updateHospital
}