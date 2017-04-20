'use strict';
var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('historyoftech', {title:'historyoftech'});
});

module.exports = router;