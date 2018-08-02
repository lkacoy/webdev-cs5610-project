var express = require('express');
var bodyParser = require('body-parser');
const mongoose = require('mongoose');
mongoose.connect('mongodb://admin:admin1@ds159631.mlab.com:59631/heroku_kw3mvrqs');


var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

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




var session = require('express-session');
app.use(session({
    resave: false,
    saveUninitialized: true,
    secret: 'any string',
    cookie:{maxAge:1800000}
}));


app.get('/', function (req, res) {
    res.send('Hello World')
});

app.get('/api/session/set/:name/:value',
    setSession);
app.get('/api/session/get/:name',
    getSession);

function setSession(req, res) {
    var name = req.params['name'];
    var value = req.params['value'];
    req.session[name] = value;
    res.send(req.session);
}

function getSession(req, res) {
    var name = req.params['name'];
    var value;
    if (req.session[name]) {
        value = req.session[name];
    } else{
        value = {error: 'No session'};
    }
    res.json(value);
}


require('./services/adminUser.service.server')(app);
require('./services/blogFollower.service.server')(app);
require('./services/blogWriter.service.server')(app);
require('./services/comment.service.server')(app);
require('./services/post.service.server')(app);
require('./services/share.service.server')(app);
require('./services/user.service.server')(app);

app.listen(process.env.PORT || 3000);