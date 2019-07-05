var mongoose = require('mongoose');
var config = require('./config');

mongoose.connect(config.dbUrl + '/' + config.dbName, (err, done) => {
    if (err) {
        console.log('mongodb connection failed');
    } else {
        console.log('mongodb connection successfull');
    }
})