
Student = function (params) {
	var insideParams = {};

	insideParams.firstName = params.firstName;
	insideParams.secondName = params.secondName;
	insideParams.thirdName = params.thirdName;
	insideParams.id = params.id;
	insideParams.whoIs = Member.WhoIs.STUDENT;
	insideParams.gender = params.gender;
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
 *
 * @enum
 */
Student.Squad = {
	FIRST: '1',
	SECOND: '2',
	THIRD: '3',
	FOURTH: '4',
	FIFTH: '5'
};


Student.Status = {
	FREE: 'free',
	BUSY: 'busy'
};
