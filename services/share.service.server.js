module.exports = function (app) {
    app.post('/api/share', createShare);
    app.get('/api/share', findAllShares);
    app.get('/api/share/:shareId', findShareById);
    app.get('/api/share/user/:username', findAllSharesByUsername);
    app.get('/api/share/post/:postId', findAllSharesForPost);
    app.delete('/api/share/:shareId', deleteShare);

    var shareModel = require('../models/share/share.model.server');

    function createShare(req, res) {
        var share = req.body;
        shareModel.createShare(share)
            .then(function(share) {
                res.json(share);
            });
    }

    function findAllShares(req, res) {
        shareModel.findAllShares()
            .then(function (shares) {
                res.send(shares);
            });
    }

    function findShareById(req, res) {
        var id = req.params['shareId'];
        shareModel.findShareById(id)
            .then(function (share) {
                res.json(share);
            })
    }

    function findAllSharesByUsername(req, res) {
        var id = req.params['username'];
        shareModel.findAllSharesByUsername(id)
            .then(function (shares) {
                res.json(shares);
            })
    }

    function findAllSharesForPost(req, res) {
        var id = req.params['postId'];
        shareModel.findAllSharesForPost(id)
            .then(function (shares) {
                res.json(shares);
            });
    }

    function deleteShare(req, res) {
        var id = req.params['shareId'];
        shareModel.deleteShare(id);
    }
};