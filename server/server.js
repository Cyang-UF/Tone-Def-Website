// server with database connected
const express = require('express');
const mongoose = require('mongoose');   
const cors = require('cors');
const path = require('path');
require('dotenv').config();


// Set up express

const app = express();      // Create express application "app"
app.use(cors());            // Our app will use CORS (Cross-Origin Resource Sharing), google for more info
app.use(express.json());    // Our app will use the JSON parser

const PORT = process.env.PORT || 5000;  // When we have it hosted on Heroku, use the environment variable; otherwise, just use port 5000 
console.log("Starting server");
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

__dirname = path.resolve();
app.use(express.static(__dirname + '/client/public'));

app.get('/', function(req, res) {
    res.sendFile('index.html');
});

// set up routes

app.use("/posts", require("./routes/postRoutes"));  // If I make a request to /posts, express will look in the router listed for the initial route


// set up mongoose (the DB)

console.log("Connecting to MongoDB");
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true },(err) => {
    if (err) return console.error(err);
    console.log("MongoDB connection established.");
});

