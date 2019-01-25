const Discord = require('discord.js');
const client = new Discord.Client();

bot.on('ready', () => {
    console.log("Bot Ready");
});

bot.login(process.env.toek);