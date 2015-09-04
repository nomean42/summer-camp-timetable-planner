var memberDataBase = [];

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
	return member.getId();
};

//todo finish
/**
 *
 * @inheritDoc
 */
DataBase.prototype.get = function(property, value) {
	var outMiniDataBase = [];
	for (var i = 0; i < memberDataBase.length; ++i) {
		if (memberDataBase[i][property] === value) {
			outMiniDataBase.push(memberDataBase[i]);
		}
		else if (typeof outMiniDataBase[0] === 'undefined') {
			console.log('element with ' + property + ' = ' + value + 'was not found');
		}
		else {
			return outMiniDataBase;
		}
	}
};
