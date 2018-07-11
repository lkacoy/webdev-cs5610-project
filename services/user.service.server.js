module.exports = function (app) {
    app.post('/api/user', createUser);
    app.get('/api/user', findAllUsers);
    app.get('/api/user/:userId', findUserById);
    app.delete('/api/user/:userId', deleteUser);

    var userModel = require('../models/user/user.model.server');

    function createUser(req, res) {
        var user = req.body;
        user = {
            username: user.username,
        };
        userModel.createUser(user)
            .then(function(user) {
                res.json(user);
            });
    }

    function findAllUsers(req, res) {
        userModel.findAllUsers()
            .then(function (users) {
                res.send(users);
            });
    }

    function findUserById(req, res) {
        var id = req.params['userId'];
        userModel.findUserById(id)
            .then(function (user) {
                res.json(user);
            })
    }

    function deleteUser(req, res) {
        var id = req.params['userId'];
        userModel.deleteUser(id);
    }
};