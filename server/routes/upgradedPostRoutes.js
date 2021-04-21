const router = require("express").Router();     // create a new router for us
const UpgradedPost = require("../models/upgradedPostModel");

router.get('/', async (req, res) => { 
    try {
        const UpgradedPost = await UpgradedPost.find();
                
        res.status(200).json(UpgradedPost);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
});

router.post('/', async (req, res) => {
    const { title, message, selectedFile, creator, tags } = req.body;

    const newUpgradedPost = new UpgradedPost({ title, message, selectedFile, creator, tags })

    try {
        await newUpgradedPost.save();

        res.status(201).json(newUpgradedPost );
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
});

router.get('/:id', async (req, res) => { 
    const { id } = req.params;

    try {
        const post = await UpgradedPost.findById(id);
        
        res.status(200).json(post);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
});

router.patch('/:id', async (req, res) => {
    const { id } = req.params;
    const { title, message, creator, selectedFile, tags } = req.body;
    
    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id: ${id}`);

    const updatedPost = { creator, title, message, tags, selectedFile, _id: id };

    await UpgradedPost.findByIdAndUpdate(id, updatedPost, { new: true });

    res.json(updatedPost);
});

router.delete('/:id', async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send(`No post with id: ${_id}`);

    await UpgradedPost.findByIdAndRemove(id);

    res.json({ message: "Post deleted successfully." });
});

router.patch('/:id/likePost', async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id: ${id}`);
    
    const post = await UpgradedPost.findById(id);

    const updatedPost = await UpgradedPost.findByIdAndUpdate(id, { likeCount: post.likeCount + 1 }, { new: true });
    
    res.json(updatedPost);
});


module.exports = router;