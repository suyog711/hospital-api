var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var CitySchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true
    }
})

var CityModel = mongoose.model('citys', CitySchema);
module.exports = CityModel;