const { once } = require('events');

module.exports = {
	name : 'ready',
	once: true,
	async execute(client) {
		console.log(`Ready to go ${client.user.tag} is logged in`);
	},
};