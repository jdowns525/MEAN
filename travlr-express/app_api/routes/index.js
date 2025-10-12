const express = require('express');
const router = express.Router();
const tripController = require('../controllers/trips');

// CRUD Routes
router.get('/trips', tripController.tripsList);
router.get('/trips/:tripCode', tripController.tripsReadOne);
router.post('/trips', tripController.tripsCreate);
router.put('/trips/:tripCode', tripController.tripsUpdate);
router.delete('/trips/:tripCode', tripController.tripsDelete);

module.exports = router;

