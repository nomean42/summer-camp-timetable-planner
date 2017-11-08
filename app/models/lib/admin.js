var User = require('./user.js');



/**
 *
 * @param {User.Params} baseParams
 * @constructor
 */
Admin = function(baseParams) {
	User.call(this, baseParams, User.Type.ADMIN);
};
Admin.prototype = Object.create(User.prototype);

module.exports = Admin;
