const router = require("express").Router();     // create a new router for us
const Post = require("../models/postModel");

// Where we route for a post request...Since we have to go to mongoose and will be waiting around, use asych with callback
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

// Retreive a single post, specified by the id
router.get("/:id", async (req, res) => {                // The "/:id" means that the req param will store the id from teh DB request
    const post = await Post.findById(req.params.id);
    res.json(post);
})

module.exports = router;