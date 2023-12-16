/* eslint-disable indent */
const {
  ActionRowBuilder, ButtonBuilder, ButtonStyle, SlashCommandBuilder,
} = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('guide')
    .setDescription('Link to GitHub repo page.'),
  async execute(interaction) {
    const viewmorebutton = new ButtonBuilder()
      .setCustomId('view more')
      .setLabel('View More')
      .setStyle(ButtonStyle.Success);

    const linkbutton = new ButtonBuilder()
      .setLabel('GitHub repo')
      .setURL('https://github.com/RVCC-IDMX/my-bot-ChristNunez')
      .setStyle(ButtonStyle.Link);

    const row = new ActionRowBuilder()
      .addComponents(viewmorebutton, linkbutton);

    await interaction.reply({
      content: 'Command created in this GitHub repo: ',
      components: [row],
    });
  },
};
