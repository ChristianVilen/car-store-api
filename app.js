const express = require('express');
const path = require('path');
require('dotenv/config');

const database = require('./src/database/mongoDB');
// Import routes
const homeRoute = require('./src/routes/Home');
const carRoute = require('./src/routes/CarApi');
const docsRoute = require('./src/routes/ApiDocs');
const notFoundRoute = require('./src/routes/NotFound');

const app = express();
const port = 8000;

app.set('view engine', 'ejs');
app.set('views', 'src/views');

// Body parser
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Middleware
app.use(express.static(path.join(__dirname, 'public')));
// Routes
app.use('/cars', carRoute.routes);
app.use('/docs', docsRoute);
app.use('/', homeRoute);
app.use('*', notFoundRoute);

// Connect to db
database.attach();

app.listen(port, () => {
  console.log(`Running on ${port} 🚀`);
});
