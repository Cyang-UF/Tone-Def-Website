const router = require("express").Router();     // create a new router for us
const PostT1 = require("../models/postModel");
const PostT2 = require("../models/postModel");
import { getPosts, createPost, getPostsT2, createPostT2 } from "../controllers/posts.js"

// Where we route for a post request...Since we have to go to mongoose and will be waiting around, use asych with callback
router.post("/", async (req, res) => {
    
    
});

// Retreieve all posts for the html post type
router.get("/", getPosts);
router.post("/", createPost);

// for the markdown post type
//router.get("/", getPostsT2);
//router.post("/", createPostT2);


// Retreive a single post, specified by the id
router.get("/:id", async (req, res) => {                // The "/:id" means that the req param will store the id from teh DB request
    const post = await PostT1.findById(req.params.id);
    res.json(post);
})

module.exports = router;