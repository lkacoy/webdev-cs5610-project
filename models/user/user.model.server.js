var mongoose = require('mongoose');
var userSchema = require('./user.schema.server');
var userModel = mongoose.model('UserModel', userSchema);

function createUser(movie) {
    return userModel.create(movie);
}

module.exports = {
    createUser: createUser
};