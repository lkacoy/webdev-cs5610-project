var mongoose = require('mongoose');
var postSchema = require('./post.schema.server.schema.server');
var postModel = mongoose.model('PostModel', postSchema);

function createPost(post) {
    return postModel.create(post);
}

module.exports = {
    createPost: createPost
};