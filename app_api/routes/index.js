const express = require('express');
const router = express.Router();

const tripsRouter = require('./trips');

// Mount the trips routes under /trips
router.use('/trips', tripsRouter);

module.exports = router;

