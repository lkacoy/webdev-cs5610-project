var mongoose = require('mongoose');
var commentSchema = mongoose.Schema({
    commentId: Number,
    comment: String,
    postId: {type: mongoose.Schema.Types.ObjectId},
    username: String,
    dateCreate: {type: Date, default: Date.now()}
}, {collection: 'comment'});
module.exports = commentSchema;