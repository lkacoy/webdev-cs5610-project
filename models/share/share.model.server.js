var mongoose = require('mongoose');
var shareSchema = require('./share.schema.server');
var shareModel = mongoose.model('ShareModel', shareSchema);

function createShare(share) {
    return shareModel.create(share);
}

function findAllShares() {
    return shareModel.find({});
}

function findShareById(shareId) {
    return shareModel.findById(shareId);
}

function findAllSharesByUsername(username) {
    return shareModel.find({username: username});
}

function findAllSharesForPost(postId) {
    return shareModel.find({postId: postId})
}

function deleteShare(shareId) {
    return shareModel.delete(shareId);
}

module.exports = {
    createShare: createShare,
    findAllShares: findAllShares,
    findShareById: findShareById,
    findAllSharesByUsername: findAllSharesByUsername,
    findAllSharesForPost: findAllSharesForPost,
    deleteShare: deleteShare
};