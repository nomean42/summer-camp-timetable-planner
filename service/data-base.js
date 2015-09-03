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
	memberDataBase.push(member);
	return member._id; //todo 'нельзя обращаться так к непубличным свойствам. нужен публичный метод member.getId()'
};

//todo
/**
 *
 * @inheritDoc
 */
DataBase.prototype.get = function(property, value) {};
