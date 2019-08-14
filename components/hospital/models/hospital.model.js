var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var HospitalSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    phoneNumber: {
        type: Number,
        required: true
    },
    website: {
        type: String,
    },
    address: {
        type: String,
        required: true,
    },
    address2: {
        type: String,
    },
    city: {
        type: Schema.Types.ObjectId,
        ref: 'citys'
    },
    departments: [{
        type: Schema.Types.ObjectId,
        ref: 'departments'
    }],
    createdBy: {
        type: Schema.Types.ObjectId,
        ref: 'users'
    },
    updatedBy: {
        type: Schema.Types.ObjectId,
        ref: 'users'
    },
    activeStatus: {
        type: Boolean,
        default: true
    }
}, {
        timestamps: true
    });

var HospitalModel = mongoose.model('hospitals', HospitalSchema);
module.exports = HospitalModel;