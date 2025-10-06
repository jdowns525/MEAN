const express = require('express');
const router = express.Router();
const tripController = require('../controllers/trips');
const apiRouter = require('./app_api/routes/index');
app.use('/api', apiRouter);

router.get('/trips', tripController.getTrips);
router.get('/trips/:tripCode', tripController.getTripByCode);

module.exports = router;

