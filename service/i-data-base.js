/**
 *
 * @constructor
 * @interface
 */
IDataBase = function() {};


/**
 * Return element id
 * @param {IDataBase.Type} member
 * @return {string}
 */
IDataBase.prototype.set = function(member) {};


/**
 *
 * @param {string} property
 * @param {*} value
 * @return {Array.<IDataBase.Type>}
 */
IDataBase.prototype.get = function(property, value) {};


/**
 * @enum {string}
 */
IDataBase.Type = {
    MEMBER: 'member',
    MASTERCLASS: 'masterclass'
};
