var mongoose = require('mongoose');

var projectSchema = mongoose.Schema({
    title: String,
    steps: [{type: String}],
    media: {
        video: {type: String},
        picture: {type: String}
    }
}, 
{
    collection:'projects'
});

module.exports = mongoose.model('projects', projectSchema);