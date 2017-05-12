'use strict';
var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('htmlglossar', {title:'htmlglossar'});
});

module.exports = router;