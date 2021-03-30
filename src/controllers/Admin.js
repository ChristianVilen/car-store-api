const Data = require('../models/Car');

exports.getAddCars = (req, res) => {
  res.render('admin/add-cars', {
    pageTitle: 'Add Cars To Store',
    path: 'admin/add-cars',
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
    console.log(req.params);
    const deletedCar = await Data.findByIdAndRemove(req.params.id);
    console.log(`Deleted car id: ${deletedCar.id}`);
  } catch (err) {
    res.json({ message: err });
  }
  res.redirect('/');
};

exports.getCars = async (req, res) => {
  try {
    const data = await Data.find();
    res.render('admin/cars', {
      pageTitle: 'Admin Cars',
      data,
      path: '/admin/cars',
      hasCars: data.length > 0,
      activeStore: true,
      productCSS: true
    });
  } catch (err) {
    res.json({ message: err });
  }
};
