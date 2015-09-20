/**
 *
 * @param {{
 *      id: string
 *      version: number
 *      subversion: number
 *      agePerm: Masterclass.Permission
 *      date: Date
 *      owner: Teacher todo
 *      maxLoad: number
 *      participants: Array.<Member.Id>
 *      masterClassDescription: Masterclass.Description todo
 * }} masterclassParams
 * @constructor
 */

Masterclass = function(masterclassParams) {
	this._id = masterclassParams.id;
	this._version = masterclassParams.version;
	this._subversion = masterclassParams.subversion;
	this._agePerm = masterclassParams.agePerm;
	this.date = masterclassParams.date;
	this.owner = masterclassParams.owner;
	this._maxLoad = masterclassParams.maxLoad;
	this.participants = masterclassParams.participants;
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
 */
Masterclass.prototype.date;


/**
 * @type {Teacher}
 */
Masterclass.prototype.owner;


/**
 * @type {number}
 */
Masterclass.prototype._maxLoad;


/**
 * @type {number}
 */
Masterclass.prototype.participants;


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
