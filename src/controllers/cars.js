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

exports.getAddCars = (req, res) => {
  res.render('add-cars', {
    pageTitle: 'Add Cars To Store',
    path: 'cars/add',
    formsCSS: true,
    productCSS: true,
    activeAddCar: true
  });
};

exports.getSpecificCar = async (req, res) => {
  try {
    const car = await Data.findById(req.params.id);
    res.json(car);
  } catch (err) {
    res.json({ message: err });
  }
};

exports.updateCar = async (req, res) => {
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
};

exports.deleteCar = async (req, res) => {
  try {
    const deletedCar = await Data.findByIdAndRemove(req.params.id);
    res.json({ message: `Deleted car id: ${deletedCar.id}` });
  } catch (err) {
    res.json({ message: err });
  }
};

exports.getCars = (req, res) => {
  res.render('home', {
    pageTitle: 'Car Store',
    cars,
    path: '/',
    hasCars: cars.length > 0,
    activeStore: true,
    productCSS: true
  });
};

exports.cars = cars;
