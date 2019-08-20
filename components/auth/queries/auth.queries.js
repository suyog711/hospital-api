var bcrypt = require('bcryptjs');
var UserModel = require('./../../user/models/user.model');

function login(userDetails) {
    return new Promise((resolve, reject) => {
        UserModel.findOne({ username: userDetails.username })
            .exec((err, user) => {
                if (err) reject(err);
                if (user) {
                    if (!user.activeStatus) {
                        return next({
                            message: "User Not Activated"
                        });
                    }
                    if (bcrypt.compareSync(userDetails.password, user.password)) {
                        resolve(user);
                    } else {
                        reject({
                            message: 'Incorrect Username/Password'
                        });
                    }
                } else {
                    reject({
                        message: 'Incorrect Username/Password'
                    });
                }
            })
    })
}

module.exports = {
    login
}