var mongoose = require('mongoose');
var userSchema = require('./user.schema.server');
var userModel = mongoose.model('UserModel', userSchema);

function createUser(user) {
    return userModel.create(user);
}

function findAllUsers() {
    return userModel.find({});
}

function findUserById(userId) {
    return userModel.findById(userId);
}

function deleteUser(userId) {
    return userModel.delete(userId);
}

function findUserByCredentials(credentials) {
    return userModel.findOne(credentials);
}

module.exports = {
    createUser: createUser,
    findAllUsers: findAllUsers,
    findUserById: findUserById,
    deleteUser: deleteUser,
    findUserByCredentials: findUserByCredentials
};