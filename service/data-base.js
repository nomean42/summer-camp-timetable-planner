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


/**
 *
 * @inheritDoc
 */
DataBase.prototype.get = function(property, value) {
	var searchResult = [];
	for (var i = 0; i < memberDataBase.length; ++i) {
		if (memberDataBase[i][property] === value) {
			searchResult.push(memberDataBase[i]);
		}

	}
	return searchResult;
};
