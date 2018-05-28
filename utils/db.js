const mongoose = require('mongoose');

mongoose.connect('mongodb://mongo:mongo@mongo:27017')
  .then(res => console.log("Connected to mongodb instance"))
  .catch(err => console.log(err));
mongoose.set('debug', true);
