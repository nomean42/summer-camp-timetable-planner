/**
 *
 * @param {Member.Params} baseParams
 * @param {Teacher.Params}teachParams
 * @constructor
 */
Teacher = function(baseParams, teachParams) {
	Member.call(this, baseParams, Member.Type.TEACHER);
};
Teacher.prototype = Object.create(Member.prototype);

/**
 * @typedef {{
 *      hostOf: todo
 * }}
 */
Teacher.Params;
