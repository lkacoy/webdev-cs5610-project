var monogoose = require('mongoose');
var shareSchema = monogoose.Schema({
    id: Number,
    username: String,
    dateShared: { type: Date, default: Date.now }
}, {collection: 'share'});
module.exports = shareSchema;