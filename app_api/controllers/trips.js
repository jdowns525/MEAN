const mongoose = require('mongoose');
const Trip = mongoose.model('trips');

const tripsList = async (req, res) => {
  try {
    const trips = await Trip.find();
    res.status(200).json(trips);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const tripReadOne = async (req, res) => {
  try {
    const trip = await Trip.findById(req.params.tripid);
    if (!trip) return res.status(404).json({ message: 'Trip not found' });
    res.status(200).json(trip);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const tripsCreate = async (req, res) => {
  try {
    const trip = await Trip.create(req.body);
    res.status(201).json(trip);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

const tripsUpdate = async (req, res) => {
  try {
    const trip = await Trip.findByIdAndUpdate(req.params.tripid, req.body, { new: true });
    if (!trip) return res.status(404).json({ message: 'Trip not found' });
    res.status(200).json(trip);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

const tripsDelete = async (req, res) => {
  try {
    await Trip.findByIdAndDelete(req.params.tripid);
    res.status(204).end();
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

module.exports = {
  tripsList,
  tripReadOne,
  tripsCreate,
  tripsUpdate,
  tripsDelete
};

