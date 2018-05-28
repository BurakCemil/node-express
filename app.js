const express = require('express'),
      cors = require('cors');
      
const app = express();

const passport = require('./utils/passport'),
      db = require('./utils/db'),
      userRoute = require('./routes/user');

// adding 3rd party middleware
app.use(passport.initialize()); // passport is used for authentication
app.use(cors()); // currently CORS is enabled for all requests

// adding the app routes
app.use('/user', userRoute);

app.listen(3000, () => {
  console.log('Launching node-express on port 3000...');
});
