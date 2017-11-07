var Member = require('./member.js');



/**
 *
 * @param {User.Params} baseParams
 * @constructor
 */
Teacher = function(baseParams) {
	User.call(this, baseParams, User.Type.TEACHER);
};
Teacher.prototype = Object.create(User.prototype);

module.exports = Teacher;
