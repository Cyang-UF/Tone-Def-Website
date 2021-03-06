// server with database connected
const express = require('express');
const connectDB = require('../config/db');   
const app = express()   // create express application "app"
 
// Database connection
connectDB();    // the connectDB funciton from the module we export in /config/db.js

app.get('/', (request,response) => response.send('Hello and welcome to the future Tone Def site!'));

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server running on port ${port}`));