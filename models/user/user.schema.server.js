var monogoose = require('mongoose');
var userSchema = monogoose.Schema({
    username: String,
    password: String,
    firstName: String,
    lastName: String,
    email: String,
    role: String,
    lastLogin: { type: Date, default: Date.now },
    topic: String,
    dateOfBirth: {type: Date},
    status: String
}, {collection: 'user'});
module.exports = userSchema;