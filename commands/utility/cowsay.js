/* eslint-disable no-tabs */
const { SlashCommandBuilder } = require('discord.js');
const cowsay = require('cowsay');

const optionList = [
	'ackbar', 'aperture-blank', 'aperture', 'armadillo', 'atat', 'atom', 'awesome-face', 'banana', 'bearface', 'beavis.zen', 'bees', 'bill-the-cat', 'biohazard', 'bishop', 'black-mesa',
	'bong', 'box', 'broken-heart', 'bud-frogs', 'bunny', 'C3PO', 'cake-with-candles', 'cake', 'cat', 'cat2', 'catfence', 'charizardvice', 'charlie', 'cheese', 'chessmen', 'chito', 'claw-arm',
	'clippy', 'companion-cube', 'cower', 'cowfee', 'cthulhu-mini', 'cube', 'daemon', 'dalek-shooting', 'dalek', 'default', 'docker-whale', 'doge', 'dolphin', 'dragon-and-cow', 'dragon', 'ebi_furai',
	'elephant-in-snake', 'elephant', 'elephant2', 'explosion', 'eyes', 'fat-banana', 'fat-cow', 'fence', 'fire', 'flaming-sheep', 'fox', 'ghost', 'ghostbusters', 'glados', 'goat', 'goat2', 'golden-eagle',
	'hand', 'happy-whale', 'hedgehog', 'hellokitty', 'hippie', 'hiya', 'hiyoko', 'homer', 'hypno', 'ibm', 'iwashi', 'jellyfish', 'karl_marx', 'kilroy', 'king', 'kiss', 'kitten', 'kitty', 'knight', 'koala',
	'kosh', 'lamb', 'lamb2', 'lightbulb', 'lobster', 'lollerskates', 'luke-koala', 'mailchimp', 'maze-runner', 'mech-and-cow', 'meow', 'milk', 'minotaur', 'mona-lisa', 'moofasa', 'mooghidjirah', 'moojira',
	'moose', 'mule', 'mutilated', 'nyan', 'octopus', 'okazu', 'owl', 'pawn', 'periodic-table', 'personality-sphere', 'pinball-machine', 'psychiatrichelp', 'psychiatrichelp2', 'pterodactyl', 'queen', 'R2-D2',
	'radio', 'ren', 'renge', 'robot', 'robotfindskitten', 'roflcopter', 'rook', 'sachiko', 'satanic', 'seahorse-big', 'seahorse', 'sheep', 'shikato', 'shrug', 'skeleton', 'small', 'smiling-octopus', 'snoopy',
	'snoopyhouse', 'snoopysleep', 'spidercow', 'squid', 'squirrel', 'stegosaurus', 'stimpy', 'sudowoodo', 'supermilker', 'surgery', 'tableflip', 'taxi', 'telebears', 'template', 'threader', 'threecubes', 'toaster',
	'tortoise', 'turkey', 'turtle', 'tux-big', 'tux', 'tweety-bird', 'USA', 'vader-koala', 'vader', 'weeping-angel', 'whale', 'wizard', 'wood', 'world', 'www', 'yasuna_01', 'yasuna_02', 'yasuna_03', 'yasuna_03a',
	'yasuna_04', 'yasuna_05', 'yasuna_06', 'yasuna_07', 'yasuna_08', 'yasuna_09', 'yasuna_10', 'yasuna_11', 'yasuna_12', 'yasuna_13', 'yasuna_14', 'yasuna_16', 'yasuna_17', 'yasuna_18', 'yasuna_19', 'yasuna_20',
	'ymd_udon', 'zen-noh-milk',
];

module.exports = {
	data: new SlashCommandBuilder()
		.setName('cowsay')
		.setDescription('Custom message by user')
		.addStringOption((option) => option.setName('text')
			.setDescription('The message to display for user')
			.setRequired(true)
			.setMaxLength(25))
		.addStringOption((option) => option.setName('cow')
			.setDescription('The option that will project for user')
			.setRequired(true)),
	async execute(interaction) {
		const userText = interaction.options.getString('text');
		const userChoice = interaction.options.getString('cow');

		if (!optionList.includes(userChoice)) {
			await interaction.reply('The option you have dialed is not available, please try again!');
			return;
		}

		const botMessage = cowsay.say({
			text: userText,
			f: userChoice,
		});
		if (botMessage.length <= 2000) {
			await interaction.reply(`Here's your custom message: \`\`\`${botMessage}\`\`\``);
		}
		else {
			await interaction.reply('Too long a message!');
		}
	},
};
