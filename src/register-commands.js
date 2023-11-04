import { config } from 'dotenv';
import { REST, Routes } from 'discord.js';
config();

const commands = [
    {
        name: 'setup',
        description: 'Setup the vc it should join',
        options: [
            {
                name: 'first-number',
                description: 'the first number',
                type: 'CHANNEL',
                channel_types: [2],
                require: true,
            }
        ],
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