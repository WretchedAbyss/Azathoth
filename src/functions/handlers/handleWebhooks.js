const { Client } = require('discord.js');
const fs = require('fs');

module.exports = (Client)
const webhookFolders = fs.readdirSync('./src/webhooks');
for (const folder of webhookFolders) {
    const webhookFiles = fs
        .readdirSync(`./src/webhooks/${folder}`)
        .filter((file) => file.endsWith(".js"));
    switch (folder) {
        case "client":
            for (const file of webhookFiles) {
            }
    }
}