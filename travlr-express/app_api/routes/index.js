const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const authController = require('../../controllers/auth');
const tripController = require('../../controllers/trips');
const { authenticate } = require('../../middleware/auth');

router.post('/login', authController.login);

router.get('/trips', tripController.getTrips);
router.post('/trips', authenticate, tripController.addTrip);
router.put('/trips/:tripCode', authenticate, tripController.updateTrip);
router.delete('/trips/:tripCode', authenticate, tripController.deleteTrip);

module.exports = router;


