const mongoose = require('mongoose');

const tripSchema = new mongoose.Schema({
  name: { type: String, required: true },
  image: String,
  description1: String,
  description2: String,
  price: Number,
  code: String
});

mongoose.model('trips', tripSchema);

