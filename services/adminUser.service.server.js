module.exports = function (app) {
    app.post('/api/adminUser', createAdminUser);
    //app.get('/api/adminUser', findAllAdminUsers);

    var adminUser = require('../models/adminUser/adminUser.model.server');

    function createAdminUser(req, res) {
        var adminUser = req.body;
        adminUser = {
            username: adminUser.username,
        };
        adminUser.createAdminUser(adminUser)
            .then(function(adminUser) {
                res.json(adminUser);
            });
    }
};