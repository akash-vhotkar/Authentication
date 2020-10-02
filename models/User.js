const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password1: {
        type: String,
        required: true
    },
    password2: {
        type: String,
        required: true
    },
    Date: {
        type: Date,
        default: Date.now
    }
})
const User = mongoose.model('User', UserSchema);
module.exports = User;