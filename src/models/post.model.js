const mongoose = require('mongoose');

const postSchema = mongoose.Schema({
    postImgUrl: String,
    postCaption: String
})

const postModel = mongoose.model('post', postSchema)

module.exports = postModel;