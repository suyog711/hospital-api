var mongoose = require('mongoose')
var Schema = mongoose.Schema

var UserSchema = new Schema(
    {
        name: {
            type: String,
            required: true,
            lowercase: true
        },
        username: {
            type: String,
            required: true,
            unique: true
        },
        password: {
            type: String,
            required: true
        },
        email: {
            type: String,
            unique: true,
            sparse: true
        },
        gender: {
            type: String,
            enum: ['male', 'female', 'others']
        },
        role: {
            type: Number,
            enum: [1, 2], // 1 for admin, 2 for normal user
            default: 2
        },
        updatedBy: String,
        activeStatus: {
            type: Boolean,
            default: true
        }
    },
    {
        timestamps: true
    }
)

var UserModel = mongoose.model('users', UserSchema)
module.exports = UserModel
