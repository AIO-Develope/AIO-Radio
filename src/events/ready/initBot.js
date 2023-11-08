
const fs = require('fs');

module.exports = (client) => {


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
    
};