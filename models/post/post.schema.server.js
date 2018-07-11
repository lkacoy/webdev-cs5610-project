var monogoose = require('mongoose');
var postSchema = monogoose.Schema({
    postId: Number,
    username: String,
    postTitle: String,
    postContent: String,
    published: Boolean,
    datePublished: {type: Date, default: Date.now()},
    dateCreated: {type: Date, default: Date.now()},
    topic: String
}, {collection: 'post'});
module.exports = postSchema;