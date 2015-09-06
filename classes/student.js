/**
 *
 * @param {Member.Params} baseParams
 * @param {Student.Params} extendParams
 * @constructor
 */
Student = function(baseParams, extendParams) {
	this._birthday = extendParams.birthday;
	this.squad = extendParams.squad;
	this.status = Student.Status.FREE;

    Member.call(this, baseParams, Member.Type.STUDENT);
};
Student.prototype = Object.create(Member.prototype);

/**
 * @type {Date}
 * @protected
 */
Student.prototype._birthday;

/**
 * @type {Student.Squad}
 */
Student.prototype.squad;


/**
 * @type {Student.Status}
 */
Student.prototype.status;

/**
 * @enum {string}
 */
Student.Squad = {
	FIRST: '1',
	SECOND: '2',
	THIRD: '3',
	FOURTH: '4',
	FIFTH: '5'
};

/**
 * @enum {string}
 */
Student.Status = {
	FREE: 'free',
	BUSY: 'busy'
};

/**
 * @typedef {{
 * 		birthday: Date
 *		squad: Student.Squad
 *		status: Student.Status
 * }}
 */
Student.Params;
