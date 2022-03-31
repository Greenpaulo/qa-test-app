const express = require('express');
const mongoose = require('mongoose');
const cookieSession = require('cookie-session');
const passport = require('passport');
const keys = require('./config/keys');
const authRoutes = require('./routes/authRoutes');
const bodyParser = require('body-parser');
const helmet = require('helmet');
require('./models/Conditions');
require('./models/Herbs');
require('./models/Medicine');
const conditionRoutes = require('./routes/conditionRoutes');
const herbRoutes = require('./routes/herbRoutes');
const medicineRoutes = require('./routes/medicineRoutes');
require('./models/User');
require('./services/passport');
const path = require('path');


const app = express();

// Connect mongoose to MongoDB
mongoose.connect(keys.mongoURI, { useNewUrlParser: true, useFindAndModify: false, useUnifiedTopology: true })

// Added helmet middleware options to secure http headers
app.use(helmet.dnsPrefetchControl());
app.use(helmet.expectCt());
app.use(helmet.frameguard());
app.use(helmet.hidePoweredBy());
app.use(helmet.hsts());
app.use(helmet.ieNoOpen());
app.use(helmet.noSniff());
app.use(helmet.permittedCrossDomainPolicies());
app.use(helmet.referrerPolicy());
app.use(helmet.xssFilter());

// Wiring up express to use cookies, with the help of cookie-session middleware.
app.use(cookieSession({
  name: 'session',
  keys: [keys.cookieKey],

  // Cookie Options
  maxAge: 30 * 24 * 60 * 60 * 1000, // 30 days in milliseconds
}));

// Tell passport to use cookies - set up the middleware (app.use())
app.use(passport.initialize());
app.use(passport.session());

// Use body-parser middleware to parse incoming post requests
app.use(bodyParser.json());

// Pass the app instance to route handler files
authRoutes(app);
conditionRoutes(app);
herbRoutes(app);
medicineRoutes(app);

// Serve static assets in production
if (process.env.NODE_ENV === 'production') {
  // Set static folder
  app.use(express.static('client/build'));

  // If there is no file in build dir - serve index.html file
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  })
}

const PORT = process.env.PORT || 5001;
app.listen(PORT);