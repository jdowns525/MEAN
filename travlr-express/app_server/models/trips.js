const mongoose = require('mongoose');

const tripSchema = new mongoose.Schema({
  name: { type: String, required: true },
  destination: { type: String, required: true },
  description: String,
  price: Number,
  startDate: Date,
  endDate: Date
});

module.exports = mongoose.model('Trip', tripSchema);


