var express = require('express');


/**
 * @param {IDataBase} database
 * @return {express.Router}
 */
var users = function(database) {
	var router = express.Router();

	router.all('/id/:id', function(req, res, next) {
		var id = req.params.id;
		var result = database.get(Database.Type.USER, 'id', id);
		return res.send(result);
	});

	//TODO resolve linter conflicts
	router.all('/param', function(req, res, next) {
		var isRequestCorrect = function(reqest) {
			for (var param in reqest) {
				return summer.models.User[param];
			}
			//request is empty!!!
			return false;
		};
		if (isRequestCorrect(req.query)) {
			var request = req.query;
			for (var param in request) {
				var result = database.get(Database.Type.USER, param, request[param]);
				return res.send(result);
			}
		}
	});

	router.all('/create/:name', function(req, res, next) {
		var name = req.params.name;
		var newUser = new summer.models.User({firstName: name}, summer.models.User.Type.STUDENT);
		return res.send(newUser.getFullName());
	});

	//TODO add update request
	//TODO add remove request

	return router;
};


/**
 * @type {Function}
 */
module.exports = users;
