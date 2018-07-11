var monogoose = require('mongoose');
var blogWriterSchema = monogoose.Schema({
    username: String,
    topic: String,
    dateOfBirth: {type: Date},
    status: String
}, {collection: 'blogWriter'});
module.exports = blogWriterSchema;