const router = require("express").Router();  
const User = require("../models/userModel");

router.post('/register', function (req, res) {
    var new_user = new User({
        username: req.username,
        email: req.email,
        isAdmin: false
    });

    new_user.password = new_user.generateHash(userInfo.password);
    new_user.save();
});

router.post('/login', function (req, res) {
    User.findOne({ username: req.body.username }, function (err, user) {

        if (!user.validPassword(req.body.password)) {
            console.log("ERROR: Password Did Not Match")
            //password did not match
        } else {
            console.log("SUCCESS: Password Matched")
            // password matched. proceed forward
        }
    });
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