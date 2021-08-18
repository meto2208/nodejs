const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: ['Name is a required field']
    },
    surname: {
        type: String,
        required: ['Surname is a required field']
    },
    email: {
        type: String,
        required: ['Email is a required field']
    },
    address: {
        type: String,
        required: ['Address i a required field']
    }
});

module.exports = mongoose.model('user', userSchema);
