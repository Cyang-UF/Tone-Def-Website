const mongoose = require("mongoose");

// Just an object that is the structure for a post, data-wise
const postSchema = new mongoose.Schema({
    title: { type: String },
    createdAt: { type: Date, default: new Date(), required: false },
    tags: { type: [String] },
    html: { type: String }
});

// Convert the object to a model, which is what Mongoose uses
//      Model Name: post
//      structure: postSchema
module.exports = Post = mongoose.model("post", postSchema);