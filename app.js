
const { Client}= require('discord.js')
const botfunctions = require('./BotFunctions')
const api = require("./api/StarWarsApi")
require('dotenv/config')

new Client()
.on("message", botfunctions)
.login(process.env.APP_TOKEN);

