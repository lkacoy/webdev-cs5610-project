module.exports = function (app) {
    app.post('/api/adminUser', createAdminUser);
    app.get('/api/adminUser', findAllAdminUsers);
    app.get('/api/user/:userId', findAdminUserById);
    app.delete('/api/user/:userId', deleteAdminUser);

    var adminUserModel = require('../models/adminUser/adminUser.model.server');

    function createAdminUser(req, res) {
        var adminUser = req.body;
        adminUserModel = {
            username: adminUser.username,
        };
        adminUser.createAdminUser(adminUser)
            .then(function(adminUser) {
                res.json(adminUser);
            });
    }

    function findAllAdminUsers(req, res) {
        adminUserModel.findAllAdminUsers()
            .then(function (users) {
            res.send(users);
        });
    }

    function findAdminUserById(req, res) {
        var id = req.params['userId'];
        adminUserModel.findAdminUserById(id)
            .then(function (user) {
                res.json(user);
            })
    }

    function deleteAdminUser(req, res) {
        var id = req.params['userId'];
        adminUserModel.deleteAdminUser(id);
    }
};