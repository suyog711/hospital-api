var deptQueries = require('./../queries/department.query');

function getAllDept(req, res, next) {
    var condition = {};
    deptQueries.findDept(condition, (err, dept) => {
        if (err) {
            return next(err);
        }
        res.status(200).json(dept);
    })
};

function createDept(req, res, next) {
    deptQueries.addDept()
}


module.exports = {
    getAllDept,
    createDept,
}