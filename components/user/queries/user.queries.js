var mapUser = require('./../helper/mapUserReq');
var UserModel = require('./../models/user.model');

function find(condition) {
    return new Promise((resolve, reject) => {
        UserModel.find(condition)
            .exec((err, user) => {
                if (err) {
                    reject(err);
                }
                resolve(user);
            })
    })
};

function insert(userDetails) {
    return new Promise((resolve, reject) => {
        var newUser = new UserModel;
        mapUser(newUser, userDetails);
        newUser.save((err, saved) => {
            if (err) {
                reject(err);
            }
            resolve(saved);
        })
    })
};

function update(id, userDetails) {
    return new Promise((resolve, reject) => {
        UserModel.findById(id, (err, user) => {
            if (err) {
                reject(err);
            }
            if (user) {
                mapUser(user, userDetails);
                user.save((err, updated) => {
                    if (err) {
                        reject(err);
                    }
                    resolve(updated);
                })
            } else {
                reject({
                    message: 'User Not Found'
                })
            }
        })
    })
};

function remove(id) {
    return new Promise((resolve, reject) => {
        UserModel.findById(id, (err, user) => {
            if (err) reject(err);
            if (user) {
                user.remove((err, deleted) => {
                    if (err) {
                        reject(err);
                    }
                    resolve(deleted);
                })
            } else {
                reject({
                    message: 'User Not Found'
                });
            }
        })
    })
};

module.exports = {
    find,
    insert,
    update,
    remove,
}