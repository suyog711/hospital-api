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


module.exports = {
    findDept,
}