const express = require('express');
const app = express();
const userRoute = require('./routes/user');
const passport = require('./utils/passport'),
      db = require('./utils/db');

app.use(passport.initialize());

app.get('/', (req, res) =>
  res.send('Hello World!')
);

app.use('/user', userRoute);

app.listen(3000, () => {
  console.log('Example app listening on port 3000!');
});
