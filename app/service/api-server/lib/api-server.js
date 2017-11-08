var express = require('express');
var http = require('http');
var RouteManager = require('../service/route-manager');



/**
 * @param {ApiServer.ServerConfig}
 * @constructor
 */
var ApiServer = function(serverConfig) {
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
 * @see https://www.npmjs.com/package/express
 * @type {express}
 */
ApiServer.prototype._expressApp;


/**
 * @type {RouteManager}
 */
ApiServer.prototype._routeManager;


/**
 * @typedef {{
 *     port: number
 *}}
 */
ApiServer.ServerConfig;


/**
 * @type {ApiServer}
 */
module.exports = ApiServer;
