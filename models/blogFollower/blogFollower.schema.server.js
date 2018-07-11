var monogoose = require('mongoose');
var blogFollowerSchema = monogoose.Schema({
    username: String,
    topic: String
}, {collection: 'blogFollower'});
module.exports = blogFollowerSchema;