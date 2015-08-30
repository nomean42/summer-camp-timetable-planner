/**
 *
 * @param {{
 * firstName: string
 * secondName: string
 * thirdName: string
 * id: number
 * whoIs: Alive.WhoIs
 * }} paramsAlive
 * @constructor
 */
Alive = function(paramsAlive) {
	this.firstName = paramsAlive.firstName;
	this.secondName = paramsAlive.secondName;
	this.thirdName = paramsAlive.thirdName;
	this.id = paramsAlive.id;
	this.whoIs = paramsAlive.whoIs;

};


/**
 *
 * @param paramsAlive
 */
Alive.prototype.createAlive = function(paramsAlive) {
	var newParamsAlive = {};
	var currentId = idEnum.length + 1;
	newParamsAlive.firstName = paramsAlive.firstName;
	newParamsAlive.secondName = paramsAlive.secondName;
	newParamsAlive.thirdName = paramsAlive.thirdName;
	newParamsAlive.whoIs = paramsAlive.whoIs;
	newParamsAlive.id = currentId;
	idEnum[idEnum.length] = currentId;
	var currentAlive = new Alive(newParamsAlive);
	aliveDataBase[currentId] = currentAlive;
};


/**
 *
 * @enum {string}
 */
Alive.WhoIs =  {
	STUDENT: 'student',
	TEACHER: 'teacher',
	ADMIN: 'admin'
};
