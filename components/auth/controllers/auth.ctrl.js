var authQueries = require('./../queries/auth.queries');
var userQueries = require('./../../user/queries/user.queries');
var generateToken = require('./../helpers/createToken');
var config = require('./../../../config/config');

function login(req, res, next) {
    authQueries.login(req.body)
        .then((user) => {
            res.status(200).json({
                user: user,
                token: generateToken({ id: user._id, name: user.name }, config.jwtSecret)
            });
        })
        .catch((err) => {
            return next(err);
        })
};

function register(req, res, next) {
    userQueries.insert(req.body)
        .then((registered) => {
            res.status(200).json(registered);
        })
        .catch((err) => {
            return next(err);
        })
}

module.exports = {
    login,
    register

}