var mongoose = require('mongoose');
var commentSchema = require('./comment.schema.server');
var commentModel = mongoose.model('CommentModel', commentSchema);

function createComment(comment) {
    return commentModel.create(comment);
}

function findAllComments() {
    return commentModel.find({});
}

function findCommentById(commentId) {
    return commentModel.findById(commentId);
}

function findAllCommentsByPostId(postId) {
    return commentModel.find({postId: postId});
}

function deleteComment(comment) {
    return commentModel.delete(comment);
}


module.exports = {
    createComment: createComment,
    findAllComments: findAllComments,
    findCommentById: findCommentById,
    findAllCommentsByPostId, findAllCommentsByPostId,
    deleteComment: deleteComment
};