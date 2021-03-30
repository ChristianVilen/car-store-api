const express = require('express');

const router = express.Router();
const adminController = require('../controllers/Admin');
const shopController = require('../controllers/shop');

// Post car
router.post('/add-cars', shopController.postCar);
// Get cars
router.get('/add-cars', adminController.getAddCars);
// Get cars
router.get('/cars', adminController.getCars);
// Returns all cars
router.get('/', shopController.getAllCars);
// Get specific car
router.get('/:id', adminController.getSpecificCar);
// Delete car
router.delete('/:id', adminController.deleteCar);
// Update car
router.patch('/:id', adminController.updateCar);

exports.routes = router;
