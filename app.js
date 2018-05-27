const express = require('express')
const app = express()
const mongoose = require('mongoose');
const auth = require('./auth');
const db = 'mongodb://mongo:27017';

mongoose.connect(db)
  .then(res => console.log("Connected to mongodb instance"))
  .catch(err => console.log(err));
//mongoose.set('debug', true);

app.get('/', (req, res) =>
  res.send('Hello World!')
);

app.use('/auth', auth); // all the REST APIs for authentication

app.listen(3000, () => {
  console.log('Example app listening on port 3000!');
});
