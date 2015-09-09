/**
 *
 * @param {Member.Params} baseParams
 * @param {{
 * 		id: string
 * }} adminParams
 * @constructor
 */
Admin = function(baseParams, adminParams) {
	this._id = adminParams.id;
	Member.call(this, baseParams, Member.Type.ADMIN);
};
Admin.prototype = Object.create(Member.prototype);

/**
 * @type {string}
 * @protected
 */
Admin.prototype._id;
