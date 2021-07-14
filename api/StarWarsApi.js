const axios = require("axios")
const baseUrl = "https://swapi.dev/api/"
const { MessageEmbed } = require("discord.js")

const getApiSW = async (channel, endpoint, title) => {
    const resposta = await axios.get(`${baseUrl}${endpoint}`)
    const {data} = resposta
    channel.send(new MessageEmbed()
    .setTitle(`${title}`)
    .setDescription(`
    Total de ${title}: ${data.count}
    ${title}:
    ${data.results.map(person => `- ${person.name}
    `).join("")}
    `))  
}

const getPersonagem = async (channel) => await getApiSW(channel, "people", "Personagens")
const getPlanets = async (channel) => await getApiSW(channel,"planets", "Planetas")
const getNaves = async (channel) => await getApiSW(channel, "naves", "Naves")

module.exports = {
    getPersonagem, 
    getPlanets,
    getNaves,
}