var bcrypt = require('bcryptjs');
var salt = require('./../../../config/config').bcryptSalt;

module.exports = (newUser, userDetails) => {
    if (userDetails.name)
        newUser.name = userDetails.name;
    if (userDetails.username)
        newUser.username = userDetails.username;
    if (userDetails.password)
        newUser.password = bcrypt.hashSync(userDetails.password, salt);
    if (userDetails.email)
        newUser.email = userDetails.email;
    if (userDetails.gender)
        newUser.gender = userDetails.gender;
    if (userDetails.role)
        newUser.role = userDetails.role;
    if (userDetails.activeStatus)
        newUser.activeStatus = userDetails.activeStatus;
}