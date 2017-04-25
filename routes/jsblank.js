'use strict';
var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('jsblank', {title:'jsblank'});
});

module.exports = router;