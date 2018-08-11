module.exports = function (app) {
    app.post('/api/register', createUser);
    app.get('/api/user', findAllUsers);
    app.get('/api/user/:userId', findUserById);
    app.get('/api/profile', profile);
    app.post('/api/logout', logout);
    app.post('/api/login', login);
    app.put('/api/profile', updateUser);
    app.delete('/api/profile', deleteUser);
    app.delete('/api/profile/admin/:userId', adminDeleteUser);
    app.put('/api/profile/admin', adminUpdateUser);
    app.post('/api/admin', adminCreateUser);

    var userModel = require('../models/user/user.model.server');

    function login(req, res) {
        var credentials = req.body;
        userModel
            .findUserByCredentials(credentials)
            .then(function (user) {
                if (user == null) {
                    res.json({error:'Unable to login'});
                } else {
                    req.session['currentUser'] = user;
                    res.json(user);
                }
            })
    }

    function logout(req, res) {
        req.session.destroy();
        res.send(200);
    }

    function profile(req, res) {
        res.send(req.session['currentUser']);
    }

    function createUser(req, res) {
        var newUser = req.body;
        userModel.findUserByName(newUser.username)
            .then(function (user) {
                console.log(user);
                if (user != null && user._id != null) {
                    res.json({error:'User already exists!'});
                    return;
                } else {
                    userModel.createUser(newUser)
                        .then(function (user) {
                            req.session['currentUser'] = user;
                            res.send(user);
                        });
                }

            });

    }

    function adminCreateUser(req, res) {
        var newUser = req.body;
        userModel.findUserByName(newUser.username)
            .then(function (user) {
                console.log(user);
                if (user != null && user._id != null) {
                    res.json({error:'User already exists!'});
                    return;
                } else {
                    userModel.createUser(newUser)
                        .then(function (user) {
                            res.send(user);
                        });
                }

            });
    }

    function findAllUsers(req, res) {
        userModel.findAllUsers()
            .then(function (users) {
                res.send(users);
            });
    }


    function updateUser(req, res) {
        userModel.updateUser(req.session['currentUser'], req.body)
            .then(function (user) {
                req.session['currentUser'] = user;
                res.send(user);
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
        userModel.deleteUser(req.session['currentUser']);
        req.session.destroy();
        res.json({message:'User deleted'});
    }

    function adminDeleteUser(req, res) {
        var userId = req.params['userId'];
        userModel.adminDeleteUser(userId)
            .then(function (user) {
                res.json({message: 'User deleted'});
            });
    }

    function adminUpdateUser(req, res) {
        var user = req.body;
        userModel.adminUpdateUser(user)
            .then(function (user) {
            res.send(user);
        });
    }
};