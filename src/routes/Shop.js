const express = require('express');

const router = express.Router();
const shopController = require('../controllers/shop');
// Home page
router.get('/', shopController.getIndex);
// Show all cars
router.get('/cars', shopController.getCars);
// Get a car by its ID and go to details page
router.get('/cars/:carId', shopController.getCarsId);
// Go to cart page
router.get('/cart', shopController.getCart);
// Post product to cart
router.post('/cart', shopController.postCart);
// Go to order page
router.get('/orders', shopController.getOrders);
// Go to checkout page
router.get('/checkout', shopController.getCheckout);

module.exports = router;
