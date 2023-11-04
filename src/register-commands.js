require('dotenv').config();
const { REST, Routes } = require('discord.js');


const commands = [
    {
        name: 'hey',
        description: 'Replies',
    },
];

const rest = new REST({ version: '10'}).setToken(process.env.BOT_TOKEN);

(async () => {
    try{
        console.log('Registering')
        await rest.put(
            Routes.applicationGuildCommands(
                process.env.CLIENT_ID, 
                process.env.GUILD_ID
            ),

            { body: commands }
        );
        console.log("finished")


    } catch (error){
        console.log(error)
    }
})();