const express = require('express');
const router = express.Router();

const tripController = require('../controller/trip.controller');

//geta all trips
router.get('/', tripController);
module.exports = router;