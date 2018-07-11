var mongoose = require('mongoose');
var commentSchema = require('./comment.schema.server.schema.server');
var commentModel = mongoose.model('UserModel', commentSchema);

function createComment(comment) {
    return commentModel.create(comment);
}

module.exports = {
    createComment: createComment
};