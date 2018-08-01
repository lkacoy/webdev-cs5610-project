var mongoose = require('mongoose');
var postSchema = require('./post.schema.server');
var postModel = mongoose.model('PostModel', postSchema);

function createPost(post) {
    return postModel.create(post);
}

function findAllPosts() {
    return postModel.find({});
}

function findPostById(postId) {
    return postModel.find({_id: postId});
}

function findAllPostsByUsername(username) {
    return postModel.find({username: username});
}

function deletePost(postId) {
    return postModel.deleteOne(postId);
}

module.exports = {
    createPost: createPost,
    findAllPosts: findAllPosts,
    findPostById: findPostById,
    findAllPostsByUsername: findAllPostsByUsername,
    deletePost: deletePost
};