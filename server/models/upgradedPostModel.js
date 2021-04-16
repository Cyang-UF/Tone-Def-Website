const mongoose = require("mongoose");

// Just an object that is the structure for a post, data-wise
const upgradedPostSchema = new mongoose.Schema({
    title: String,
    message: String,
    creator: String,
    tags: [String],
    selectedFile: String,
    likeCount: {
        type: Number,
        default: 0,
    },
    createdAt: {
        type: Date,
        default: new Date(),
    },
})


// Convert the object to a model, which is what Mongoose uses
//      Model Name: up_post
//      structure: postSchema
module.exports = UpgradedPost = mongoose.model("upgradedPost", upgradedPostSchema);