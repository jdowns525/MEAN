const express = require('express');
const router = express.Router();
const ctrlTrips = require('../controllers/trips');

router.get('/', ctrlTrips.tripsList);
router.get('/:tripid', ctrlTrips.tripReadOne);
router.post('/', ctrlTrips.tripsCreate);
router.put('/:tripid', ctrlTrips.tripsUpdate);
router.delete('/:tripid', ctrlTrips.tripsDelete);

module.exports = router;

