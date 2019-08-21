var express = require('express');
var path = require('path');
var logger = require('morgan');
var config = require('./config/config');
var cityRoute = require('./components/city/city.routes');
var departmentRoute = require('./components/department/dept.routes');
var hospitalRoute = require('./components/hospital/hospital.routes');
var userRoute = require('./components/user/user.routes');
var authRoute = require('./components/auth/auth.routes');
var doctorRoute = require('./components/doctor/doctor.routes');

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
app.use('/department', departmentRoute);
app.use('/hospital', hospitalRoute);
app.use('/user', userRoute);
app.use('/auth', authRoute);
app.use('/doctor', doctorRoute);

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

