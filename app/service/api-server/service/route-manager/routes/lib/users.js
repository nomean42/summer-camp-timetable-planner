var express = require('express');


/**
 * @return {express.Router}
 */
var users = function() {
	var router = express.Router();

	router.use(function(req, res, next) {
		next();
	})

	router.all('/', function(req, res, next) {
		res.send('users')
		next();
	});

	router.all('/id/:id', function(req, res, next) {
		var id = req.params.id;
		return res.send('user id: ' + id);
	});

	router.all('/param', function(req, res, next) {

	});

	router.all('/create/:name', function(req, res, next) {

	});

	return router;
};


/**
 * @type {function(express.Router)}
 */
module.exports = users;
