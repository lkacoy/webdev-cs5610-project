var mongoose = require('mongoose');
var blogFollowerSchema = require('./blogFollower.schema.server');
var blogFollowerModel = mongoose.model('BlogFollowerModel', blogFollowerSchema);

function createBlogFollower(follower) {
    return blogFollowerModel.create(follower);
}

module.exports = {
    createBlogFollower: createBlogFollower
};