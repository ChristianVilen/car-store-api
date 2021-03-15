const express = require('express');

const router = express.Router();
const Data = require('../models/Car');

const cars = [];

// Post offer
router.post('/', async (req, res) => {
  const offerData = new Data({
    make: req.body.make,
    model: req.body.model,
    year: req.body.year,
    power: req.body.power,
    price: req.body.price
  });

  try {
    await offerData.save();
    cars.push({
      make: req.body.make,
      model: req.body.model,
      year: req.body.year,
      power: req.body.power,
      price: req.body.price
    });
  } catch (err) {
    res.json({ message: err });
  }
});

// Returns all cars
router.get('/', async (req, res) => {
  try {
    const data = await Data.find();
    res.json(data);
  } catch (err) {
    res.json({ message: err });
  }
});

router.get('/add', (req, res) => {
  res.render('add-cars', {
    pageTitle: 'Add Cars To Store',
    path: 'cars/add',
    formsCSS: true,
    productCSS: true,
    activeAddCar: true
  });
});

// Get specific car
router.get('/:id', async (req, res) => {
  try {
    const car = await Data.findById(req.params.id);
    res.json(car);
  } catch (err) {
    res.json({ message: err });
  }
});

// Delete car
router.delete('/:id', async (req, res) => {
  try {
    const deletedCar = await Data.findByIdAndRemove(req.params.id);
    res.json({ message: `Deleted car id: ${deletedCar.id}` });
  } catch (err) {
    res.json({ message: err });
  }
});

// Update car
router.patch('/:id', async (req, res) => {
  try {
    const updatedCar = await Data.findByIdAndUpdate(
      req.params.id,
      {
        $set: {
          make: req.body.make,
          model: req.body.model,
          year: req.body.year,
          power: req.body.power,
          price: req.body.price
        }
      },
      { new: true }
    );
    res.json(updatedCar);
  } catch (err) {
    res.json({ message: err });
  }
});

exports.routes = router;
exports.cars = cars;
