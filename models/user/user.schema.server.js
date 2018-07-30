var monogoose = require('mongoose');
var userSchema = monogoose.Schema({
    username: String,
    password: String,
    firstName: String,
    lastName: String,
    email: String,
    role: String,
    isAdmin: { type: Boolean, default: false },
    lastLogin: { type: Date, default: Date.now },
    topic: String,
    dateOfBirth: {type: Date},
    status: String
}, {collection: 'user'});
module.exports = userSchema;