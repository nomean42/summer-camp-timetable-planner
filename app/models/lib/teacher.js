


/**
 *
 * @param {Member.Params} baseParams
 * @constructor
 */
Teacher = function(baseParams) {
	Member.call(this, baseParams, Member.Type.TEACHER);
};
Teacher.prototype = Object.create(Member.prototype);

module.exports = Teacher;
