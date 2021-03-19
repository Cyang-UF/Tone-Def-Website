const router = require("express").Router();
const Post = require("../models/postModel");

router.post("/", async (req, res) => {
    
    // retrive data from request
    const { title, createdAt, tags, html } = req.body;
    
    // construct post model
    const newPost = new Post({
        title,
        createdAt,
        tags,
        html
    });

    // save post model
    try {
        const savedPost = await newPost.save();
        res.json(savedPost);
        newPost.save();
    }
    catch(err) {
        console.log(err);
    }
});

router.get("/", async (req, res) => {
    const posts = await Post.find();
    res.json(posts);
});

router.get("/:id", async (req, res) => {
    const post = await Post.findById(req.params.id);
    res.json(post);
})

module.exports = router;