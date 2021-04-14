const mongoose = require("mongoose");

// Just an object that is the structure for a post, data-wise
const postSchema = new mongoose.Schema({
    title: { type: String, required: true },
    createdAt: { type: Date, required: true },
    tags: { type: [String] },
    html: { type: String, required: true }
});

// Convert the object to a model, which is what Mongoose uses
//      Model Name: post
//      structure: postSchema
module.exports = Post = mongoose.model("post", postSchema);