module.exports = (client) => {
  const fs = require('fs');

    // Define the path to your data file
    const filePath = 'data.json';
    
    fs.readFile(filePath, 'utf8', (err, data) => {
      if (err) {
        console.error(`Error reading file: ${err}`);
        return;
      }
    
      try {
        // Parse the JSON data from the file
        const jsonData = JSON.parse(data);
    
        // Iterate through the data and perform an action with the second value
        for (const guildid in jsonData) {
          const vcid = jsonData[guildid];
          
          // Replace this with your desired action with the second value
          console.log(`For first vc ${vcid}, do something with guildid ${guildid}`);
        }
      } catch (parseError) {
        console.error(`Error parsing JSON data: ${parseError}`);
      }
    });

      // Function to join the voice channel
  function joinVoiceChannel(guildId, channelId) {
    const guild = client.guilds.cache.get(guildId);
    if (!guild) {
        console.error(`Guild with ID ${guildId} not found.`);
        return;
    }

    const channel = guild.channels.cache.get(channelId);
    if (!channel || channel.type !== 'voice') {
        console.error(`Voice channel with ID ${channelId} not found or invalid.`);
        return;
    }

    channel.join().then(connection => {
        console.log(`Successfully joined ${channel.name} in ${guild.name}`);
        // You can do more here, like playing music or whatever you want
    }).catch(error => {
        console.error(`Error joining voice channel: ${error}`);
    });
}


// Function to iterate through data.json and join voice channels
function joinVoiceChannels() {
  readData((err, jsonData) => {
      if (err) {
          return;
      }

      // Iterate through each guild/channel pair in data.json
      Object.entries(jsonData).forEach(([guildId, channelId]) => {
          joinVoiceChannel(guildId, channelId);
      });
  });
}
// Join voice channels on bot startup

  joinVoiceChannels();



    
};