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

//todo correct id search
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
	if (typeof searchResult[0] === 'undefined') {
		console.log('element with ' + property + ' = ' + value + ' was not found');
	}
	else {
		return searchResult;
	}
};
