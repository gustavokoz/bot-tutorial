const { SlashCommandBuilder } = require('@discordjs/builders');
const discord = require("discord.js")
const Discord = require("discord.js")
const db = require("quick.db")
const { MessageEmbed, MessageActionRow, MessageButton } = require('discord.js');


module.exports = {
     data: new SlashCommandBuilder()
        .setName('teste')
        .setDescription('comando de teste'),
      
       
    async execute(i,client) {
i.rep('você acabou de me testar')

             
             }
             }