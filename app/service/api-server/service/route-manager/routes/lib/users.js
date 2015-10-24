var express = require('express');


/**
 * @return {express.Router}
 */
var users = function() {
	var router = express.Router();
	router.get('/', function(req, res, next) {
		next();
		return res.send('USERS!');
	});
	router.get('/id/:id', function(req, res, next) {
		var id = req.params.id;
		return res.send('id:' + id);
	});
	router.get('/count', function(req, res, next) {
		return res.send('count!');
	});
	router.get('/create', function(req, res, next) {
		return res.send('user create!');
	});

	return router;
};


/**
 *  * @type {Function}
 */
module.exports = users;
