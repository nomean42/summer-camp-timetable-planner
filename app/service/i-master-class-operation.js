


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
 * @param {string} prop
 * @param {*} value
 * @return {Masterclass}
 */
IMasterclassOperation.prototype.setProp = function(prop, value) {};


/**
 *
 * @param {string} prop
 * @param {*} value
 * @return {Masterclass}
 */
IMasterclassOperation.prototype.getProp = function(prop, value) {};
