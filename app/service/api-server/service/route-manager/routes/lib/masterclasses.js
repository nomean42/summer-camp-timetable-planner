var express = require('express');


/**
 * @return {express.Router}
 */
var masterclasses = function() {
	var router = express.Router();

	//TODO get masterclass by id
	//TODO get masterclass array by params

	router.get('/create', function(req, res, next) {
		return res.send('masterclass create!');
	});

	//TODO add update request
	//TODO add remove request

	return router;
};


/**
 * @type {function(express.Router)}
 */
module.exports = masterclasses;
