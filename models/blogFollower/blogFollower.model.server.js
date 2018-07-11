var mongoose = require('mongoose');
var blogFollowerSchema = require('./blogFollower.schema.server');
var blogFollowerModel = mongoose.model('BlogFollowerModel', blogFollowerSchema);

function createBlogFollower(follower) {
    return blogFollowerModel.create(follower);
}

function findAllBlogFollowers() {
    return blogFollowerModel.find({});
}

function findBlogFollowerById(followerId) {
    return blogFollowerModel.findById(followerId);
}

function deleteBlogFollower(followerId) {
    return blogFollowerModel.delete(followerId);
}

module.exports = {
    createBlogFollower: createBlogFollower,
    findAllBlogFollowers: findAllBlogFollowers,
    findBlogFollowerById: findBlogFollowerById,
    deleteBlogFollower: deleteBlogFollower
};