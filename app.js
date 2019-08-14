var express = require('express');
var path = require('path');
var logger = require('morgan');
var config = require('./config/config');
var cityRoute = require('./components/city/city.routes');
var deptRoute = require('./components/department/dept.routes');
var hospRoute = require('./components/hospital/hospital.routes');
require('./config/db.config');

var app = express();
app.listen(config.port, function (err, done) {
    if (err) {
        console.log('error in listening');
        return;
    }
    console.log('listening in port: ', config.port);
})

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/city', cityRoute);
app.use('/department', deptRoute);
app.use('/hospital', hospRoute);

app.use((req, res, next) => {
    return next({
        message: 'not found',
        status: 404
    })
});

app.use((err, req, res, next) => {
    res.status(err.status || 400).json({
        status: err.status || 400,
        message: err.message
    });
})

