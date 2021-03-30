const Data = require('../models/Car');

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

exports.getCars = async (req, res) => {
  const cars = await Data.find();
  res.render('shop/car-list', {
    pageTitle: 'All Cars',
    cars,
    path: '/cars',
    hasCars: cars.length > 0,
    activeStore: true,
    productCSS: true
  });
};

exports.getCarsId = async (req, res) => {
  try {
    const car = await Data.findById(req.params.carId);
    res.render('shop/car-details', {
      pageTitle: car.make,
      car,
      path: '/cars'
    });
  } catch (err) {
    res.json({ message: err });
  }
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

exports.postCart = async (req, res) => {
  try {
    const car = await Data.findById(req.body.carId);
    console.log(car);
  } catch (err) {
    res.json({ message: err });
  }
  res.redirect('/cart');
};

exports.getOrders = (req, res) => {
  res.render('shop/orders', {
    pageTitle: 'Orders',
    path: '/orders'
  });
};

exports.getCheckout = (req, res) => {
  res.render('shop/checkout', {
    pageTitle: 'Checkout',
    path: '/checkout'
  });
};
