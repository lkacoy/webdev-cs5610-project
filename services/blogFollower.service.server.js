module.exports = function (app) {
    app.post('/api/blogFollower', createBlogFollower);
    app.get('/api/blogFollower', findAllBlogFollowers);
    app.get('/api/blogFollower/:followerId', findBlogFollowerById);
    app.delete('/api/blogFollower/:followerId', deleteBlogFollower);

    var blogFollowerModel = require('../models/blogFollower/blogFollower.model.server');

    function createBlogFollower(req, res) {
        var blogFollower = req.body;
        blogFollowerModel = {
            username: blogFollower.username,
        };
        blogFollower.createAdminUser(blogFollower)
            .then(function(follower) {
                res.json(follower);
            });
    }

    function findAllBlogFollowers(req, res) {
        blogFollowerModel.findAllBlogFollowers()
            .then(function (followers) {
                res.send(followers);
            });
    }

    function findBlogFollowerById(req, res) {
        var id = req.params['followerId'];
        blogFollowerModel.findBlogFollowerById(id)
            .then(function (follower) {
                res.json(follower);
            })
    }

    function deleteBlogFollower(req, res) {
        var id = req.params['followerId'];
        blogFollowerModel.deleteBlogFollower(id);
    }
};