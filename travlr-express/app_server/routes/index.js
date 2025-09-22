const express = require('express');
const router = express.Router();
const travlr = require('../controllers/travlr');

router.get('/', travlr.index);

module.exports = router;
