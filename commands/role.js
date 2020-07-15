const { args } = require("./args-info")
const { execute } = require("./ping")

module.exports = {
	name: "role",
	description: "Set role of a user",
	args: true,
	usage: "<usage> <role>",
	execute(message, args) {
	}
};