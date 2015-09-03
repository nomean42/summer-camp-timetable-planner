/**
 *
 * @param {{
 * firstName: string
 * secondName: string
 * thirdName: string
 * id: number
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
 *@
 */
Member.prototype.setId = function() {
	if (this._id === null) {
		this._id = memberDataBase.length + 1;
	}
	else {
		console.log('id for', this, 'already set');
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

Member.prototype._gender;

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
