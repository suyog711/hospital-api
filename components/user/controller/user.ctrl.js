var userQueries = require('./../queries/user.queries');

function getAllUser(req, res, next) {
    var condition = {};
    userQueries.find(condition)
        .then((users) => {
            res.status(200).json(users);
        })
        .catch((error) => {
            next(error)
        })
}

function getUserById(req, res, next) {
    var condition = { _id: req.params.id };
    userQueries.find(condition)
        .then((user) => {
            res.status(200).json(user);
        })
        .catch((error) => {
            next(error)
        })
}

function createUser(req, res, next) {
    var data = req.body;
    userQueries.insert(data)
        .then((saved) => {
            res.status(200).json(saved);
        })
        .catch((error) => {
            next(error)
        })
}

function updateUser(req, res, next) {
    var data = req.body;
    var id = req.params.id;
    userQueries.update(id, data)
        .then((updated) => {
            res.status(200).json(updated);
        })
        .catch((error) => {
            next(error)
        })
}

function deleteUser(req, res, next) {
    userQueries.remove(req.params.id)
        .then((deleted) => {
            res.sratus(200).json(deleted);
        })
        .catch((err) => {
            return next(err);
        })
}

module.exports = {
    getAllUser,
    getUserById,
    createUser,
    updateUser,
    deleteUser
}