var express = require('express');
var router = express.Router();

var weatherController = require('../controllers/weather-controller');
//localhost 3000
router.get('/', weatherController.lowerCaseQuery,weatherController.getWeather);

module.exports = router;
