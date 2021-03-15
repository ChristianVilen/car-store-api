const express = require('express');

const router = express.Router();

const carData = require('./CarApi');

router.get('/', (req, res) => {
  res.render('home', {
    pageTitle: 'Car Store',
    cars: carData.cars,
    path: '/',
    hasCars: carData.cars.length > 0,
    activeStore: true,
    productCSS: true
  });
});

module.exports = router;
