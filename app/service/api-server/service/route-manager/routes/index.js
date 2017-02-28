var routes = {
	users: require('./lib/users'),
	masterclasses: require('./lib/masterclasses')
};


/**
 * @type {{
     users: Function,
     masterclasses: Function
 }}
 */
module.exports = routes;
