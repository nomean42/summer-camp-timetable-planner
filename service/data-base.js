

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
DataBase.prototype.set = function(type, data) {
	var id = this._generateId();
	data.setId(id);
	this._data[type].push(data);
	return id;
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
 * @return {string}
 * @protected
 */
DataBase.prototype._generateId = function() {
	// todo
	return (Math.random() * 1000).toString();
};


/**
 * @type {Array.<IDataBase.Item>}
 */
DataBase.prototype._memberDataBase;