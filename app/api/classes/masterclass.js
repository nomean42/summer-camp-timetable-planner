


/**
 *
 * @param {{
 *      id: string
 *      version: number
 *      subversion: number
 *      agePerm: Masterclass.Permission
 *      date: Date
 *      owner: Teacher.Id
 *      maxLoad: number
 *      participants: Array.<Member.Id>
 *      masterClassDescription: Masterclass.Description
 * }} masterclassParams
 * @constructor
 */

Masterclass = function(masterclassParams) {
	this._id = masterclassParams.id;
	this._version = masterclassParams.version;
	this._subversion = masterclassParams.subversion;
	this._agePerm = masterclassParams.agePerm;
	this._date = masterclassParams.date;
	this._master = masterclassParams.master;
	this._maxLoad = masterclassParams.maxLoad;
	this._students = masterclassParams.students;
	this._masterClassDescription = masterclassParams.masterClassDescription;
};


/**
 * @type {string}
 * @private
 */
Masterclass.prototype._id;


/**
 * @type {number}
 * @private
 */
Masterclass.prototype._version;


/**
 * @type {number}
 * @private
 */
Masterclass.prototype._subversion;


/**
 * @type {Masterclass.permission}
 * @private
 */
Masterclass.prototype._agePerm;


/**
 * @type {Date}
 * @private
 */
Masterclass.prototype._date;


/**
 * @type {Teacher}
 * @private
 */
Masterclass.prototype._master;


/**
 * @type {number}
 */
Masterclass.prototype._maxLoad;


/**
 * @type {number}
 * @private
 */
Masterclass.prototype._students;


/**
 * @type {Masterclass.Description}
 */
Masterclass.prototype._masterClassDescription;


/**
 *
 * @enum {string}
 */
Masterclass.Permission = {
	ADULT: 'adult',
	YOUNG: 'young',
	ANY: 'any'
};


/**
 *
 * @typedef {{
 *      title: string
 *      textDescription: string
 *      picture: string
 * }}
 */
Masterclass.Description;
