const { REST } = require('@discordjs/rest');
const { Routes } = require('discord-api-types/v10')
const fs = require('fs');
module.exports = (client) => {
    client.handleCommands = async () => {
        const commandFolders = fs.readdirSync('./src/commands');
        for (const folder of commandFolders) {
            const commandFiles = fs
                .readdirSync(`./src/commands/${folder}`)
                .filter(file => file.endsWith('.js'));
            const { commands, commandsArray } = client;
            for (const file of commandFiles) {
                const command = require(`../../commands/${folder}/${file}`);
                commands.set(command.data.name, command);
                commandsArray.push(command.data.toJSON());
                console.log(`Command: ${command.data.name} has been passed through the handler`);

            }
        }

        const clientId = '694989302224125982';
        const guildId = '1039601803462979584';
        const rest = new REST({ version: '10' }).setToken(process.env.TOKEN);
        try {
            console.log(`Started refreshing application (/) commands.`);

            // The put method is used to fully refresh all commands in the guild with the current set
            await rest.put(Routes.applicationGuildCommands(clientId, guildId),
                { body: client.commandsArray },
            );

            console.log(`Successfully reloaded application (/) commands.`);
        } catch (error) {
            // And of course, make sure you catch and log any errors!
            console.error(error);
        }
    };
};