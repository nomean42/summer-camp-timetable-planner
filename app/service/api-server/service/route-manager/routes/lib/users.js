var express = require('express');


/**
 * @param {IDataBase} database
 * @return {express.Router}
 */
var users = function(database) {
	var router = express.Router();

	router.all('/id/:id', function(req, res, next) {
		var id = req.params.id;
		//TODO get user by id
		var result = database.get(Database.Type.MEMBER, 'id', id);
		return res.send(result);
	});

	//TODO get user array by params

	//TODO change get to all for all request support (get, post etc)
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
