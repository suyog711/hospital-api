var hospitalQuery = require('./../queries/hospital.query')
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
    hospitalQuery.insert(data)
        .then((created) => {
            res.status(200).json(created);
        })
        .catch((err) => {
            return next(err);
        })
}

module.exports = {
    getAllHospital,
    createNewHospital,

}