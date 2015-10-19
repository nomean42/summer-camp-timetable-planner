/**
 *
 * @param {application} expressApp
 * @constructor
 */
Routes = function(expressApp) {
	this._expressApp = expressApp;
	this._routes = {users: require('./lib/users')};

};


/**
 *
 * @param {string} routeName
 */
Routes.prototype.initRoute = function(routeName) {
	return this._expressApp.use('/' + routeName, this._routes[routeName]());
};
module.exports = Routes;


/**
 * @type {Object}
 */
Routes.prototype._routes;


/**
 * @type {application}
 */
Routes.prototype._expressApp;