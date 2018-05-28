const express = require('express');
const app = express();

const passport = require('./utils/passport'),
      db = require('./utils/db'),
      userRoute = require('./routes/user');

app.use(passport.initialize());

app.use('/user', userRoute);

app.listen(3000, () => {
  console.log('Example app listening on port 3000!');
});
