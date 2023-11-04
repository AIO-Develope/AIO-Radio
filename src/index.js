import { config } from 'dotenv';
import { Client } from 'discord.js';
config();

const client = new Client({
    intents: [
        "Guilds",
        "MessageContent",
        "GuildMessages"

    ]

})

client.on('ready', (c) =>{
    console.log("test")
});

client.on('messageCreate', (message) =>{
    console.log(message.content)
})


client.login(process.env.BOT_TOKEN)