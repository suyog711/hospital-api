var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var HospitalSchema = new Schema({
    hospital: {
        type: Schema.Types.ObjectId,
        ref: 'hospitals'
    },
    department: {
        type: Schema.Types.ObjectId,
        ref: 'departments'
    }
}, { _id: false })

var DoctorSchema = new Schema({
    name: {
        type: String,
        required: true,
        lowercase: true,
        unique: true
    },
    nmcNo: {
        type: Number,
        required: true,
        unique: true
    },
    hospitals: [HospitalSchema],
    createdBy: {
        type: Schema.Types.ObjectId,
        ref: 'users'
    },
    updatedBy: {
        type: Schema.Types.ObjectId,
        ref: 'users'
    }
}, {
        timestamps: true
    })

var DoctorModel = mongoose.model('doctors', DoctorSchema);
module.exports = DoctorModel;