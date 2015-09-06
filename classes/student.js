/**
 *
 * @param {{
 * 		firstName: string
 * 		secondName: string
 * 		thirdName: string
 * 		id: string
 * 		type: Member.Type
 * 		gender: Member.Gender
 * 		age: number
 *		squad: Student.Squad
 *		status: Student.Status
 * }}params
 * @constructor
 */
Student = function(params) {
	var insideParams = {};

	insideParams.firstName = params.firstName;
	insideParams.secondName = params.secondName;
	insideParams.thirdName = params.thirdName;
	insideParams.id = params.id;
	insideParams.type = Member.Type.STUDENT;
	insideParams.age = params.age;
	insideParams.squad = params.squad;
	insideParams.status = Student.Status.FREE;

    Member.call(this, insideParams);
};
Student.prototype = Object.create(Member.prototype);

/**
 *@type {number}
 */
Student.prototype.age;

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
