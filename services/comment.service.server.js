module.exports = function (app) {
    app.post('/api/comment', createComment);
    app.get('/api/comment', findAllComments);
    app.get('/api/comment/:commentId', findCommentById);
    app.get('/api/comment/post/:postId', findAllCommentsByPostId);
    app.delete('/api/comment', deleteComment);
    app.put('/api/comment', updateComment);

    var commentModel = require('../models/comment/comment.model.server');

    function createComment(req, res) {
        var comment = req.body;
        var user = req.session['currentUser'].username;
        comment.username = user;
        commentModel.createComment(comment)
            .then(function(comment) {
                res.json(comment);
            });
    }

    function findAllComments(req, res) {
        commentModel.findAllComments()
            .then(function (comments) {
                res.send(comments);
            });
    }

    function findCommentById(req, res) {
        var id = req.params['commentId'];
        commentModel.findCommentById(id)
            .then(function (comment) {
                res.json(comment);
            })
    }

    function findAllCommentsByPostId(req, res) {
        var id = req.params['postId'];
        commentModel.findAllCommentsByPostId(id)
            .then(function (comments) {
                res.json(comments);
            })
    }

    function deleteComment(req, res) {
        var comment = req.body;
        var user = req.session['currentUser'].username;
        if (comment.username != user && user !='admin') {
            res.json({error: "User can not delete another user's comment"});
        } else {
            commentModel.deleteComment(comment).then( function (comment) {
                res.json({message: "Comment deleted"})
            });
        }
    }

    function updateComment(req, res) {
        var comment = req.body;
        var user = req.session['currentUser'].username;
        if (comment.username != user) {
            res.json({error: "User can not edit someone else's comment!"})
        } else {
            commentModel.updateComment(comment).then( function(comment) {
                res.json(comment);
            })
        }
    }
};