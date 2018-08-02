var mongoose = require('mongoose');
var blogWriterSchema = require('../user/user.schema.server');
var blogWriterModel = mongoose.model('BlogWriterModel', blogWriterSchema);

function createBlogWriter(writer) {
    return blogWriterModel.create(writer);
}

function findAllBlogWriters() {
    return blogWriterModel.find({'role': 'blogWriter'});
}

function findBlogWriterById(writerId) {
    return blogWriterModel.findById(writerId);
}

function deleteBlogWriter(writerId) {
    return blogWriterModel.delete(writerId);
}

module.exports = {
    createBlogWriter: createBlogWriter,
    findAllBlogWriters: findAllBlogWriters,
    findBlogWriterById: findBlogWriterById,
    deleteBlogWriter: deleteBlogWriter
};