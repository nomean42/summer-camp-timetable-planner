var User = require('./user.js');



/**
 * @param {User.Params} baseParams
 * @constructor
 */
var Teacher = function(baseParams) {
	User.call(this, baseParams, User.Type.TEACHER);
};
Teacher.prototype = Object.create(User.prototype);

module.exports = Teacher;
