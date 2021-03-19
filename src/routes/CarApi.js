const express = require('express');

const router = express.Router();
const carsController = require('../controllers/cars');

// Post car
router.post('/', carsController.postCar);
// Returns all cars
router.get('/', carsController.getAllCars);
// Render cars
router.get('/add', carsController.getAddCars);
// Get specific car
router.get('/:id', carsController.getSpecificCar);
// Delete car
router.delete('/:id', carsController.deleteCar);
// Update car
router.patch('/:id', carsController.updateCar);

exports.routes = router;
