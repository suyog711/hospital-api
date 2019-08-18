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

function addDeptToHospital(data) {
    return new Promise((resolve, reject) => {
        var counter = 0;
        var departmentArray = [];
        counter = data.departments.length;
        if (counter == 0) callback();
        data.departments.forEach((item) => {
            if (typeof item.id == 'undefined') {
                DeptModel.find({ name: item.name }, function (err, done) {
                    if (done.length) {
                        departmentArray.push(done[0]._id);
                        counter--;
                        if (counter == 0) {
                            callback();
                        }
                    } else {
                        addDepartment(item.name)
                            .then((id) => {
                                departmentArray.push(id);
                                counter--;
                                if (counter == 0) {
                                    callback();
                                }
                            })
                            .catch((err) => {
                                return next(err);
                            })
                    }
                });
            } else {
                departmentArray.push(item.id);
                counter--;
                if (counter == 0) {
                    callback();
                }
            }
        });
        function callback() {
            data.departments = departmentArray;
            resolve(data);
        };
    });
}


function addDepartment(departmentName) {
    return new Promise((resolve, reject) => {
        var newDept = new DeptModel;
        mapDept(newDept, departmentName);
        newDept.save((err, saved) => {
            if (err) {
                reject(err);
            }
            resolve(saved._id);
        });
    })
}

module.exports = {
    findDept,
    addDeptToHospital,
}