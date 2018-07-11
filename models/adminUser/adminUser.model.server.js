var mongoose = require('mongoose');
var adminUserSchema = require('./adminUser.schema.server');
var adminUserModel = mongoose.model('AdminUserModel', adminUserSchema);

function createAdminUser(adminUser) {
    return adminUserModel.create(adminUser);
}

module.exports = {
    createAdminUser: createAdminUser
};