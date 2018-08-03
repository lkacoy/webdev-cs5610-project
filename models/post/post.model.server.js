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

function deletePost(post) {
    console.log(post);
    return postModel.deleteOne({_id: post._id});
}

function searchPosts(query) {
    let newQuery = {};
    if (query.username != '') {
        newQuery.username = query.username;
    }
    if (query.topic != '') {
        newQuery.topic = query.topic;
    }
    if (query.title != '') {
        newQuery.title = query.title;
    }
    console.log(newQuery);
    return postModel.find(newQuery);
}

function updatePost(post) {
    var query = {'username': post.username, "title": post.title};
    return postModel.findOneAndUpdate(query, post);
}

module.exports = {
    createPost: createPost,
    findAllPosts: findAllPosts,
    findPostById: findPostById,
    findAllPostsByUsername: findAllPostsByUsername,
    deletePost: deletePost,
    searchPosts: searchPosts,
    updatePost: updatePost
};