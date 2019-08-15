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
}

function createNewHospital(req, res, next) {
    var data = req.body;
    console.log(data);
    deptQuery.addDept(data.department)
        .then((added) => {
            console.log('dept added', added);
            res.send(200);
            // return hospitalQuery.insert(data)
        })
        //     .then((created) => {
        //         res.status(200).json(created);
        //     })
        .catch((err) => {
            return next(err);
        })
}

module.exports = {
    getAllHospital,
    createNewHospital,

}