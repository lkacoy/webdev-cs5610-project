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

function deleteUser(user) {
    var query = {'username': user.username};
    return userModel.findOneAndRemove(query);
}

function findUserByCredentials(credentials) {
    return userModel.findOne(credentials);
}

function findUserByName(username) {
    return userModel.findOne({username: username });
}

function updateUser(currentUser, newUser) {
    var query = {'username': currentUser.username, "password": currentUser.password};
    return userModel.findOneAndUpdate(query, newUser);
}

module.exports = {
    createUser: createUser,
    findAllUsers: findAllUsers,
    findUserById: findUserById,
    deleteUser: deleteUser,
    findUserByCredentials: findUserByCredentials,
    findUserByName: findUserByName,
    updateUser: updateUser
};