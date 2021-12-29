const db = require('quick.db')
module.exports = {
    name: 'saldo', 
    aliases: [],
    execute(client, message, args) {
   let dinheiro = db.ver(`dinheiro_${message.author.id}`)
    message.reply(`${dinheiro} dinheiros`)
    }
    }