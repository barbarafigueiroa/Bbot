
const Discord = require('discord.js')
const bot = new Discord.Client()
const botfunctions = require('./BotFunctions')

bot.on("message", botfunctions)

bot.login('ODYyMTEyOTM0NDI4MDE2NjYw.YOTnPA.q7CJdX5gqYib7l4iWe2WmJKvwZA');

