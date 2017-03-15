var routes = {
	users: require('./lib/users'),
	masterclasses: require('./lib/masterclasses')
};


/**
 * @type {{
 *     users: function(express.Router),
 *     masterclasses: function(express.Router)
 * }}
 */
module.exports = routes;
