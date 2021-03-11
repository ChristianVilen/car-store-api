const mongoose = require("mongoose");

// Schema
const DataSchema = new mongoose.Schema({
  make: {
    type: String,
    required: true
  },
  model: {
    type: String,
    required: true
  },
  year: {
    type: Number,
    required: true,
    default: 0
  },
  power: {
    type: Number,
    default: 0
  },
  price: {
    type: Number,
    default: 0
  }
});

module.exports = mongoose.model("Data", DataSchema);
