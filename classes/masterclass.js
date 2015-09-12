/**
 *
 * @param {{
 *      id: string
 *      title: MasterClassTitle todo
 *      version: number
 *      subversion: number
 *      agePerm: Masterclass.Permission
 *      date: Date
 *      host: Teacher todo
 *      maxLoad: number
 *      currLoad: number
 *      masterClassDescription: Description todo
 * }} masterclassParams
 * @constructor
 */

Masterclass = function(masterclassParams) {
	this._id = masterclassParams.id;
	this._title = masterclassParams.title;
	this._version = masterclassParams.version;
	this._subversion = masterclassParams.subversion;
	this._agePerm = masterclassParams.agePerm;
	this.date = masterclassParams.date;
	this.host = masterclassParams.host;
	this._maxLoad = masterclassParams.maxLoad;
	this.currLoad = masterclassParams.currLoad;
	this._masterClassDescription = masterclassParams.masterClassDescription;
};

/**
 * @type {string}
 * @private
 */
Masterclass.prototype._id;

/**
 * @type {MasterClassTitle}
 * @private
 */
Masterclass.prototype._title;


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
Masterclass.prototype.host;


/**
 * @type {number}
 */
Masterclass.prototype._maxLoad;


/**
 * @type {number}
 */
Masterclass.prototype.currLoad;


/**
 * @type {Description}
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