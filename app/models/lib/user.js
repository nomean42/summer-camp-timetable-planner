


/**
 * @param  {User.Params} paramsUser
 * @param {User.Type} type
 * @constructor
 */
User = function(paramsUser, type) {
	this._firstName = paramsUser.firstName;
	this._secondName = paramsUser.secondName;
	this._thirdName = paramsUser.thirdName;
	this._id = null;
	this._type = type;
	this._gender = paramsUser.gender;
};


/**
 * @return {string}
 */
User.prototype.getFullName = function() {
	return this._secondName + ' ' + this._firstName + ' ' + this._thirdName;
};


/**
 * @param {User.Id} id
 */
User.prototype.setId = function(id) {
	if (this._id === null) {
		this._id = id;
	}
	else {
		var name = this.getFullName();
		console.log('id for', name, 'already set');
	}
};


/**
 * @return {User.Id}
 */
User.prototype.getId = function() {
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
User.prototype._firstName;


/**
 * @type {string}
 * @protected
 */
User.prototype._secondName;


/**
 * @type {string}
 * @protected
 */
User.prototype._thirdName;


/**
 * @type {?number}
 * @protected
 */
User.prototype._id;


/**
 * @type {User.Type}
 * @protected
 */
User.prototype._type;


/**
 * @type {User.Gender}
 * @protected
 */
User.prototype._gender;


/**
 * @enum {string}
 */
User.Gender = {
	MALE: 'Male',
	FEMALE: 'Female'
};


/**
 * @enum {string}
 */
User.Type = {
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
 *     gender: User.Gender
 * }}
 */
User.Params;


/**
  * @typedef {?string}
 */
User.Id;

module.exports = User;
