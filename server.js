var express = require('express');
var app = express();
var bodyParser = require('body-parser');

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/poc-blogProject');


app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin",
        "http://localhost:4200");
    res.header("Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods",
        "GET, POST, PUT, DELETE, OPTIONS");
    res.header("Access-Control-Allow-Credentials", "true");
    next();
});

var session = require('express-session')
app.use(session({
    resave: false,
    saveUninitialized: true,
    secret: 'any string'
}));


app.get('/', function (req, res) {
    res.send('Hello World')
})




require('./services/adminUser.service.server.service.server')(app);
require('./services/blogFollower.service.server.service.server')(app);
require('./services/blogWriter.service.server.service.server.service.server')(app);
require('./services/comment.service.server')(app);
require('./services/post.service.server.service.server')(app);
require('./services/share.service.server.service.server')(app);
require('./services/user.service.server.service.server')(app);

app.listen(3000);