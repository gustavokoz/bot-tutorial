const token = require('./config.json').token// puxa o token do config.json
const TOKEN = require('./config.json').token// puxa o token do config.json
const prefix = require('./config.json').prefix// puxa o prefixo do config.json
const discord = require('discord.js')
const fs = require('fs')
const { Client,Intents,MessageActionRow,MessageAttachment,MessageButton,MessageEmbed,Presence } = require('discord.js')//pega depedencias do discord
const client = new Client({intents: 32767})// define o client

   require('./comandos.js')(client)
   require('./eventos.js')(client)
client.on('ready' , () =>{
console.log('\033[32m', client.user.username + ' está online')
})
client.on('error', error =>{
    console.log(error)
})
process.on("unhandledRejection", error => {
    console.log(error)
    });
    
client.once('ready', () => {


 
  const CLIENT_ID = client.user.id;
  const rest = new REST({
      version: '9'
  }).setToken(TOKEN);
  (async () => {
      try {
          if (!TEST_GUILD_ID) {
              await rest.put(
                  Routes.applicationCommands(CLIENT_ID), {
                      body: commands
                  },
              );

          } else {
              await rest.put(
                  Routes.applicationGuildCommands(CLIENT_ID, TEST_GUILD_ID), {
                      body: commands
                  },
              );

          }
      } catch (error) {
          if (error) console.error(error);
      }
  })();
});
client.commands = new discord.Collection();
const commands = [];
const TEST_GUILD_ID = "";
const {
    REST
} = require('@discordjs/rest');
const {
    Routes
} = require('discord-api-types/v9');
fs.readdirSync('./slash').forEach(dirs => {
    const scomandos = fs.readdirSync(`./slash/${dirs}`).filter(files => files.endsWith('.js'));
for (const file of scomandos) {
    
    const command = require(`./slash/${dirs}/${file}`);

    commands.push(command.data.toJSON());
    client.commands.set(command.data.name, command);
  
    
}})

client.on('interactionCreate', async i => {
  let interaction = i;
  i.author = i.user;
  message = i;
  i.rep = interaction.followUp
  if (!interaction.isCommand()) return;
  await interaction.deferReply();
  const command = client.commands.get(interaction.commandName);
  if (!command) return;
  try {
      await command.execute(i, client);
  } catch (error) {
      if (error) console.error(error);
      await message.channel.send({ content: 'error', ephemeral: true });
  }
})

client.login(token)