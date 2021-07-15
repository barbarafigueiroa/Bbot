
const { Client}= require('discord.js')
const botfunctions = require('./BotFunctions')
const api = require("./api/StarWarsApi")

new Client()
.on("message", botfunctions)
.login('ODY0NjczNTMyODM5NTkxOTQ2.YO43-w.BxmhZo8Dv7_M0L3SE6mHOtizwLM');

