const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('At your service sir');
});

client.on('message', message => {
    if (message.content === 'wow') {
        message.channel.sendMessage('thats pretty nice');
  	}
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
