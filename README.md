# Tone-Def-Website

Tone Def Website by Tone Dev Team
Hosted by herokuapp on https://tonedef.herokuapp.com

## Configuring .env

In order to properly run the server, you will need a .env file in this directory as well as in the server directory.

The .env file will contain the MONGODB_URI string which is the connection string to the MongoDB server, and a SECRET string which will

contain the hashing string for authentication. The .env should be in the following format:

MONGODB_URI=YOUR_MONGODB_URI_HERE

SECRET=YOUR_SECRET_STRING_HERE

## How To Run
In the following project directory, in order to run the website for development purposes, you will first need to run
### `npm install`
in both the root directory and in the client directory. Doing so will update or install all dependencies needed for the project to be able to be run. 

To run the server for development, run the following command in the root directory

### `npm start`

Which will start the Node.js server. You can use an external tool like Postman to make http requests to the server as well as use it to view the final site once it has been built successfully. 

To start the client for development you will need to open up another terminal and navigate to the client folder. From there you can also call 

### `npm start`

to start the development version of the client, which will update changes to the client files.

## How To Build
Once you've been able to run the server and client for development, you should also be able to build the client to create a stable release version in a build folder that the server can then subsequently access. In order to do this, you will have to navigate to the client folder and run
### `npm run build`
Which will create an optimized production build that the server can pull from. 

Running  `npm start` in the root directory should now also display the website content from the build folder in your browser at http://localhost:5000/.

For more information about building and deploying, see the README.md in the client folder which will contain more specific information about create-react-app which was used to build the client.