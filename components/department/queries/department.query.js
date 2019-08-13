var deptModel = require('./../models/department.model');
var mapDept = require('./../helpers/mapDepartmentReq');

function findDept(condition, cb) {
    deptModel.find(condition)
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