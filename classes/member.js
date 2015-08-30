/**
 *
 * @param {{
 * firstName: string
 * secondName: string
 * thirdName: string
 * id: number
 * whoIs: Member.WhoIs
 * }} paramsMember
 * @constructor
 */
Member = function(paramsMember) {
	this._firstName = paramsMember.firstName;
	this._secondName = paramsMember.secondName;
	this._thirdName = paramsMember.thirdName;
	this._id = null;
	this._whoIs = paramsMember.whoIs;
};


/**
 *
 * @param {number} id
 */
Member.prototype.setId = function(id) {
	if (this._id === null) {
		this._id = id;
	}
};


/**
 *
 * @param paramsMember
 */
Member.prototype.createMember = function(paramsMember) {
	var newParamsMember = {};
	var currentId = idEnum.length + 1;
	newParamsMember.firstName = paramsMember.firstName;
	newParamsMember.secondName = paramsMember.secondName;
	newParamsMember.thirdName = paramsMember.thirdName;
	newParamsMember.whoIs = paramsMember.whoIs;
	newParamsMember.id = currentId;
	idEnum[idEnum.length] = currentId;
	var currentMember = new Member(newParamsMember);
	memberDataBase[currentId] = currentMember;
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
 *
 * @enum {string}
 */
Member.WhoIs =  {
	STUDENT: 'student',
	TEACHER: 'teacher',
	ADMIN: 'admin'
};
