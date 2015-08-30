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
	this.firstName = paramsMember.firstName;
	this.secondName = paramsMember.secondName;
	this.thirdName = paramsMember.thirdName;
	this.id = paramsMember.id;
	this.whoIs = paramsMember.whoIs;

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
	MemberDataBase[currentId] = currentMember;
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
