const Discord = require('discord.js');
const client = new Discord.Client();
const token = 'NTM4MTEzNzc4MTM5NjYwMjkz.DyvcKg.M3ZorM6G64M9zKqUtL2zJ-xoSnA';

var bot = new Discord.Client();

bot.on('ready', () => {
    console.log("Bot Ready");
});

bot.login(token).catch(err => console.log(err));