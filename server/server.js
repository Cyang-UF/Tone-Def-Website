// server with database connected
const express = require('express');
const mongoose = require('mongoose');   
const cors = require('cors');
const path = require('path');
require('dotenv').config();


// Set up express

const app = express();      // Create express application "app"
app.use(cors());            // Our app will use CORS (Cross-Origin Resource Sharing), google for more info
app.use(express.json({ extended: true }));    // Our app will use the JSON parser
//app.use(urlencoded({ limit: "30mb", extended: true }));

const PORT = process.env.PORT || 3000;  // When we have it hosted on Heroku, use the environment variable; otherwise, just use port 3000 
console.log("Starting server");
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

__dirname = path.resolve();
app.use(express.static(path.join(__dirname, './client/build')))
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, './client/build'))
})

// set up routes

app.use("/posts", require("./routes/postRoutes"));  // If I make a request to /posts, express will look in the router listed for the initial route
app.use("/users", require("./routes/userRoutes"));

// set up mongoose (the DB)

console.log("Connecting to MongoDB");
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true },(err) => {
    if (err) return console.error(err);
    console.log("MongoDB connection established.");
});

