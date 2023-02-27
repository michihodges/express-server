// Empty object to act as endpoint for all routes
projectData = {};

// Express
const express = require('express');
const app = express();

// Body-Parser
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// CORS for cross origin allowance
const cors = require('cors');
app.use(cors());

// Initialize main project folder
app.use(express.static('website')); // This links the server to the index.html inside the website folder

// Local server
const port = 8000;
const server = app.listen(port, ()=>{console.log(`server running on localhost ${port}`)});
