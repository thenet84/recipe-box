const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const config = require('./config');

const app = express();

// BodyParser Middleware
app.use(bodyParser.json());

// Connect to MongoDB
mongoose.connect(config.mongodbUri, { useNewUrlParser: true })
  .then(()=> console.log('MongoDB is connected...'))
  .catch(console.error);

// Start the server
app.listen(config.port, config.host, ()=>{
  console.info(`Express listening on port ${config.port}`)
})
