const Discord = require('discord.js');
const bot = new Discord.Client();

bot.on('message', (message) => {

    if(message.content == 'wow') {
        //message.reply('thats pretty nice')
        message.channel.sendMessage('thats pretty nice');
    }
});

client.login(process.env.BOT_TOKEN);
