const express = require('express');
const { getApiData } = require('../controllers/apiController');

const router = express.Router();

// API route to get data
router.get('/data', getApiData);

module.exports = router;