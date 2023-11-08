const { ApplicationCommandOptionType, PermissionFlagsBits } = require('discord.js')
const fs = require('fs');


module.exports = {
    name: 'setup',
    description: 'Set the voice channel you want to use for the radio.',
    devOnly: false,
    testOnly: true,
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


            // Pfad zur JSON-Datei
            const filePath = 'data.json';

            // Funktion zum Lesen der JSON-Datei
            function readData(callback) {
            fs.readFile(filePath, 'utf8', (err, data) => {
                if (err) {
                console.error('Fehler beim Lesen der Datei:', err);
                callback(err);
                return;
                }

                // Parse die JSON-Daten oder erstelle ein leeres Objekt, wenn die Datei leer ist
                let jsonData = {};
                if (data) {
                jsonData = JSON.parse(data);
                }

                callback(null, jsonData);
            });
            }

            // Funktion zum Schreiben der JSON-Datei
            function writeData(data, callback) {
            // Konvertiere das JSON-Objekt in einen String
            const jsonStr = JSON.stringify(data, null, 2); // Das zweite Argument ist für die hübsche Formatierung mit einer Einrückung von 2 Leerzeichen.

            // Schreibe die Daten zurück in die Datei
            fs.writeFile(filePath, jsonStr, (err) => {
                if (err) {
                console.error('Fehler beim Schreiben der Datei:', err);
                callback(err);
                } else {
                console.log('Daten erfolgreich hinzugefügt.');
                callback(null);
                }
            });
            }

            // Daten hinzufügen
            readData((err, jsonData) => {
            if (err) {
                return;
            }

            // Füge die Zuordnung von guildid zu vcid hinzu
            jsonData[channelObject.guild.id] = channelObject.id;

            // Schreibe die aktualisierten Daten zurück in die JSON-Datei
            writeData(jsonData, (err) => {
                if (!err) {
                console.log('Zuordnung erfolgreich hinzugefügt.');
                }
            });
            });

            const fs = require('fs');

            

            


            interaction.reply(`Bot is now set to channel ${channelObject.name}`)
            

        }else{
            interaction.reply(`${channelObject.name} is not a voice channel!`)

        }
    },
};