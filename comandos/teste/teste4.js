const db = require('quick.db')
module.exports = {
name: 'del', 
aliases: [],
execute(client, message, args) {
db.del(`dinheiro_${message.author.id}`)
message.reply('você não tem + dinheiro')
}
}