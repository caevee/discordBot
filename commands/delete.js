module.exports = {
	name: "delete",
	description: "Delete a set amount of messages inside the given channel.",
	execute(message, args) {
		const amount = parseInt(args[0] + 1);
		if (isNaN(amount)) {
			return;
		}
		else if (amount <= 1 || amount > 100) {

			return message.reply("You need to specify a number between 1 and 99");
		}

		message.channel.bulkDelete(amount, true);
	},
};