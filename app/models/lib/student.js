var User = require('./user.js');



/**
 * @param {User.Params} baseParams
 * @param {Student.Params} extendParams
 * @constructor
 */
Student = function(baseParams, extendParams) {
	this._birthdate = extendParams.birthdate;
	this._squad = extendParams.squad;
	this._status = Student.Status.FREE;

	User.call(this, baseParams, User.Type.STUDENT);
};
Student.prototype = Object.create(User.prototype);


/**
 * @return {Student.Squad}
 */
Student.prototype.getSquad = function() {
	return this._squad;
};


/**
 * @return {Student.Status}
 */
Student.prototype.getStatus = function() {
	return this._status;
};


/**
 * @type {Date}
 * @protected
 */
Student.prototype._birthdate;


/**
 * @type {Student.Squad}
 * @protected
 */
Student.prototype._squad;


/**
 * @type {Student.Status}
 * @protected
 */
Student.prototype._status;


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
 *     birthday: Date,
 *     squad: Student.Squad,
 *     status: Student.Status
 * }}
 */
Student.Params;

module.exports = Student;
