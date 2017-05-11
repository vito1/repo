'use strict';
var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('cssglossar', {title:'cssglossar'});
});

module.exports = router;