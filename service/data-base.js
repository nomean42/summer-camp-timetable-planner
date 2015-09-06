

/**
 *
 * @constructor
 * @implements IDataBase
 */
DataBase = function() {
	this._memberDataBase = [];
};


/**
 * @inheritDoc
 */
DataBase.prototype.set = function(member) {
	member.setId();
	this._memberDataBase.push(member);
	return member.getId();
};


/**
 *
 * @inheritDoc
 */
DataBase.prototype.get = function(property, value) {
	var searchResult = [];
	for (var i = 0; i < this._memberDataBase.length; ++i) {
		if (this._memberDataBase[i][property] === value) {
			searchResult.push(this._memberDataBase[i]);
		}

	}
	return searchResult;
};


/**
 * @type {Array.<IDataBase.Item>}
 */
DataBase.prototype._memberDataBase;