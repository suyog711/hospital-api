var jwt = require('jsonwebtoken');
var secretKey = require('./../../../config/config').jwtSecret;
var userQueries = require('./../../user/queries/user.queries');

module.exports = (req, res, next) => {
    if (req.headers['token']) {
        var token = req.headers['token'];
    }
    if (req.headers['authorization']) {
        var token = req.headers['authorization'];
    }
    if (req.headers['x-access-token']) {
        var token = req.headers['x-access-token'];
    }
    if (token) {
        jwt.verify(token, secretKey, (err, verified) => {
            if (err) return next(err);
            userQueries.find({ _id: verified.id })
                .then((user) => {
                    if (user) {
                        req.loggedInUser = user[0];
                        return next();
                    } else {
                        return next({
                            message: 'User Not Found'
                        });
                    }
                })
                .catch((err) => {
                    return next(err);
                })
        })
    } else {
        return next({
            message: 'Token Not Provided.'
        });
    }
}