var HospitalModel = require('./../models/hospital.model');
var DepartmentModel = require('./../../department/models/department.model');
var mapHospital = require('./../helpers/mapHospitalReq');

function find(condition) {
    return new Promise((resolve, reject) => {
        HospitalModel.find(condition)
            .populate('city departments')
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

function update(id, hospitalDetail) {
    return new Promise((resolve, reject) => {
        HospitalModel.findById({ _id: id })
            .exec((err, hospital) => {
                if (err) {
                    reject(err);
                }
                if (hospital) {
                    mapHospital(hospital, hospitalDetail);
                    hospital.save((err, updated) => {
                        if (err) {
                            reject(err);
                        }
                        resolve(updated);
                    });
                } else {
                    reject({
                        message: 'Hospital not found'
                    })
                }
            })
    })
}

module.exports = {
    find,
    insert,
    update

}