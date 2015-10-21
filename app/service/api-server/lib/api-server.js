var express = require('express');
var http = require('http');
var Routes = require('../routes');
var serverConfig = require('../server-config.json');



/**
 *
 * @constructor
 */
var ApiServer = function() {
	this._expressApp = express();
	this._routes = new Routes(this._expressApp);
	var port = serverConfig.port;

	http.createServer(this._expressApp)
		.listen(port, function() {
			console.log('Express server listening on port', port);
		});

	this._routes.initRoute('users');
};


/**
 *
 * @type {ApiServer}
 */
module.exports = ApiServer;


