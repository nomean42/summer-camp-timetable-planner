var Member = require('./member.js');



/**
 * @param {Member.Params} baseParams
 * @constructor
 */
Admin = function(baseParams) {
	Member.call(this, baseParams, Member.Type.ADMIN);
};
Admin.prototype = Object.create(Member.prototype);

module.exports = Admin;
