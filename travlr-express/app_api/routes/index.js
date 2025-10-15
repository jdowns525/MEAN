const express = require('express');
const router = express.Router();

const authController = require('../controllers/auth');
const tripController = require('../controllers/trips');
const { authenticate } = require('../middleware/auth');

// Login route
router.post('/login', authController.login);

// Trip routes
router.get('/trips', tripController.getTrips);
router.get('/trips/:tripCode', tripController.getTripByCode);
router.post('/trips', authenticate, tripController.addTrip);
router.put('/trips/:tripCode', authenticate, tripController.updateTrip);
router.delete('/trips/:tripCode', authenticate, tripController.deleteTrip);

module.exports = router;


