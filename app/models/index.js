var models = {
	Admin: require('./lib/admin'),
	Masterclass: require('./lib/masterclass'),
	User: require('./lib/user'),
	Student: require('./lib/student'),
	Teacher: require('./lib/teacher')
};


/**
 * @typedef {{
 *     Admin: Admin,
 *     Masterclass: Masterclass,
 *     User: User,
 *     Student: Student,
 *     Teacher: Teacher
 * }}
 */
var Models;


/**
 * @type {Models}
 */
module.exports = models;
