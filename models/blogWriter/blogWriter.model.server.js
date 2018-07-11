var mongoose = require('mongoose');
var blogWriterSchema = require('./blogWriter.schema.server');
var blogWriterModel = mongoose.model('BlogWriterModel', blogWriterSchema);

function createBlogWriter(writer) {
    return blogWriterModel.create(writer);
}

module.exports = {
    createBlogWriter: createBlogWriter
};