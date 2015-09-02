/**
 *
 * @constructor
 * @implements IDataBase
 */
DataBase = function() {};


/**
 * @inheritDoc
 */
DataBase.prototype.set = function(member) {
	member.setId();
	aliveDataBase.push(member);
	return member._id;
};


/**
 *
 * @inheritDoc
 */
DataBase.prototype.get = function(property, value) {};
