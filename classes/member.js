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
	this._id = paramsMember.id;
	this._whoIs = paramsMember.whoIs;

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
 * @protected
 */
Member.prototype._firstName;


/**
 * @protected
 */
Member.prototype._secondName;

/**
 * @protected
 */
Member.prototype._thirdName;

/**
 * @protected
 */
Member.prototype._id;

/**
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
