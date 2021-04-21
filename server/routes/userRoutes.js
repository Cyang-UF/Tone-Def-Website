const router = require("express").Router();  
const User = require("../models/userModel");
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
require('dotenv').config();


router.post('/signup', async (req, res) => {
    const { email, password, confirmPassword, firstName, lastName } = req.body;

    try {
        const oldUser = await User.findOne({ email });
        if (oldUser) return res.status(400).json({ message: "User already exists" });
        if (password !== confirmPassword) return res.status(400).json({ message: "Passwords do not match" })
        const hashedPassword = await bcrypt.hash(password, 12);
        const result = await User.create({ email, password: hashedPassword, name: `${firstName} ${lastName}` });
        const token = jwt.sign( { email: result.email, id: result._id }, process.env.SECRET, { expiresIn: "1h" } );
        res.status(201).json({ result, token });
    } catch (error) {
        res.status(500).json({ message: "Something went wrong" });
        console.log(error);
    }
});


router.post('/signin', async (req, res) => {
    const { email, password } = req.body;
    try {
        const oldUser = await User.findOne({ email });
        if (!oldUser) return res.status(404).json({ message: "User doesn't exist" });
        const isPasswordCorrect = await bcrypt.compare(password, oldUser.password);
        if (!isPasswordCorrect) return res.status(400).json({ message: "Invalid credentials" });
        const token = jwt.sign({ email: oldUser.email, id: oldUser._id }, process.env.SECRET, { expiresIn: "1h" });
        res.status(200).json({ result: oldUser, token });
    } catch (err) {
        res.status(500).json({ message: "Something went wrong" });
    }
});


//not sure if this works
router.post('/updatePassword', function (req, res) {
    User.findOneAndUpdate({ username: req.body.username }, function (err, user) {
        user.password = user.generateHash(userInfo.password);
        user.password.update();
        
        
        // req.body.password = new_user.generateHash(userInfo.password);
        // new_user.save();
        // if (!user.validPassword(req.body.password)) {
        //     //password did not match
        // } else {
        //     // password matched. proceed forward
        // }
    });
});

router.post('/checkAdmin', function (req, res) {
    User.findOne({ username: req.body.username }, function (err, user) {
        res.json(user.isAdmin);
    });
});

module.exports = router;