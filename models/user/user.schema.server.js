var monogoose = require('mongoose');
var userSchema = monogoose.Schema({
    username: String,
    password: String,
    firstName: String,
    lastName: String,
    email: String
}, {collection: 'user'});
module.exports = userSchema;