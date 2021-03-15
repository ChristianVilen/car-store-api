const express = require('express');
const path = require('path');

const router = express.Router();

const rootDir = require('../helpers/path');
const carData = require('./CarApi');

router.get('/', (req, res) => {
  console.log('Home.js', carData.cars);
  res.sendFile(path.join(rootDir, 'src', 'views', 'home.html'));
});

module.exports = router;
