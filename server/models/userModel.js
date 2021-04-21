const mongoose = require('mongoose');
var bcrypt = require('bcryptjs');

// User object in the database needs a username, password, email, and boolean value on whether they are an admin or not
const userSchema = new mongoose.Schema({
    name: { type: String, required: true, unique:true },
    email: { type: String, required: true},
    password: { type: String, required: true },
    id : { type: String },
});

// hash the password
userSchema.methods.generateHash = function (password) {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
};

// checking if password is valid
userSchema.methods.validPassword = function (password) {
    return bcrypt.compareSync(password, this.password);
};

module.exports = User = mongoose.model("user", userSchema);