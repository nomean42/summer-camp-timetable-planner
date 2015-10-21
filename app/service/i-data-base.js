


/**
 *
 * @constructor
 * @interface
 */
IDataBase = function() {};


/**
 * Return element id
 * @param {IDataBase.Type} type
 * @param {IDataBase.Item} data
 * @return {string}
 */
IDataBase.prototype.set = function(type, data) {};


/**
 *
 * @param {IDataBase.Type} type
 * @param {string} property
 * @param {*} value
 * @return {Array.<IDataBase.Item>}
 */
IDataBase.prototype.get = function(type, property, value) {};


/**
 * @enum {string}
 */
IDataBase.Type = {
	MEMBER: 'member',
	MASTERCLASS: 'masterclass'
};


/**
 * @typedef {Object}
 */
IDataBase.Item;
