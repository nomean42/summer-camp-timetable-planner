var express = require('express');
var http = require('http');
var RouteManager = require('../service/route-manager');
var serverConfig = require('../server-config.json');



/**
 * @constructor
 */
var ApiServer = function() {
	this._expressApp = express();
	this._routeManager = new RouteManager(this._expressApp);
	var port = serverConfig.port;

	http.createServer(this._expressApp)
		.listen(port, function() {
			console.log('Express server listening on port ', port);
		});
	// todo make initial function
	this._routeManager.initRoute('users');
	this._routeManager.initRoute('masterclasses');
};


/**
 * @type {ApiServer}
 */
module.exports = ApiServer;
