const Data = require('../models/Car');

const cars = [];

exports.postCar = async (req, res) => {
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
};

exports.getAllCars = async (req, res) => {
  try {
    const data = await Data.find();
    res.json(data);
  } catch (err) {
    res.json({ message: err });
  }
};

exports.getCars = (req, res) => {
  res.render('shop/car-list', {
    pageTitle: 'All Cars',
    cars,
    path: '/cars',
    hasCars: cars.length > 0,
    activeStore: true,
    productCSS: true
  });
};

exports.getIndex = async (req, res) => {
  try {
    const data = await Data.find();
    res.render('shop/index', {
      pageTitle: 'Car Store',
      data,
      path: '/',
      hasCars: data.length > 0,
      activeStore: true,
      productCSS: true
    });
  } catch (err) {
    res.json({ message: err });
  }
};

exports.getCart = (req, res) => {
  res.render('shop/cart', {
    pageTitle: 'Cart',
    path: '/cart'
  });
};

exports.getCheckout = (req, res) => {
  res.render('shop/checkout', {
    pageTitle: 'Checkout',
    path: '/checkout'
  });
};

exports.cars = cars;
