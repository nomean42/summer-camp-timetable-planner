var routes = require('../routes');



/**
 * @param {express} expressApp
 * @constructor
 */
RouteManager = function(expressApp) {
	this._expressApp = expressApp;
};


/**
 * @param {string} routeName
 * @return {express.use}
 */
RouteManager.prototype.initRoute = function(routeName) {
	return this._expressApp.use('/' + routeName, routes[routeName]());
};


/**
 * @see https://www.npmjs.com/package/express
 * @type {express}
 */
RouteManager.prototype._expressApp;


/**
 * @type {RouteManager}
 */
module.exports = RouteManager;
