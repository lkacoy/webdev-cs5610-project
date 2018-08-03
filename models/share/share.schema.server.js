var mongoose = require('mongoose');
var shareSchema = mongoose.Schema({
    id: Number,
    username: String,
    dateShared: { type: Date, default: Date.now },
    postId: {type: mongoose.Schema.ObjectId},
    author: String
}, {collection: 'share'});
module.exports = shareSchema;