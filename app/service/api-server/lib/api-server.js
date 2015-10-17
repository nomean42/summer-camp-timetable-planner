var express = require('express');
var http = require('http');

/**
 *
 * @constructor
 */
var ApiServer = function() {
	this._expressApp = express();
	var port = 1337;

	http.createServer(this._expressApp)
		.listen(port, function() {
			console.log('Express server listening on port', port);
		});
};

/**
 *
 * @type {ApiServer}
 */
module.exports = ApiServer;
