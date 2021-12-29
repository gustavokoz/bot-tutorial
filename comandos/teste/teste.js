const db = require('quick.db')
module.exports = {
name: 'diario', 
aliases: [],
execute(client, message, args) {
db.add(`dinheiro_${message.author.id}`,1000)
message.reply('você ganhou 1000 de dinheiro')
}
}