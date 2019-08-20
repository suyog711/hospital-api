var jwt = require('jsonwebtoken');

module.exports = (data, secretKey, expTime = false) => {
    var token;
    if (expTime) {
        token = jwt.sign(data, secretKey, {
            expiresIn: '60'
        });
    } else {
        token = jwt.sign(data, secretKey);
    }
    return token;

}