module.exports = client => {
    eventos = './eventos'
    const fs = require('fs')
    const events = fs.readdirSync(eventos).filter(file => file.endsWith('.js'));
    for (const file of events) {
        const event = require(`${eventos}/${file}`);
        client.on(file.split(".")[0], event.bind(null, client));
    
    }}