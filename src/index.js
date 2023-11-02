const { Client, IntentsBitField } = require('discord.js')
const { config } = require('dotenv')

config();


const client = new Client({
    intents: [
        IntentsBitField.Flags.Guilds
    ]

})

client.on('ready', (c) =>{
    console.log("test")
});


client.login(process.env.BOT_TOKEN)