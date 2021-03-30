const express = require('express');

const router = express.Router();
const adminController = require('../controllers/Admin');
const shopController = require('../controllers/shop');
// /ADMIN
// Returns all cars
router.get('/', shopController.getAllCars);
// Get cars
router.get('/cars', adminController.getCars);
// Delete car
router.delete('/cars/:id', adminController.deleteCar);
// Get specific car
router.get('/cars/:id', adminController.getSpecificCar);
// Update car
router.patch('/cars/:id', adminController.updateCar);
// Post car
router.post('/add-cars', shopController.postCar);
// Get cars
router.get('/add-cars', adminController.getAddCars);

exports.routes = router;
