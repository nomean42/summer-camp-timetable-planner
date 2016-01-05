var express = require('express');


/**
 * @param {IDataBase} database
 * @return {express.Router}
 */
var users = function(database) {
	var router = express.Router();

	router.all('/id/:id', function(req, res, next) {
		var id = req.params.id;
		var result = database.get(Database.Type.MEMBER, 'id', id);
		return res.send(result);
	});

	//TODO resolve linter conflicts
	router.all('/param', function(req, res, next) {
		var isRequestCorrect = function(reqest) {
			for (var param in reqest) {
				return summer.models.Member[param];
			}
			//request is empty!!!
			return false;
		};
		if (isRequestCorrect(req.query)) {
			var request = req.query;
			for (var param in request) {
				var result = database.get(Database.Type.MEMBER, param, request[param]);
				return res.send(result);
			}
		}
	});

	router.all('/create/:name', function(req, res, next) {
		var name = req.params.name;
		var newMember = new summer.models.Member({firstName: name}, summer.models.Member.Type.STUDENT);
		return res.send(newMember.getFullName());
	});

	//TODO add update request
	//TODO add remove request

	return router;
};


/**
 * @type {Function}
 */
module.exports = users;
