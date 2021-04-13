const mongoose = require("mongoose");

// Just an object that is the structure for a post, data-wise
const postSchema = new mongoose.Schema({
    title: { type: String, required: true },
    createdAt: { type: Date, required: true },
    tags: { type: [String] },
    html: { type: String, required: true }
});

const postSchema2 = new mongoose.Schema({
    title: { type: String, required: true },
    createdAt: { type: Date, required: true , default: new Date()},
    tags: { type: [String] },
    selectedFile: String,
    likeCount: {
        type: Number,
        default: 0
    },
    markdown: { type: String, required: true }
});


// Convert the object to a model, which is what Mongoose uses
//      Model Name: post
//      structure: postSchema
const PostT1 = mongoose.model("postT1", postSchema);
const PostT2 = mongoose.model("postT2", postSchema2);

module.exports = PostT1, PostT2;