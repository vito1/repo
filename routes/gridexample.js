'use strict';
var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('gridexample', {title:'gridexample'});
});

module.exports = router;