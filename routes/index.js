'use strict';
var express = require('express');
var router = express.Router();
var User = require('../lib/user');


/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Handlebars Works!'});
});


router.post('/register', function(req, res){
	var username= req.body.username;
	var password = req.body.password;
	var firstname = req.body.firstname;
	var lastname = req.body.lastname;

	var newuser = new User();
	newuser.username = username;
	newuser.password = password;
	newuser.firstname = firstname;
	newuser.lastname = lastname;
	newuser.save(function(err, savedUser) {
		if(err) {
			console.log(err);
			return res.status(500).send();
		}

		return res.status(200).send();
	});
});



module.exports = router;