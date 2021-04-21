const router = require("express").Router();     // create a new router for us
const Post = require("../models/postModel");
const auth = require("../middleware/auth");
const mongoose = require('mongoose');

// Where we route for a post request...Since we have to go to mongoose and will be waiting around, use asych with callback
router.post("/", auth, async (req, res) => {
    
    // retrive data from request
    const { title, tags, html } = req.body;
    
    // construct post model
    const newPost = new Post({ title,tags, html });

    // save post model, try-catch for the success of saving a post or not
    try {
        const savedPost = await newPost.save();     // Save the post in the DB, then copy that into a variable "savedPost"
        res.json(savedPost);                        // Return a JSON of the post too as the response of the callback
        newPost.save();
    }
    catch(err) {
        console.log(err);
    }
});

// Retreieve all posts
router.get("/", async (req, res) => {               // Return all of the posts in the DB
    const posts = await Post.find();                // Wil find all the posts, since no param in find(). Saves the array in "posts"
    res.json(posts);
});

router.patch('/:id/likePost', async (req, res) => {
    const { id } = req.params;

    /* We have liking open to eveyron. Use this in future to restrict liking to users & admin
    if (!req.userId) {
        return res.json({ message: "Unauthenticated" });
    }
    */

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id: ${id}`);
    
    const post = await Post.findById(id);

    const index = post.likes.findIndex((id) => id ===String(req.userId));

    if (index === -1) {
        post.likes.push(req.userId);
    } else {
         post.likes = post.likes.filter((id) => id !== String(req.userId));
    }

    const updatedPost = await Post.findByIdAndUpdate(id, { likeCount: post.likeCount + 1 }, { new: true });
    
    res.json(updatedPost);
});

router.delete('/:id', auth, async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id: ${id}`);

    await Post.findByIdAndRemove(id);

    console.log('DELETE!');

    res.json({ message: "Post deleted successfully." });
});

module.exports = router;