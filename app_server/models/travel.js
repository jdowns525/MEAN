const mongoose = require('mongoose');

if (!mongoose.models.Trip) {
  const tripSchema = new mongoose.Schema({
    name: String,
    image: String,
    description1: String,
    description2: String
  });

  mongoose.model('Trip', tripSchema);
}

