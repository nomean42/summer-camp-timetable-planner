/**
 *
 * @param {{
 * firstName: string
 * secondName: string
 * thirdName: string
 * id: string
 * whoIs: Member.WhoIs
 * gender: Member.Gender
 * }} paramsMember
 * @constructor
 */
Member = function(paramsMember) {
	this._firstName = paramsMember.firstName;
	this._secondName = paramsMember.secondName;
	this._thirdName = paramsMember.thirdName;
	this._id = null;
	this._whoIs = paramsMember.whoIs;
	this._gender = paramsMember.gender;
};



/**
 *
 *@return {string}
 */
Member.prototype.getFullName =function() {
	if (typeof (this._firstName) !== 'undefined' || typeof (this._secondName) !== 'undefined' ) {
		return this._firstName + ' ' + this._secondName;
	}
	else {
		console.log('first name or second name is not set');
	}
};


/**
 *
 *
 */
Member.prototype.setId = function() {
	if (this._id === null) {
		this._id = String(memberDataBase.length + 1);
	}
	else {
		var name = this.getFullName();
       	console.log('id for', name, 'already set');
	}
};


/**
 *
 *
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
 * @type {Member.WhoIs}
 * @protected
 */
Member.prototype._whoIs;


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
Member.WhoIs =  {
	STUDENT: 'student',
	TEACHER: 'teacher',
	ADMIN: 'admin'
};
