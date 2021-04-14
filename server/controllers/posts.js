// Route handlers to keep routes/postRoutes clean
const PostT1 = require("../models/postModel");
const PostT2 = require("../models/postModel");

// for html post type
const getPosts = async (req, res) => {
    const posts = await PostT1.find();                // Wil find all the posts, since no param in find(). Saves the array in "posts"
    res.json(posts);
}
// for markdown post type
const getPostsT2 = async (req, res) => {
    try{
        const posts = await PostT2.find();                // Wil find all the posts, since no param in find(). Saves the array in "posts"
        res.status(200).json(posts);
    }
    
    catch(error)
    {
        res.status(404).json({ message: error.message });
    }
}



// for html post type
const createPost = async (req, res) => {
    // retrive data from request
    const { title, createdAt, tags, html } = req.body;
    
    // construct post model
    const newPost = new PostT1({
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
}
// for markdown post type
const createPostT2 = async (req, res) => {
    // retrive data from request
    const { title, createdAt, tags, selectedFile, likeCount, markdown } = req.body;
    
    // construct post model
    const newPost = new PostT2({
        title,
        createdAt,
        tags,
        selectedFile,
        likeCount,
        markdown
    });

    // save post model, try-catch for the success of saving a post or not
    try {
        const savedPost = await newPost.save();     // Save the post in the DB, then copy that into a variable "savedPost"
        res.status(201).json(savedPost);                        // Return a JSON of the post too as the response of the callback
        newPost.save();
    }
    catch(err) {
        console.log(err);
        res.status(409).json({ message: error.message });
    }
} 

module.exports = getPosts, getPostsT2, createPost, createPostT2;