var express = require('express');
var http = require('http');
var Routes = require('../service/route-manager');
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
	this._routes.initRoute('masterclasses');
};


/**
 *
 * @type {ApiServer}
 */
module.exports = ApiServer;
