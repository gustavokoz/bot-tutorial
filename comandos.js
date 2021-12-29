module.exports = async client => {
comandos = './comandos'
  const Discord = require("discord.js")
    const fs = require("fs")
    client.commandss = new Discord.Collection();
client.aliases = new Discord.Collection();
client.categories = fs.readdirSync(comandos);
fs.readdirSync(comandos).forEach(dirs => {
    const commands = fs.readdirSync(`${comandos}/${dirs}`).filter(files => files.endsWith('.js'));

    for (const file of commands) {
        const command = require(`${comandos}/${dirs}/${file}`);
        client.commandss.set(command.name.toLowerCase(), command);
    };
    
});
}