const mongoose = require('mongoose');
const Trip = mongoose.model('Trip');

// GET /api/trips
const getTrips = async (req, res) => {
  try {
    const trips = await Trip.find({});
    res.status(200).json(trips);
  } catch (err) {
    res.status(500).json({ message: 'Error retrieving trips', error: err });
  }
};

// GET /api/trips/:tripCode
const getTripByCode = async (req, res) => {
  try {
    const trip = await Trip.findOne({ code: req.params.tripCode });
    if (!trip) {
      return res.status(404).json({ message: 'Trip not found' });
    }
    res.status(200).json(trip);
  } catch (err) {
    res.status(500).json({ message: 'Error retrieving trip', error: err });
  }
};

// POST /api/trips
const addTrip = async (req, res) => {
  try {
    const trip = new Trip(req.body);
    await trip.save();
    res.status(201).json(trip);
  } catch (err) {
    res.status(400).json({ message: 'Error adding trip', error: err });
  }
};

// PUT /api/trips/:tripCode
const updateTrip = async (req, res) => {
  try {
    const trip = await Trip.findOneAndUpdate(
      { code: req.params.tripCode },
      req.body,
      { new: true, runValidators: true }
    );
    if (!trip) {
      return res.status(404).json({ message: 'Trip not found' });
    }
    res.status(200).json(trip);
  } catch (err) {
    res.status(400).json({ message: 'Error updating trip', error: err });
  }
};

// DELETE /api/trips/:tripCode
const deleteTrip = async (req, res) => {
  try {
    const trip = await Trip.findOneAndDelete({ code: req.params.tripCode });
    if (!trip) {
      return res.status(404).json({ message: 'Trip not found' });
    }
    res.status(204).json({ message: 'Trip deleted successfully' });
  } catch (err) {
    res.status(500).json({ message: 'Error deleting trip', error: err });
  }
};

module.exports = {
  getTrips,
  getTripByCode,
  addTrip,
  updateTrip,
  deleteTrip
};

