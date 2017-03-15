var ApiServer = require('../service/api-server');
var models = require('../models');


/**
 * @constructor
 */
var App = function() {
	this._apiServer = new ApiServer;
	this._models = models;
};


/**
 * @type {ApiServer}
 */
App.prototype._apiServer;


/**
 * @type {Models}
 */
App.prototype._models;


/**
 * @type {App}
 */
module.exports = App;
