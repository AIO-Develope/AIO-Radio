const { ApplicationCommandOptionType, PermissionFlagsBits } = require('discord.js')


module.exports = {
    name: 'setup',
    description: 'Set the voice channel you want to use for the radio.',
    // devOnly:
    // testOnly:
    options: [
        {
            name: 'channel',
            description: 'The channel you want to join the bot.',
            require: true,
            type: ApplicationCommandOptionType.Channel,
        }


],

permissionsRequired: [PermissionFlagsBits.Administrator],


    callback: (client, interaction) =>{

        const channelObject = interaction.options.getChannel('channel');


        if (channelObject.type === 2){
            interaction.reply(`Bot is now set to channel ${channelObject.name}`)
            

        }else{
            interaction.reply(`${channelObject.name} is not a voice channel!`)

        }
    },
};