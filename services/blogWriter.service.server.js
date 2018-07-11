module.exports = function (app) {
    app.post('/api/blogWriter', createBlogWriter);
    app.get('/api/blogWriter', findAllBlogWriters);
    app.get('/api/blogWriter/:writerId', findBlogWriterById);
    app.delete('/api/blogWriter/:writerId', deleteBlogWriter);

    var blogWriterModel = require('../models/blogWriter/blogWriter.model.server');

    function createBlogWriter(req, res) {
        var blogWriter = req.body;
        blogWriter = {
            username: blogWriter.username,
        };
        blogWriterModel.createBlogWriter(blogWriter)
            .then(function(writer) {
                res.json(writer);
            });
    }

    function findAllBlogWriters(req, res) {
        blogWriterModel.findAllBlogWriters()
            .then(function (writers) {
                res.send(writers);
            });
    }

    function findBlogWriterById(req, res) {
        var id = req.params['writerId'];
        blogWriterModel.findBlogWriterById(id)
            .then(function (writer) {
                res.json(writer);
            })
    }

    function deleteBlogWriter(req, res) {
        var id = req.params['writerId'];
        blogWriterModel.deleteBlogWriter(id);
    }
};