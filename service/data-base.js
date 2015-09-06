

/**
 *
 * @constructor
 * @implements IDataBase
 */
DataBase = function() {
	this._memberDataBase = [];
	this._init();
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
 * @protected
 */
DataBase.prototype._init = function() {
	this._data = {};
	Object.keys(this.Type).forEach(function (type, i, array) {
		this._data[type] = [];
	}, this);
};


/**
 * @type {Array.<IDataBase.Item>}
 */
DataBase.prototype._memberDataBase;