var HospitalModel = require('./../models/hospital.model');
var DepartmentModel = require('./../../department/models/department.model');
var mapHospital = require('./../helpers/mapHospitalReq');

function find(condition) {
    return new Promise((resolve, reject) => {
        HospitalModel.find(condition)
            .exec((err, result) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(result);
                }
            })
    })
}

function insert(data) {
    return new Promise((resolve, reject) => {
        var newHospital = new HospitalModel;
        mapHospital(data, newHospital);

    })
}

module.exports = {
    find,

}