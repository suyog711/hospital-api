var DeptModel = require('./../models/department.model');
var mapDept = require('./../helpers/mapDepartmentReq');

function findDept(condition, cb) {
    DeptModel.find(condition)
        .exec((err, dept) => {
            if (err) {
                cb(err);
            } else {
                cb(null, dept);
            }
        })
}

function addDept(department) {
    console.log(department);

    return new Promise((resolve, reject) => {
        // var newDept = new DeptModel;
        // mapDept(newDept, deptDetail);
        // newDept.save((err, saved) => {
        //     if (err) {
        //         reject(err);
        //     } else {
        //         resolve(saved);
        //     }
        // });
    });
}

module.exports = {
    findDept,
    addDept,
}