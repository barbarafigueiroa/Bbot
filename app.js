
const { Client}= require('discord.js')
const botfunctions = require('./BotFunctions')


new Client()
.on("message", botfunctions)
.login('ODYyMTEyOTM0NDI4MDE2NjYw.YOTnPA.q7CJdX5gqYib7l4iWe2WmJKvwZA');

