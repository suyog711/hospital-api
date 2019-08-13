var express = require('express');
var router = express.Router();
var deptCtrl = require('./controllers/dept.ctrl');


router.route('/')
    .get(deptCtrl.getAllDept)



module.exports = router;