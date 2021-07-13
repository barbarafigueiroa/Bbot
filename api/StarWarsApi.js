const axios = require("axios")
const baseUrl = "https://swapi.dev/api/"
const { MessageEmbed } = require("discord.js")

const getPersonagem = async (channel) =>{
    const resposta = await axios.get(`${baseUrl}people`)
    const {data} = resposta
    channel.send(new MessageEmbed()
    .setTitle(`PERSONAGENS`)
    .setDescription(`
    Total de Personagens: ${data.count}
    Persongens:
    ${data.results.for(person => `- ${person.name}`)}`)
   
}
module.exports = {
    getPersonagem
}