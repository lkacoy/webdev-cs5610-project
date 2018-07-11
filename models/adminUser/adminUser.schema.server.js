var monogoose = require('mongoose');
var adminUserSchema = monogoose.Schema({
    username: String,
    lastLogin: { type: Date, default: Date.now }
}, {collection: 'adminUser'});
module.exports = adminUserSchema;