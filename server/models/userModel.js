const mongoose = require('mongoose');
var bcrypt = require('bcryptjs');

// User object in the database needs a username, password, email, and boolean value on whether they are an admin or not
const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true},
    password: { type: String, required: true },
    id : { type: String },
    isAdmin: { type: Boolean, required: true, default: false }
});

module.exports = User = mongoose.model("user", userSchema);