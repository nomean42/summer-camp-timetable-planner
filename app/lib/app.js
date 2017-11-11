var ApiServer = require('../service/api-server');
var models = require('../models');
var serverConfig = require('../server-config.json');



/**
 * @constructor
 */
var App = function() {
	global.summer = {}
	global.summer.models = models;
	this._apiServer = new ApiServer(serverConfig);
};


/**
 * @type {ApiServer}
 */
App.prototype._apiServer;


/**
 * @type {App}
 */
module.exports = App;
