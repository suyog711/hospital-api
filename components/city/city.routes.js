var express = require('express');
var router = express.Router();
var CityModel = require('./models/city.model');

router.route('/')
    .get((req, res, next) => {
        var condition = {};
        CityModel.find(condition)
            .exec(function (err, city) {
                if (err) {
                    return next(err);
                } else {
                    res.status(200).json(city);
                }
            })
    })
    .post((req, res, next) => {
        var city = new CityModel;
        city.name = req.body.city;
        city.save((err, done) => {
            if (err) {
                return next(err);
            }
            res.status(200).json(done);
        })

    });

module.exports = router;