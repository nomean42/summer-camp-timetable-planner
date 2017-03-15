var models = {
	Admin: require('./lib/admin'),
	Masterclass: require('./lib/masterclass'),
	Member: require('./lib/member'),
	Student: require('./lib/student'),
	Teacher: require('./lib/teacher')
};


/**
 * @typedef {{
 *     Admin: Admin,
 *     Masterclass: Masterclass,
 *     Member: Member,
 *     Student: Student,
 *     Teacher: Teacher
 * }}
 */
var Models;


/**
 * @type {Models}
 */
module.exports = models;
