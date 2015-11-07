var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.send('You\'ve reached the TripWrapper API!');
});

module.exports = router;
