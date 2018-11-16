const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const config = require('./config');

// Routes
const recipes = require('./api/recipes');

const app = express();

// BodyParser Middleware
app.use(bodyParser.json());

//Recipes API Endpoint
app.use('/api/recipes', recipes);

// Connect to MongoDB
mongoose.connect(config.mongodbUri, { useNewUrlParser: true })
  .then(()=> console.log('MongoDB is connected...'))
  .catch(console.error);

// Start the server
app.listen(config.port, config.host, ()=>{
  console.info(`Express listening on port ${config.port}`)
})
