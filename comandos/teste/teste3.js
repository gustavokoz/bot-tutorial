const db = require('quick.db')
module.exports = {
name: 'diario2', 
aliases: [],
execute(client, message, args) {
db.sub(`dinheiro_${message.author.id}`,1000)
message.reply('você perdeu 1000 de dinheiro')
}
}