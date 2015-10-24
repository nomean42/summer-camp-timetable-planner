var express = require('express');


/**
 * @return {express.Router}
 */
var masterclasses = function() {
	var router = express.Router();
	router.get('/', function(req, res, next) {
		next();
		return res.send('MASTERCLASSES!');
	});
	router.get('/create', function(req, res, next) {
		return res.send('masterclass create!');
	});

	return router;
};


/**
 *  * @type {Function}
 */
module.exports = masterclasses;
