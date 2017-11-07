


/**
 * @param  {Member.Params} paramsMember
 * @param {Member.Type} type
 * @constructor
 */
Member = function(paramsMember, type) {
	this._firstName = paramsMember.firstName;
	this._secondName = paramsMember.secondName;
	this._thirdName = paramsMember.thirdName;
	this._id = null;
	this._type = type;
	this._gender = paramsMember.gender;
};


/**
 * @return {string}
 */
Member.prototype.getFullName = function() {
	return this._secondName + ' ' + this._firstName + ' ' + this._thirdName;
};
//TODO get short name


/**
 * @param {Member.Id} id
 */
Member.prototype.setId = function(id) {
	if (this._id === null) {
		this._id = id;
	}
	else {
		var name = this.getFullName();
		console.log('id for', name, 'already set');
	}
};


/**
 * @return {Member.Id}
 */
Member.prototype.getId = function() {
	if (this._id !== null) {
		return this._id;
	}
	else {
		console.log('id is not set');
	}
};


/**
 * @type {string}
 * @protected
 */
Member.prototype._firstName;


/**
 * @type {string}
 * @protected
 */
Member.prototype._secondName;


/**
 * @type {string}
 * @protected
 */
Member.prototype._thirdName;


/**
 * @type {?number}
 * @protected
 */
Member.prototype._id;


/**
 * @type {Member.Type}
 * @protected
 */
Member.prototype._type;


/**
 * @type {Member.Gender}
 * @protected
 */
Member.prototype._gender;


/**
 *
 * @enum {string}
 */
Member.Gender = {
	MALE: 'Male',
	FEMALE: 'Female'
};


/**
 *
 * @enum {string}
 */
Member.Type = {
	STUDENT: 'student',
	TEACHER: 'teacher',
	ADMIN: 'admin'
};


/**
 * @typedef {{
 *     firstName: string
 *     secondName: string
 *     thirdName: string
 *     id: string
 *     gender: Member.Gender
 * }}
 */
Member.Params;


/**
  * @typedef {?string}
 */
Member.Id;

module.exports = Member;
