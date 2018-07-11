module.exports = function (app) {
    app.post('/api/post', createPost);
    app.get('/api/post', findAllPosts);
    app.get('/api/post/:postId', findPostById);
    app.get('/api/post/user/:username', findAllPostsByUsername);
    app.delete('/api/post/:postId', deletePost);

    var postModel = require('../models/post/post.model.server');

    function createPost(req, res) {
        var post = req.body;
        post = {
            username: post.username,
        };
        postModel.createPost(post)
            .then(function(post) {
                res.json(post);
            });
    }

    function findAllPosts(req, res) {
        postModel.findAllPosts()
            .then(function (posts) {
                res.send(posts);
            });
    }

    function findPostById(req, res) {
        var id = req.params['postId'];
        postModel.findPostById(id)
            .then(function (post) {
                res.json(post);
            })
    }

    function findAllPostsByUsername(req, res) {
        var id = req.params['username'];
        postModel.findAllPostsByUsername(id)
            .then(function (posts) {
                res.json(posts);
            })
    }

    function deletePost(req, res) {
        var id = req.params['postId'];
        postModel.deletePost(id);
    }
};