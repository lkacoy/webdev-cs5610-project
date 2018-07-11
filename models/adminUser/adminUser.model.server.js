var mongoose = require('mongoose');
var adminUserSchema = require('./adminUser.schema.server');
var adminUserModel = mongoose.model('AdminUserModel', adminUserSchema);

function createAdminUser(adminUser) {
    return adminUserModel.create(adminUser);
}

function findAllAdminUsers() {
    return adminUserModel.find({});
}

function findAdminUserById(adminUserId) {
    return adminUserModel.findById(adminUserId);
}

module.exports = {
    createAdminUser: createAdminUser,
    findAllAdminUsers: findAllAdminUsers,
    findAdminUserById: findAdminUserById
};