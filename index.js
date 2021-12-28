const token = require('./config.json').token// puxa o token do config.json
const prefix = require('./config.json').prefix// puxa o prefixo do config.json
const { Client,Intents,MessageActionRow,MessageAttachment,MessageButton,MessageEmbed,Presence } = require('discord.js')//pega depedencias do discord
const client = new Client({intents: 32767})// define o client
client.on('messageCreate', msg =>{
    let message = msg;
    let command = msg.content
    if(command === prefix + "teste1") {
        msg.reply('teste feito com sucesso')

    }
    if(command === prefix + "teste2") {
       let embed = new MessageEmbed()
       .setAuthor(msg.author.username)
       .setColor('GREY')
       .setDescription('DRESCRIÇÃO')
       .setTitle('titulo')
       .setFooter('rodapé', msg.author.displayAvatarURL)
msg.reply({content: 'texto',embeds: [embed]})
    }
    if(command === prefix + "teste3") {
    let row = new MessageActionRow().addComponents(
        new MessageButton()
        .setCustomId('1')
        .setStyle('DANGER')
        .setLabel('texto')
    )
    msg.reply({components: [row], content: 'texto'})
    }
})
client.on('interactionCreate', i =>{
    if(i.isButton()) {
        const filter = i => i.customId === "1";

        const collector = i.channel.createMessageComponentCollector({
          filter
        });
        collector.on('collect', i =>{
            i.reply('oi')
        })          
    } 
})
client.on('error', error =>{
    console.log(error)
})
process.on("unhandledRejection", error => {
    console.log(error)
    });
client.login(token)