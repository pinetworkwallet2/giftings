
const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: [true, 'Email must be unique']
    },
    fullName: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true
    }
})

const User = mongoose.model('User', userSchema)

module.exports = User