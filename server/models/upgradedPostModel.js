const mongoose = require("mongoose");

// Just an object that is the structure for a post, data-wise
const upgradedPostSchema = new mongoose.Schema({
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
//      Model Name: up_post
//      structure: postSchema
module.exports = Post = mongoose.model("up_post", upgradedPostSchema);