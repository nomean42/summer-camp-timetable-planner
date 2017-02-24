


/**
 * @param {application} expressApp
 * @constructor
 */
Routes = function(expressApp) {
	this._expressApp = expressApp;
	this._routes = {users: require('./users')};
};


/**
 * @param {string} routeName
 * @return {expressApp.use}
 */
Routes.prototype.initRoute = function(routeName) {
	return this._expressApp.use('/' + routeName, this._routes[routeName]());
};


/**
 * @type {Object}
 */
Routes.prototype._routes;


/**
 * @type {application}
 */
Routes.prototype._expressApp;


/**
 * @type {Routes}
 */
module.exports = Routes;
