


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
 * @param {Masterclass.Params} masterclassParams
 * @return {Masterclass}
 */
IMasterclassOperation.prototype.setProp = function(masterclass, masterclassParams) {};


/**
 *
 * @param {Masterclass} masterclass
 * @param {string} prop
 * @return {*}
 */
IMasterclassOperation.prototype.getProp = function(masterclass, prop) {};
