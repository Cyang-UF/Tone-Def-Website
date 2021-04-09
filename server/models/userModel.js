/*!!!Code used from https://stackoverflow.com/questions/43092071/how-should-i-store-salts-and-passwords-in-mongodb/43094720!!!*/

var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var bcrypt = require('bcrypt-nodejs');

// User object in the database needs a username, password, email, and boolean value on whether they are an admin or not
const userSchema = new mongoose.Schema({
    username: { type: String, required: true, unique:true },
    password: { type: String, required: true },
    email: { type: String, required: true},
    isAdmin: { type: Boolean, required: true }
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