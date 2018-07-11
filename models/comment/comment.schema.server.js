var monogoose = require('mongoose');
var commentSchema = monogoose.Schema({
    commentId: Number,
    comment: String,
    postId: Number,
    username: String,
    dateCreate: {type: Date, default: Date.now()}
}, {collection: 'comment'});
module.exports = commentSchema;