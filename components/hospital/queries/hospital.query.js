var HospitalModel = require('./../models/hospital.model');
var DepartmentModel = require('./../../department/models/department.model');
var mapHospital = require('./../helpers/mapHospitalReq');

function find(condition) {
    return new Promise((resolve, reject) => {
        HospitalModel.find(condition)
            .populate('city')
            .exec((err, result) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(result);
                }
            })
    })
}

function insert(hospitalDetail) {
    return new Promise((resolve, reject) => {
        var newHospital = new HospitalModel;
        mapHospital(newHospital, hospitalDetail);
        newHospital.save((err, saved) => {
            if (err) {
                reject(err);
            } else {
                resolve(saved);
            }
        })
    })
}

module.exports = {
    find,
    insert

}