const express = require("express");

const router = express.Router();
const Data = require("../../models/Car");

// Post offer
router.post("/", async (req, res) => {
  const offerData = new Data({
    make: req.body.make,
    model: req.body.model,
    year: req.body.year,
    power: req.body.power,
    price: req.body.price
  });

  try {
    const savedOffer = await offerData.save();
    res.json(savedOffer);
  } catch (err) {
    res.json({ message: err });
  }
});

// Returns all cars
router.get("/", async (req, res) => {
  try {
    const cars = await Data.find();
    res.json(cars);
  } catch (err) {
    res.json({ message: err });
  }
});

// Get specific car
router.get("/:id", async (req, res) => {
  try {
    const car = await Data.findById(req.params.id);
    res.json(car);
  } catch (err) {
    res.json({ message: err });
  }
});

// Delete car
router.delete("/:id", async (req, res) => {
  try {
    const deletedCar = await Data.findByIdAndRemove(req.params.id);
    res.json({ message: `Deleted car id: ${deletedCar.id}` });
  } catch (err) {
    res.json({ message: err });
  }
});

// Update car
router.patch("/:id", async (req, res) => {
  try {
    const updatedCar = await Data.findByIdAndUpdate(req.params.id, {
      $set: {
        make: req.body.make,
        model: req.body.model,
        year: req.body.year,
        power: req.body.power,
        price: req.body.price
      }
    }, { new: true });
    res.json(updatedCar);
  } catch (err) {
    res.json({ message: err });
  }
});

module.exports = router;
