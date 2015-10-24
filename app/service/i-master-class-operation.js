


/**
 *
 * @constructor
 * @interface
 */
IMasterclassOperation = function() {};


/**
 *
 * @param {Masterclass.Params} masterclassParams
 * @return {Masterclass}
 */
IMasterclassOperation.prototype.initMasterclass = function(masterclassParams) {};


/**
 *
 * @param {Masterclass} masterclass
 * @param {string} prop
 * @param {*} value
 * @return {Masterclass}
 */
IMasterclassOperation.prototype.setProp = function(masterclass, prop, value) {};


/**
 *
 * @param {Masterclass} masterclass
 * @param {string} prop
 * @return {Masterclass}
 */
IMasterclassOperation.prototype.getProp = function(masterclass, prop) {};
