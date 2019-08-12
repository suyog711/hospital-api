var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var DepartmentSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true
    }
})

var DepartmentModel = mongoose.model('departments', DepartmentSchema);
module.exports = DepartmentModel;