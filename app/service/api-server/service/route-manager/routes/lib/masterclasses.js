var express = require('express');


/**
 * @return {express.Router}
 */
var masterclasses = function() {
	var router = express.Router();

	router.get('/create', function(req, res, next) {
		return res.send('masterclass create!');
	});

	return router;
};


/**
 * @type {function(express.Router)}
 */
module.exports = masterclasses;
