module.exports = function (app) {
    app.post('/api/post', createPost);
    app.get('/api/post', findAllPosts);
    app.get('/api/post/:postId', findPostById);
    app.get('/api/post/user/:username', findAllPostsByUsername);
    app.delete('/api/post', deletePost);
    app.post('/api/post/search', searchPosts);
    app.put('/api/post', updatePost);

    var postModel = require('../models/post/post.model.server');

    function createPost(req, res) {
        var post = req.body;
        var user = req.session['currentUser'].username;
        post.username = user;
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
        var post = req.body;
        console.log(post);
        postModel.deletePost(post).then(function (post) {
            res.send(200);
        });
    }

    function searchPosts(req, res) {
        var query = req.body;
        postModel.searchPosts(query).then(function (posts) {
            res.json(posts);
        })
    }

    function updatePost(req, res) {
        var post = req.body;
        postModel.updatePost(post).then(function (post) {
            res.json(post);
        })
    }
};