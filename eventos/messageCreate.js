const {add,subtract,fetch} = require('quick.db')
const db = require('quick.db')
module.exports = (client, message) => {
  
     db.del = db.delete;
     db.sub = subtract;
     db.ver = fetch;
    const prefix = require('../config.json').prefix
    if (message.author.bot || message.channel.type === 'dm') return;


    if (message.content.indexOf(prefix) === 0) {

    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();

    const cmd = client.commandss.get(command) || client.commandss.find(cmd => cmd.aliases && cmd.aliases.includes(command));

    if (cmd) cmd.execute(client, message, args,db);
    }
    }