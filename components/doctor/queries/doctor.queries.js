
/*
task
remove hospital from doctor
change dept
get doctor by hospital
get doc by id
get all doc 
*/

var DoctorModel = require('./../models/doctor.model');
var mapDoctor = require('./../../doctor/helpers/mapDoctorReq');

function find(condition) {
    return new Promise((resolve, reject) => {
        console.log('condition', condition);
        DoctorModel.find(condition)
            .populate('hospitals.hospital hospitals.department', 'name')
            .exec((err, doctor) => {
                if (err) reject(err);
                resolve(doctor);
            })
    });
}

function create(data) {
    return new Promise((resolve, reject) => {
        var newDoctor = new DoctorModel;
        mapDoctor(newDoctor, data);
        newDoctor.save((err, saved) => {
            if (err) reject(err);
            resolve(saved);
        })
    })
}

function update(id, data) {
    return new Promise((resolve, reject) => {
        DoctorModel.findById(id, (err, doctor) => {
            if (err) reject(err);
            if (doctor) {
                mapDoctor(doctor, data);
                doctor.save((err, updated) => {
                    if (err) reject(err);
                    resolve(updated);
                })
            } else {
                reject({
                    message: 'Doctor Not Found'
                })
            }
        })
    })
}

function removeDoctor(id) {
    return new Promise((resolve, reject) => {
        DoctorModel.findById(id, (err, doctor) => {
            if (err) reject(err);
            if (doctor) {
                doctor.remove((err, deleted) => {
                    if (err) {
                        reject(err);
                    }
                    resolve(deleted);
                })
            } else {
                reject({
                    message: 'Doctor Not Found'
                });
            }
        })
    })
};

module.exports = {
    find,
    create,
    update,
    removeDoctor,


}